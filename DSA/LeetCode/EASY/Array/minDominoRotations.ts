class DominoRotator {
  private readonly tops: number[];
  private readonly bottoms: number[];
  private readonly n: number;
private readonly IMPOSSIBLE: number = Number.MAX_SAFE_INTEGER;

  constructor(tops: number[], bottoms: number[]) {
if(!tops || !bottoms|| tops.length !== bottoms.length ) {
  throw new Error('Input arrays must exists and have the same length');
}

    this.n = tops.length;
    if(this.n < 2) {
      throw new Error('Input arrays must have at leadt 2 elements.')
    }

    this.tops = tops;
    this.bottoms = bottoms;
  }

  public calculateMinRotations(): number {
    const targetA = this.tops[0];
    const targetB = this.bottoms[0];
    const rorationForA = this._checkTarget(targetA);
    let rorationForB = this.IMPOSSIBLE;

    if(targetA !== targetB) {
      rorationForB = this._checkTarget(targetB);
    }else {
      rorationForB = rorationForA;
    }

    const minRotations = Math.min(rorationForA, rorationForB);

    return (minRotations === this.IMPOSSIBLE) ? -1 : minRotations;
  }

  private _checkTarget(target: number): number {
    let rotationsTop = 0;
    let rotationsBottom = 0;

    for(let i=0; i<this.n; i++) {
      if(this.tops[i] !== target && this.bottoms[i] !== target) {
        return this.IMPOSSIBLE;
      }

      if(this.tops[i] !== target) { rotationsTop++;}

      if(this.bottoms[i] !== target) { rotationsBottom++}
    }

    return Math.min(rotationsBottom, rotationsTop);
  }

}
function minDominoRotations(tops: number[], bottoms: number[]): number {
if(!tops || !bottoms|| tops.length !== bottoms.length || tops.length < 2) {
  return -1;
}

  try {
    const rotator = new DominoRotator(tops, bottoms);

    return rotator.calculateMinRotations();
  } catch (
  error: any
  ) {
    return -1;
  }
};

const tops1 = [2, 1, 2, 4, 2, 2];
const bottoms1 = [5, 2, 6, 2, 3, 2];
console.log(`Example 1: ${minDominoRotations(tops1, bottoms1)}`); 

const tops2 = [3, 5, 1, 2, 3];
const bottoms2 = [3, 6, 3, 3, 4];
console.log(`Example 2: ${minDominoRotations(tops2, bottoms2)}`); 

const tops3 = [1, 1, 1, 1, 1, 1];
const bottoms3 = [1, 2, 3, 4, 5, 6];
console.log(`Example 3: ${minDominoRotations(tops3, bottoms3)}`);

const tops4 = [1, 2, 1, 1, 1, 2, 2, 2];
const bottoms4 = [2, 1, 2, 2, 2, 2, 2, 2];
console.log(`Example 4: ${minDominoRotations(tops4, bottoms4)}`)