/*
  We use our template to build 2 websites with their implementations.
 */
import { WebsiteBuilder } from './Template';

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

  deploy() {
    console.log('deploying DummyWebsite');
  }
}

export class HeavyWebsite extends WebsiteBuilder {
  addFancyDesign() {
    console.log('adding fancy design to HeavyWebsite');
  }

  addUselessModules() {
    console.log('adding useless modules to HeavyWebsite');
  }

  createBasicComponents() {
    console.log('creating basic website for HeavyWebsite');
  }

  deploy() {
    console.log('deploying HeavyWebsite');
  }
}
