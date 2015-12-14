const test = require("prova");
const NiceModule = require("./index");

const niceModule = new NiceModule({arg: "nice"});

test("is nice", t => {
  t.plan(1);
  t.equal(niceModule.arg, "nice");
});
