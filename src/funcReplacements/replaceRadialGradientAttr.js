import replaceAttributes from "../replaceAttributes.js";
import { id, cx, cy, r, fr, fx, fy, xlinkHref, gradientTransform, gradientUnits } from "../attributes.js";
import presentationAttributes from "../presentationAttributes.js";

export default function replaceRadialGradientAttr(data) {
    return replaceAttributes(data, [
        id,
        cx,
        cy,
        r,
        fr,
        fx,
        fy,
        xlinkHref,
        gradientTransform,
        gradientUnits,
        ...presentationAttributes,
    ]);
}
