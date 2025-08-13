class MaxHeap<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    public size(): number {
        return this.heap.length;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public push(value: T): void {
        this.heap.push(value);
        this._siftUp();
    }

    public pop(): T | undefined {
        if (this.size() <= 1) {
            return this.heap.pop();
        }
        const poppedValue = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this._siftDown();
        return poppedValue;
    }

    private _siftUp(): void {
        let nodeIdx = this.size() - 1;
        while (nodeIdx > 0 && this._compare(nodeIdx, this.parent(nodeIdx)) > 0) {
            this.swap(nodeIdx, this.parent(nodeIdx));
            nodeIdx = this.parent(nodeIdx);
        }
    }

    private _siftDown(): void {
        let nodeIdx = 0;
        while (
            (this.leftChild(nodeIdx) < this.size() && this._compare(this.leftChild(nodeIdx), nodeIdx) > 0) ||
            (this.rightChild(nodeIdx) < this.size() && this._compare(this.rightChild(nodeIdx), nodeIdx) > 0)
        ) {
            const greaterChildIdx = this.rightChild(nodeIdx) < this.size() &&
                this._compare(this.rightChild(nodeIdx), this.leftChild(nodeIdx)) > 0
                ? this.rightChild(nodeIdx)
                : this.leftChild(nodeIdx);
            
            this.swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }
    }

    private parent(i: number): number { return Math.floor((i - 1) / 2); }
    private leftChild(i: number): number { return i * 2 + 1; }
    private rightChild(i: number): number { return i * 2 + 2; }
    private swap(i: number, j: number): void { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
    private _compare(i: number, j: number): number { return this.comparator(this.heap[i], this.heap[j]); }
}

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

interface HeapNode {
    tweet: Tweet;
    userId: number;
    tweetIndex: number; 
}

class Twitter {
    private time: number;
    private userMap: User[];
    private static readonly FEED_SIZE = 10;
    private static readonly MAX_USERS = 501; 

    constructor() {
        this.time = 0;
        this.userMap = new Array(Twitter.MAX_USERS);
    }

    private _getUser(userId: number): User {
        if (!this.userMap[userId]) {
            this.userMap[userId] = new User(userId);
        }
        return this.userMap[userId];
    }

    public postTweet(userId: number, tweetId: number): void {
        const user = this._getUser(userId);
        user.post(new Tweet(tweetId, this.time++));
    }
    public follow(followerId: number, followeeId: number): void {
        this._getUser(followerId).follow(followeeId);
        this._getUser(followeeId); 
    }
    public unfollow(followerId: number, followeeId: number): void {
        this._getUser(followerId).unfollow(followeeId);
    }

    public getNewsFeed(userId: number): number[] {
        const mainUser = this._getUser(userId);
        if (!mainUser) return [];

        const heap = new MaxHeap<HeapNode>((a, b) => a.tweet.timestamp - b.tweet.timestamp);

        for (const followeeId of mainUser.followed) {
            const followee = this.userMap[followeeId];
            if (followee && followee.tweets.length > 0) {
                const lastTweetIndex = followee.tweets.length - 1;
                const lastTweet = followee.tweets[lastTweetIndex];
                heap.push({
                    tweet: lastTweet,
                    userId: followeeId,
                    tweetIndex: lastTweetIndex,
                });
            }
        }

        const newsFeed: number[] = [];
        while (newsFeed.length < Twitter.FEED_SIZE && heap.size() > 0) {
            const mostRecentNode = heap.pop()!;
            newsFeed.push(mostRecentNode.tweet.id);

            const fromUser = this.userMap[mostRecentNode.userId];
            const nextTweetIndex = mostRecentNode.tweetIndex - 1;

            if (nextTweetIndex >= 0) {
                const nextTweet = fromUser.tweets[nextTweetIndex];
                heap.push({
                    tweet: nextTweet,
                    userId: mostRecentNode.userId,
                    tweetIndex: nextTweetIndex,
                });
            }
        }

        return newsFeed;
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
