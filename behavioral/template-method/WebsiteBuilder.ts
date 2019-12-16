// WebsiteBuilder is a template that contains methods, abstract methods, hooks
export abstract class WebsiteBuilder {
  // simple steps to build website
  build(): void {
    this.createBasicComponents();
    this.addUselessModules();
    this.addFancyDesign();
    this.deploy();
  }

  // add abstract methods(aka abstract steps) to force subclass to provide their implementations
  abstract createBasicComponents(): void;

  abstract addUselessModules(): void;

  abstract addFancyDesign(): void;

  // common method(aka optional step)
  deploy(): void {
    console.log('Deploying website');
  }
}
