import replaceAttributes from "../replaceAttributes.js";
import { cx, cy, r, id } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

function replaceCircleAttr(data) {
    const attributes = [cx, cy, r, id, ...presentationAttributes];
    return replaceAttributes(data, attributes);
}

export default replaceCircleAttr;
