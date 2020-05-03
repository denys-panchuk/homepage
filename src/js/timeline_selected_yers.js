let timeLines = document.querySelectorAll(".timeline");

let timeLinesItems = [];

timeLines.forEach((timeLine) => {
  timeLinesItems.push(...timeLine.children);
});

timeLinesItems.forEach((item) => {
  item.addEventListener("mouseover", function (e) {
    this.firstElementChild.classList.add("selected-year");
  });
});

timeLinesItems.forEach((item) => {
  item.addEventListener("mouseout", function (e) {
    this.firstElementChild.classList.remove("selected-year");
  });
});
