/*
  Let's say every website creation has this 4 steps.
 */

export abstract class WebsiteBuilder {
  build(): void {
    this.createBasicComponents();
    this.addUselessModules();
    this.addFancyDesign();
    this.deploy();
  }

  abstract createBasicComponents();

  abstract addUselessModules();

  abstract addFancyDesign();

  abstract deploy();
}
