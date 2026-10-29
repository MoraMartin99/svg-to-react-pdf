import replaceAttributes from "../replaceAttributes.js";
import { id, viewBox, markerWidth, markerHeight, refX, refY, orient, markerUnits } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceMarkerAttr(data) {
    return replaceAttributes(data, [
        id,
        viewBox,
        markerWidth,
        markerHeight,
        refX,
        refY,
        orient,
        markerUnits,
        ...presentationAttributes,
    ]);
}
