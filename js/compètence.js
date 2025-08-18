const image_css_html = document.querySelector(".img_competence_html");
const image_js = document.querySelector(".img_competence_js");
const image_vue = document.querySelector(".img_competence_vue");
const image_bootstrap = document.querySelector(".img_competence_bootstrap");
const image_json = document.querySelector(".img_competence_json");
const image_sass = document.querySelector(".img_competence1");

const compètences_technique = document.querySelector(
  ".section_competence_technique"
);

const competence_html = document.querySelector("#competence_html_css");
const competence_js = document.querySelector("#competence_js");
const competence_vue = document.querySelector("#competence_vue");
const competence_bootstrap = document.querySelector("#competence_bootstrap");
const competence_json = document.querySelector("#competence_json");
const competence_sass = document.querySelector("#competence_sass");
competence_html.style.display = "none";
competence_js.style.display = "none";
competence_vue.style.display = "none";
competence_bootstrap.style.display = "none";
competence_json.style.display = "none";
competence_sass.style.display = "none";

image_css_html.addEventListener("click", () => {
  competence_html.style.display = "block";
  competence_html.style.backgroundColor = "rgba(147, 91, 27, 0.8)";
  competence_html.style.borderRadius = "20px";
  competence_html.style.padding = "20px";
  competence_html.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_js ||
    event.target === image_vue ||
    event.target === image_bootstrap ||
    event.target === image_json ||
    event.target === image_sass
  ) {
    competence_html.style.display = "none";
  }
});
image_js.addEventListener("click", () => {
  competence_js.style.display = "block";
  competence_js.style.backgroundColor = "rgba(202, 241, 45, 0.8)";
  competence_js.style.borderRadius = "20px";
  competence_js.style.padding = "20px";
  competence_js.style.color = "black";
  competence_js.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_css_html ||
    event.target === image_vue ||
    event.target === image_bootstrap ||
    event.target === image_json ||
    event.target === image_sass
  ) {
    competence_js.style.display = "none";
  }
});
image_vue.addEventListener("click", () => {
  competence_vue.style.display = "block";
  competence_vue.style.backgroundColor = "rgba(0, 91, 27, 0.8)";
  competence_vue.style.borderRadius = "20px";
  competence_vue.style.padding = "20px";
  competence_vue.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url(' https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_css_html ||
    event.target === image_js ||
    event.target === image_bootstrap ||
    event.target === image_json ||
    event.target === image_sass
  ) {
    competence_vue.style.display = "none";
  }
});
image_bootstrap.addEventListener("click", () => {
  competence_bootstrap.style.display = "block";
  competence_bootstrap.style.backgroundColor = "rgba(126, 44, 130, 0.8)";
  competence_bootstrap.style.borderRadius = "20px";
  competence_bootstrap.style.padding = "20px";
  competence_bootstrap.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url(' https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_css_html ||
    event.target === image_js ||
    event.target === image_vue ||
    event.target === image_json ||
    event.target === image_sass
  ) {
    competence_bootstrap.style.display = "none";
  }
});
image_json.addEventListener("click", () => {
  competence_json.style.display = "block";
  competence_json.style.backgroundColor = "rgba(147, 91, 27, 0.8)";
  competence_json.style.borderRadius = "20px";
  competence_json.style.padding = "20px";
  competence_json.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_css_html ||
    event.target === image_js ||
    event.target === image_vue ||
    event.target === image_bootstrap ||
    event.target === image_sass
  ) {
    competence_json.style.display = "none";
  }
});
image_sass.addEventListener("click", () => {
  competence_sass.style.display = "block";
  competence_sass.style.backgroundColor = "rgba(133, 10, 81, 0.8)";
  competence_sass.style.borderRadius = "20px";
  competence_sass.style.padding = "20px";
  competence_sass.style.fontWeight = "bold";
  compètences_technique.style.backgroundImage =
    "url(' https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});
window.addEventListener("click", (event) => {
  if (
    event.target === image_css_html ||
    event.target === image_js ||
    event.target === image_vue ||
    event.target === image_bootstrap ||
    event.target === image_json
  ) {
    competence_sass.style.display = "none";
  }
});
