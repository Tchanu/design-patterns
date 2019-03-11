/*
  Scenario
  -hey Mike, do you know what Template Method does?
  -yeah, you define abstract class(template with methods) then you fill this skeleton with
  implementations.
 */

import { DummyWebsite, HeavyWebsite } from './Implementation';

const dummyWebsite = new DummyWebsite();
dummyWebsite.build();
// creating basic components for DummyWebsite
// adding useless modules to DummyWebsite
// adding fancy design to DummyWebsite
// deploying DummyWebsite

const heavyWebsite = new HeavyWebsite();
heavyWebsite.build();
// creating basic components for HeavyWebsite
// adding useless modules to HeavyWebsite
// adding fancy design to HeavyWebsite
// deploying HeavyWebsite
