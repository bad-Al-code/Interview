import { Lockable } from "../../interfaces/Lockable";

export class NoLock implements Lockable{
  lock(): void {
    
  }

  unlock(): void {

  }
}