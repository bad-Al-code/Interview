class Tweet {
  public id: number;
  public timestamp: number;

  constructor(id: number, timestamp: number) {
    this.id = id;
    this.timestamp = timestamp;
  }
}

class User {
  public id: number;
  public followed: Set<number>;
  public tweets: Tweet[];

  constructor(id: number) {
    this.id = id;
    this.followed = new Set<number>();
    this.tweets = [];
    this.follow(id);
  }

  public follow(userId: number): void {
    this.followed.add(userId);
  }

  public unfollow(userId: number): void {
    if (userId !== this.id) {
      this.followed.delete(userId);
    }
  }

  public post(tweet: Tweet): void {
    this.tweets.push(tweet);
  }
}

class Twitter {
  private time: number;
  private userMap: Map<number, User>;
  private static readonly FEED_SIZE = 10;

  constructor() {
    this.time = 0;
    this.userMap = new Map<number, User>();
  }

  private _getUser(userId: number): User {
    if (!this.userMap.has(userId)) {
      this.userMap.set(userId, new User(userId));
    }
    return this.userMap.get(userId)!;
  }

  public postTweet(userId: number, tweetId: number): void {
    const user = this._getUser(userId);
    const timestamp = this.time++;
    const tweet = new Tweet(tweetId, timestamp);
    user.post(tweet);
  }

  public follow(followerId: number, followeeId: number): void {
    const follower = this._getUser(followerId);
    this._getUser(followeeId);
    follower.follow(followeeId);
  }

  public unfollow(followerId: number, followeeId: number): void {
    const follower = this._getUser(followerId);
    this._getUser(followeeId);
    follower.unfollow(followeeId);
  }

 
  public getNewsFeed(userId: number): number[] {
    const user = this._getUser(userId);
    const followees = user.followed; 
    const candidateTweets: Tweet[] = [];

    for (const followeeId of followees) {
      const followee = this.userMap.get(followeeId);
      if (followee) {
        const recentTweets = followee.tweets.slice(-Twitter.FEED_SIZE);
        candidateTweets.push(...recentTweets);
      }
    }

    candidateTweets.sort((a, b) => b.timestamp - a.timestamp);

    return candidateTweets.slice(0, Twitter.FEED_SIZE).map(t => t.id);
  }
}

function testAction(description: string, action: () => any, expected?: any) {
    console.log(`\nAction: ${description}`);
    const result = action();
    if (result !== undefined) {
        console.log(` -> Result:   ${JSON.stringify(result)}`);
    }
    if (expected !== undefined) {
        console.log(` -> Expected: ${JSON.stringify(expected)}`);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(` -> Status:   ${passed ? "PASSED" : "FAILED"}`);
    } else {
        console.log(` -> Status:   Action performed.`);
    }
}

const twitter = new Twitter();

testAction("user 1 posts tweet 5", () => twitter.postTweet(1, 5));
testAction("user 1 gets news feed", () => twitter.getNewsFeed(1), [5]);
testAction("user 1 follows user 2", () => twitter.follow(1, 2));
testAction("user 2 posts tweet 6", () => twitter.postTweet(2, 6));
testAction("user 1 gets news feed", () => twitter.getNewsFeed(1), [6, 5]);
testAction("user 1 unfollows user 2", () => twitter.unfollow(1, 2));
testAction("user 1 gets news feed", () => twitter.getNewsFeed(1), [5]);
testAction("user 1 posts tweet 7", () => twitter.postTweet(1, 7)); 
testAction("user 1 posts tweet 8", () => twitter.postTweet(1, 8));
testAction("user 2 posts tweet 9", () => twitter.postTweet(2, 9));
testAction("user 1 follows user 2 again", () => twitter.follow(1, 2));
testAction("user 1 gets news feed with multiple posts", () => twitter.getNewsFeed(1), [9, 8, 7, 5]);
testAction("user 1 gets news feed with multiple posts (CORRECTED)", () => twitter.getNewsFeed(1), [9, 8, 7, 6, 5]);

console.log("\n--- Testing Feed Size Limit (10) ---");
const twitter2 = new Twitter();
for (let i = 1; i <= 12; i++) {
    testAction(`user 20 posts tweet ${i}`, () => twitter2.postTweet(20, i));
}
testAction("user 20 gets news feed (size limit)", () => twitter2.getNewsFeed(20), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3]);
