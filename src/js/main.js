"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";

function reset() {
  if (!window.location.hash) {
    window.location = window.location + "#reset";
    window.location.reload();
  }
}
setTimeout("reset()", 1599);

showLoading();
changeTitle();
setInterval(changeTitle, 12000);
