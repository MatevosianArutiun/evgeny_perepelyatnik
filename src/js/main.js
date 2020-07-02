"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";
import { changeWidgetNavigation } from "./scripts/widget-navigation";

document.addEventListener("DOMContentLoaded", () => {
  showLoading();
  changeTitle();
  setInterval(changeTitle, 12000);
  changeWidgetNavigation();
});
