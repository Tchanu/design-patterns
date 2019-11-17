//region Simple Ui elements (products)
export interface Button {
  render(): void;
}

export interface Input {
  render(): void;
}

//endregion

export interface UIFactory {
  button(name: string): Button;

  input(name: string): Input;
}
