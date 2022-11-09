document.getElementById("calculate").addEventListener("click", (event) =>
{
event.preventDefault();
const width = document.getElementById("chartWidth");
const height = document.getElementById("chartHeight");
const border = document.getElementById("desiredBorder");
const stitches = document.getElementById("threadCount");
const a = Number(width.value);
const b = Number(height.value);
const c = Number(border.value);
const d = Number(stitches.value);
const resultWidth = Math.round((a/d)+(2*c));
const resultHeight = Math.round((b/d)+(2*c));
const designWidth = Math.round(a/d);
const designHeight = Math.round(b/d);
document.getElementById("result").innerText =
  `A piece of ${d} stitches per inch fabric ${resultWidth} inches wide and ${resultHeight} inches tall is required to complete a design ${a} stitches wide and ${b} stitches tall. This will produce a finished design ${designWidth} inches wide by ${designHeight} inches tall and leave a border ${c} on all sides.`
});