export interface Talking {
  talk(): void;
}

export class SimpleTalk implements Talking {
  talk(): void {
    console.log('simple talk');
  }
}

export class NoTalk implements Talking {
  talk(): void {
    console.log('can\'t talk');
  }
}
