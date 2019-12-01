export interface Command {
  execute();

  undo();

  redo();
}
