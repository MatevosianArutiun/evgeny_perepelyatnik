export const showLoading = () => {
  let $loader = document.querySelector(".loader");
  window.onload = function () {
    window.setTimeout(function () {
      $loader.classList.add("loader--noactive");
      $loader.classList.remove("loader");
    }, 3000);
  };
};
