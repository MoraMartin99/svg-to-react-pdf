import replaceAttributes from "../replaceAttributes.js";
import { id, x, y, width, height, rx, ry } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceRectAttr(data) {
    return replaceAttributes(data, [id, x, y, width, height, rx, ry, ...presentationAttributes]);
}
