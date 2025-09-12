class Stack {
  private items: number[] = []
  private top: number | null = null

  getTop() {
    if (this.items.length === 0) return null;

    return this.top;
  }
}
