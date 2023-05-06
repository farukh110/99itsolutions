export default function StickyMenu(selector = "") {
  document.addEventListener("scroll", () => {
    const element = document.querySelector(selector);
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.classList.add("fixed-header");
      } else {
        element.classList.remove("fixed-header");
      }
    }
  });
}
