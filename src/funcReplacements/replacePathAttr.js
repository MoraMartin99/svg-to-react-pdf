import replaceAttributes from "../replaceAttributes.js";
import { id, d } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replacePathAttr(data) {
    return replaceAttributes(data, [id, d, ...presentationAttributes]);
}
