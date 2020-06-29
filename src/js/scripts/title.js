export const changeTitle = () => {
  let $headerTitle = document.querySelector("#header-title");
  document.addEventListener("DOMContentLoaded", () => {
    $headerTitle.textContent = "Evgeny Perepelyatnik";
    setTimeout(() => {
      $headerTitle.textContent = "Videographer";
    }, 4000);
    setTimeout(() => {
      $headerTitle.textContent = "Photographer";
    }, 8000);
  });
};
setInterval(changeTitle, 12000);
