interface Packet {
  source: number;
  destination: number;
  timestamp: number;
}

class Router {
  private memoryLimit: number;
  private packet: Packet[];
  private packetSet: Set<string | number>;
  private packetMap: Map<number, number[]>;

  constructor(memoryLimit: number) {
    this.memoryLimit = memoryLimit;
    this.packet = []
    this.packetSet = new Set();
    this.packetMap = new Map();
  }

  addPacket(source: number, destination: number, timestamp: number): boolean {
    const key = this.packetKey(source, destination, timestamp);
    if (this.packetSet.has(key)) return false;

    if (this.memoryLimit === this.packet.length) {
      const removedElement = this.packet.shift()!
      this._removePacket(removedElement);


    }

    const newPacket: Packet = { source, destination, timestamp }
    this.packet.push(newPacket);
    this.packetSet.add(key)

    if (!this.packetMap.has(destination)) {
      this.packetMap.set(destination, [])
    }

    this.packetMap.get(destination)!.push(timestamp);

    return true;
  }

  forwardPacket(): number[] {
    if (this.packet.length === 0) { return [] }
    const removedPacket = this.packet.shift()!;
    this._removePacket(removedPacket);

    return [removedPacket.source, removedPacket.destination, removedPacket.timestamp];
  }
  private _removePacket(packet: Packet): void {
    const key = this.packetKey(packet.source, packet.destination, packet.timestamp);
    this.packetSet.delete(key);
    const timestamps = this.packetMap.get(packet.destination);
    if (timestamps) timestamps.shift()!
  }

  private packetKey(source: number, destination: number, timestamp: number): string {
    return `${source}-${destination}-${timestamp}`
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    const timestamps = this.packetMap.get(destination)
    if (!timestamps || timestamps.length === 0) { return 0 }
    const startIndex = this.getStartTime(timestamps, startTime);
    const endIndex = this.getEndTime(timestamps, endTime);

    return endIndex - startIndex;
  }

  private getStartTime(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] >= target) { right = mid }
      else { left = mid + 1 }
    }

    return left;
  }
  private getEndTime(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] > target) { right = mid }
      else { left = mid + 1 }
    }

    return left;
  }
}

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
