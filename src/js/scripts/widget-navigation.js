export const changeWidgetNavigation = () => {
  let $widgetNavigation = document.querySelector("#widget-navigation");
  let $widgetNavigationBtn = document.querySelectorAll(
    ".widget-navigation__btn"
  );
  console.log($widgetNavigationBtn);
  $widgetNavigation.addEventListener("click", function (event) {
    let target = event.target;
    if (target.className !== "widget-navigation__btn") return;
    if (!target.classList.contains("widget-navigation__btn--active")) {
      $widgetNavigationBtn.forEach(function (item) {
        item.classList.remove("widget-navigation__btn--active");
      });
      target.classList.add("widget-navigation__btn--active");
    }
  });
};
