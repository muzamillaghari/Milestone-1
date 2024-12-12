document.addEventListener("DOMContentLoaded", function () {
    var itemList = document.getElementById("dataList");
    if (itemList) {
        itemList.addEventListener("click", function (event) {
            var target = event.target;
            if (target && target.tagName === "H2") {
                var item = target.nextElementSibling;
                if (item && item.style.display === "none") {
                    item.style.display = "block";
                }
                else {
                    item.style.display = "none";
                }
            }
        });
    }
});
