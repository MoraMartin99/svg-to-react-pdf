import replaceAttributes from "../replaceAttributes.js";
import { id, x, y } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceTextAttr(data) {
    return replaceAttributes(data, [id, x, y, ...presentationAttributes]);
}
