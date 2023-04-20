import { openBlock as s, createElementBlock as p, createTextVNode as d, createElementVNode as c } from "vue";
const a = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, _ = {
  name: "MeuCompo",
  components: {},
  data() {
    return {};
  },
  methods: {}
}, i = { style: { border: "1px solid red", padding: "1rem" } }, l = /* @__PURE__ */ c("h1", null, "Meu Compo", -1), m = /* @__PURE__ */ c("input", {
  type: "text",
  placeholder: "Digita aí..."
}, null, -1);
function u(e, t, o, n, r, h) {
  return s(), p("div", i, [
    l,
    d(" Meu Compo: "),
    m
  ]);
}
const x = /* @__PURE__ */ a(_, [["render", u]]);
export {
  x as MeuCompo
};
