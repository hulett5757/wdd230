const datefield =
document.querySelector(".date");
const datefieldUK =
document.quesrySelector("aside");

const now = new Date();
const fulldate = newIntl.DateTimeFormat("en-US", {
dateStyle: "full"}).format(now);

const fulldateUK = new
Intl.DateTimeFormat("en-UK," {
    dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate} </em>`
datefirldUK.innerHTML =
`<em>${fulldateUK}</em>`;