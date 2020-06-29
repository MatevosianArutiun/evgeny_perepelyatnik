"use strict";

import { showLoading } from "./scripts/preloader";
import { changeTitle } from "./scripts/title";

showLoading();
changeTitle();
setInterval(changeTitle, 12000);

function setCookie(name, value) {
  document.cookie = name + "=" + escape(value);
}

function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset);
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}

var cookie = getCookie("reload");

if (cookie == null) {
  setCookie("reload", 0);
}

var reload = getCookie("reload");

if (reload == 0) {
  setCookie("reload", 1);
  // обновляем страницу
  window.location.reload();
}
