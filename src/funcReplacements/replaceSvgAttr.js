import { width, height, viewBox, preserveAspectRatio, style } from "../attributes.js";
import replaceAttributes from "../replaceAttributes.js";

export default function replaceSvgAttr(data) {
    return replaceAttributes(data, [width, height, viewBox, preserveAspectRatio, style]);
}
