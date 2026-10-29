import replaceAttributes from "../replaceAttributes.js";
import { id, offset, stopColor, stopOpacity } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceStopAttr(data) {
    return replaceAttributes(data, [id, offset, stopColor, stopOpacity, ...presentationAttributes]);
}
