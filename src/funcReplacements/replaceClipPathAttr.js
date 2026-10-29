import { id } from "../attributes.js";
import replaceAttributes from "../replaceAttributes.js";

export default function replaceClipPathAttr(data) {
    return replaceAttributes(data, [id]);
}
