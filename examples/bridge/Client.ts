/*
  Scenario
  There was one inexperienced developer, let's call him Tom. Tom was creating websites
  followed by client's exact requirements. Back then the client was obsessed with white designs.
  On halfway of deadline the client changed his mind(as usual):
  -can we add design switch button right there? for Dark theme? It will take 10 min max!
  ...
  Whole project was based on light design. All pages were filled with bright inline styles.
  Tom was pretty fucked up by this requirement he didn't expected. After one good night sleep
  Tom found fascinating solution.
 */

// we create theme instances to inject into pages

import { DarkTheme, LightTheme, Theme } from './themes';
import { HomePage, InfoPage, Page } from './pages';

const darkTheme: Theme = new DarkTheme();
const lightTheme: Theme = new LightTheme();

// basically solution is to switch from inheritance to composition
const darkHomePage: Page = new HomePage(darkTheme);
const darkInfoPage: Page = new InfoPage(darkTheme);
const lightHomePage: Page = new HomePage(lightTheme);
const lightInfoPage: Page = new InfoPage(lightTheme);

darkHomePage.render(); // This is the home page with Dark Background
darkInfoPage.render(); // This is the info page with Dark Background
lightHomePage.render(); // This is the home page with Light Background
lightInfoPage.render(); // This is the info page with Light Background
