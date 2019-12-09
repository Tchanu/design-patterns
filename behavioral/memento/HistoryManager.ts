import { Memento } from './Memento';
import { Originator } from './Originator';

// History manager is care taker which holds all snapshots and is responsible
// for creating and restoring originator's state
export class HistoryManager<T> {
  private snapshots: Memento<T>[] = [];

  constructor(private originator: Originator<T>) {
  }

  public save(): void {
    this.snapshots.push(this.originator.getSnapshot());
    console.log('snapshot created');
  }

  public undo(): void {
    if (!this.snapshots.length) {
      throw new Error('there are no snapshots to restore from');
    }
    const targetSnapshot = this.snapshots.pop();

    this.originator.restore(targetSnapshot);
    console.log('state restored');
  }

  // simply prints snapshots
  print(): void {
    console.log(this.snapshots.map(x => x.getState()));
  }
}
