export const showLoading = () => {
  let $main = document.querySelector("#main");
  const displayNone = () => {
    $main.classList.remove("main");
    $main.classList.add("maine--active");
  };
  setTimeout(displayNone, 3000);

  let $loader = document.querySelector(".loader");

  window.setTimeout(function () {
    $loader.classList.add("loader--noactive");
    $loader.classList.remove("loader");
  }, 3000);
};
