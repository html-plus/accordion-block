/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
//console.log("Hello World! (from create-block-accordion-block block)");
/* eslint-enable no-console */

/* () => {
  const n = t.closest(".tempo-accordion-block");
  t.closest(".gutena-accordion-block__panel")?.classList?.toggle("active");
  const l = t?.nextElementSibling;
  l.style.maxHeight ? (l.style.maxHeight = l.scrollHeight + "px", setTimeout((function() {
    l.style.maxHeight = null
  }), 50)) : (l.style.maxHeight = l.scrollHeight + "px", setTimeout((function() {
    l.style.maxHeight = "unset"
  }), 200)), "true" === n?.getAttribute("data-single") && c?.forEach(((t, c) => {
    if (c !== e) {
      const e = t.closest(".gutena-accordion-block__panel");
      if (e?.classList?.contains("active")) {
        e?.classList?.remove("active");
        const c = t?.nextElementSibling;
        c.style.maxHeight ? c.style.maxHeight = null : c.style.maxHeight = c.scrollHeight + "px"
      }
    }
  }))
} */
document.addEventListener("DOMContentLoaded", () => {
  let upDown = document.querySelectorAll('.wp-block-tempo-panel .accordion-heading');
  upDown.forEach(item => item.addEventListener('click', function () {
    this.closest('.accordion-item').classList.toggle('open');
  }));
});
/******/ })()
;
//# sourceMappingURL=view.js.map