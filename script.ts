document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("dataList");

  if (itemList) {
    itemList.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target && target.tagName === "H2") {
        const item = target.nextElementSibling as HTMLElement;
        if (item && item.style.display === "none") {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }
});
