import replaceAttributes from "../replaceAttributes.js";
import { id } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceGAttr(data) {
    return replaceAttributes(data, [id, ...presentationAttributes]);
}
