"use strict";
import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";
document.addEventListener("DOMContentLoaded", () => {
  showLoading();
  changeTitle();
  setInterval(changeTitle, 12000);
});
