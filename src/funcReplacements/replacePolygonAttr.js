import replaceAttributes from "../replaceAttributes.js";
import { id, points } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replacePolygonAttr(data) {
    return replaceAttributes(data, [id, points, ...presentationAttributes]);
}
