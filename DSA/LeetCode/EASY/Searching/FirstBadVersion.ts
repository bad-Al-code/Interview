/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        if (isBadVersion(1)) {
            return 1;
        }
        let start = 1;
        let end = n;
        let mid = end;
        while (start < end - 1) {
            mid = Math.ceil((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        return end;
    };
};
