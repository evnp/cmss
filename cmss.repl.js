const repl = require("repl").start();
const ctx = repl.context;

ctx.cmss = require("./cmss.js").default;

ctx.Name = {
  Ship: "abc",
};

ctx.Elem = {
  engine: "def",
  part: "ghi",
};

ctx.Cond = {
  warp: "jkl",
  adrift: "mno",
};

ctx.n = ctx.cmss(ctx.Name, ctx.Elem, ctx.Cond);
