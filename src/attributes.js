import toCamelCase from "./funcReplacements/toCamelCase.js";

export const cx = { regex: /cx="\d+%{0,1}"/gm };
export const cy = { regex: /cy="\d+%{0,1}"/gm };
export const r = { regex: /r="\d+%{0,1}"/gm };
export const width = { regex: /width="\d+"/gm };
export const height = { regex: /height="\d+"/gm };
export const viewBox = { regex: /viewBox="[\d ]+"/gm };
export const preserveAspectRatio = { regex: /preserveAspectRatio="[\w ]+"/gm };
export const style = { regex: /style="[^"]+"/gm };
export const id = { regex: /id="[^"]+"/gm };
export const ry = { regex: /ry="[^"]+"/gm };
export const rx = { regex: /rx="[^"]+"/gm };
export const x1 = { regex: /x1="[^"]+"/gm };
export const x2 = { regex: /x2="[^"]+"/gm };
export const y1 = { regex: /y1="[^"]+"/gm };
export const y2 = { regex: /y2="[^"]+"/gm };
const xlinkHrefAttrNameRegex = /xlink:href(?==")/gm;
export const xlinkHref = {
    regex: /xlink:href="[^"]+"/gm,
    transformation: [{ regex: xlinkHrefAttrNameRegex, replacement: toCamelCase }],
};
export const gradientTransform = { regex: /gradientTransform="[^"]+"/gm };
export const gradientUnits = { regex: /gradientUnits="[^"]+"/gm };
export const markerWidth = { regex: /markerWidth="[^"]+"/gm };
export const markerHeight = { regex: /markerHeight="[^"]+"/gm };
export const refX = { regex: /refX="[^"]+"/gm };
export const refY = { regex: /refY="[^"]+"/gm };
export const orient = { regex: /orient="[^"]+"/gm };
export const markerUnits = { regex: /markerUnits="[^"]+"/gm };
export const d = { regex: /d="[^"]+"/gm };
export const points = { regex: /points="[^"]+"/gm };
export const fr = { regex: /fr="[^"]+"/gm };
export const fx = { regex: /fx="[^"]+"/gm };
export const fy = { regex: /fy="[^"]+"/gm };
export const x = { regex: /x="[^"]+"/gm };
export const y = { regex: /y="[^"]+"/gm };
export const offset = { regex: /offset="[^"]+"/gm };
const stopColorAttrNameRegex = /stop-color(?==")/gm;
export const stopColor = {
    regex: /stop-color="[^"]+"/gm,
    transformation: [{ regex: stopColorAttrNameRegex, replacement: toCamelCase }],
};
const stopOpacityAttrNameRegex = /stop-opacity(?==")/gm;
export const stopOpacity = {
    regex: /stop-opacity="[^"]+"/gm,
    transformation: [{ regex: stopOpacityAttrNameRegex, replacement: toCamelCase }],
};
