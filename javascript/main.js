const allLabels = document.querySelectorAll("label");
allLabels.forEach((element) => {
  const reuqiredTag = document.createElement("span");
  reuqiredTag.textContent = "*";
  element.insertAdjacentElement("afterend", reuqiredTag);
  reuqiredTag.classList.add("required-tag");
  console.log(element.textContent);
});
// console.log(allLabels);
