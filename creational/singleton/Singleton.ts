// singleton class
export class God {
    // to store singleton object
  private static instance: God;

    // you can't instantiate singleton class
  private constructor() {
  }

    // create/get singleton object
  static getInstance(): God {
        // check if object is already created
    if (!this.instance) {
      this.instance = new God();
    }
    return this.instance;
  }
}
