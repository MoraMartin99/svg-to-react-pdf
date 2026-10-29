import replaceAttributes from "../replaceAttributes.js";
import presentationAttributes from "../presentationAttributes.js";
import { cx, cy, ry, rx, id } from "../attributes.js";

export default function replaceEllipseAttr(data) {
    return replaceAttributes(data, [cx, cy, ry, rx, id, ...presentationAttributes]);
}
