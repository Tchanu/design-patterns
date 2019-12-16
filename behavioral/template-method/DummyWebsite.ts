import { WebsiteBuilder } from './WebsiteBuilder';

export class DummyWebsite extends WebsiteBuilder {
  addFancyDesign() {
    console.log('adding fancy design to DummyWebsite');
  }

  addUselessModules() {
    console.log('adding useless modules to DummyWebsite');
  }

  createBasicComponents() {
    console.log('creating basic components for DummyWebsite');
  }
}
