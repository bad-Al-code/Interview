/**
 * @interface Lockable
 */
export interface Lockable {
  lock(): void;

  unlock(): void;
}