import { openBlock as s, createElementBlock as d, createTextVNode as p, createElementVNode as t } from "vue";
const _ = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [r, c] of n)
    e[r] = c;
  return e;
}, i = {
  name: "MeuCompo",
  components: {},
  data() {
    return {};
  },
  methods: {}
}, u = { style: { border: "1px solid red", padding: "1rem" } }, l = /* @__PURE__ */ t("h1", null, "Meu Compo", -1), m = /* @__PURE__ */ t("input", {
  type: "text",
  placeholder: "Digita aí............."
}, null, -1);
function h(o, n, e, r, c, a) {
  return s(), d("div", u, [
    l,
    p(" Meu Compowwwww: "),
    m
  ]);
}
const y = /* @__PURE__ */ _(i, [["render", h]]), $ = {
  name: "OutroCompo",
  components: {},
  data() {
    return {};
  },
  methods: {}
}, f = { style: { border: "1px solid red", padding: "1rem" } }, x = /* @__PURE__ */ t("h1", null, "Outro Compo", -1), C = /* @__PURE__ */ t("input", {
  type: "checkbox",
  placeholder: "Digita aí............."
}, null, -1);
function g(o, n, e, r, c, a) {
  return s(), d("div", f, [
    x,
    p(" Outro: "),
    C
  ]);
}
const O = /* @__PURE__ */ _($, [["render", g]]);
export {
  y as MeuCompo,
  O as OutroCompo
};
