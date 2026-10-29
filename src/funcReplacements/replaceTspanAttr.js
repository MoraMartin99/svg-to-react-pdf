import replaceAttributes from "../replaceAttributes.js";
import { id, x, y } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceTspanAttr(data) {
    return replaceAttributes(data, [id, x, y, ...presentationAttributes]);
}
