const pdf = require("html-pdf");
const fs = require("fs");
const path = require("path");

const template = path.resolve(__dirname, "../template/index.html");
const base = "file://" + path.resolve(__dirname, "../template/assets/img");

var html = fs.readFileSync(template, "utf8");
var options = {
  format: "A4",
  base,
  footer: { height: "155mm" },
};

const output = path.resolve(__dirname, "../output.pdf");
pdf.create(html, options).toFile(output, (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});
