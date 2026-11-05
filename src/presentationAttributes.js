import createAttr from "./createAttr.js";

export default [
    ["color"],
    ["fill"],
    ["opacity"],
    ["stroke"],
    ["transform"],
    ["visibility"],
    ["dominant-baseline", true],
    ["fill-opacity", true],
    ["fill-rule", true],
    ["stroke-width", true],
    ["stroke-opacity", true],
    ["stroke-linecap", true],
    ["stroke-dasharray", true],
    ["stroke-linejoin", true],
    ["text-anchor", true],
    ["clip-path", true],
    ["marker-start", true],
    ["marker-mid", true],
    ["marker-end", true],
].map((seed) => createAttr(...seed));
