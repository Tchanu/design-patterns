/*
  Scenario
  There was one inexperienced developer, let's call him Tom. Tom was creating websites
  followed by client's exact requirements. Back then the client was obsessed with white designs.
  On halfway of deadline the client changed his mind(as usual):
  -can we add design switch button right there? for Dark theme? It will take 10 min max!
  ...
  Whole project was based on light design. All pages were filled with bright inline styles.
  Tom was pretty fucked up by this requirement he didn't expected. After one good night sleep
  Tom found fascinating solution on the internet.
 */

import { DarkTheme, LighTheme, Theme } from './Implementor';
import { HomePage, InfoPage, Page } from './Abstraction';

// create theme instances
const darkTheme: Theme = new DarkTheme();
const lightTheme: Theme = new LighTheme();

// fill page with meaningful themes
const darkHomePage: Page = new HomePage(darkTheme);
const darkInfoPage: Page = new InfoPage(darkTheme);
const lightHomePage: Page = new HomePage(lightTheme);
const lightInfoPage: Page = new InfoPage(lightTheme);

darkHomePage.render(); // This is the home page with Dark Background
darkInfoPage.render(); // This is the info page with Dark Background
lightHomePage.render(); // This is the home page with Light Background
lightInfoPage.render(); // This is the info page with Light Background
