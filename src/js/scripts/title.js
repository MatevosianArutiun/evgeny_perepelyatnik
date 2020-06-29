export const changeTitle = () => {
  let $headerTitle = document.querySelector("#header-title");
  let cookie = getCookie("reload");
  if (cookie == null) {
    setCookie("reload", 0);
  }
  let reload = getCookie("reload");
  if (reload == 0) {
    setCookie("reload", 1);

    window.location.reload();
  }
  $headerTitle.textContent = "Evgeny Perepelyatnik";
  setTimeout(() => {
    $headerTitle.textContent = "Videographer";
  }, 4000);
  setTimeout(() => {
    $headerTitle.textContent = "Photographer";
  }, 8000);
};
