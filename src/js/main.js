"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";

showLoading();
changeTitle();
setInterval(changeTitle, 12000);
