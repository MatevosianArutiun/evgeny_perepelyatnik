"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";

function apnut_tolko_1_raz() {
  if (!window.location.hash) {
    window.location = window.location + "#uge_obnovleno";
    window.location.reload();
  }
}
setTimeout("apnut_tolko_1_raz()", 1599);

showLoading();
changeTitle();
setInterval(changeTitle, 12000);
