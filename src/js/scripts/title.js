export const changeTitle = () => {
  let $headerTitle = document.querySelector("#content-title");

  $headerTitle.textContent = "Evgeny Perepelyatnik";
  setTimeout(() => {
    $headerTitle.textContent = "Videographer";
  }, 4000);
  setTimeout(() => {
    $headerTitle.textContent = "Photographer";
  }, 8000);
};
