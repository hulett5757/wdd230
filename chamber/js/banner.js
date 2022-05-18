let d = new Date().getDay();

const banner = document.getElementByID ("banner");
if (d === 1 || d === 2) {
    banner.display = "block";
} else {
    banner.display = none;
}
