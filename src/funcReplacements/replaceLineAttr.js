import replaceAttributes from "../replaceAttributes.js";
import { id, x1, x2, y1, y2 } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceLineAttr(data) {
    return replaceAttributes(data, [id, x1, x2, y1, y2, ...presentationAttributes]);
}
