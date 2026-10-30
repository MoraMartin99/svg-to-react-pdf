import replaceSvgAttr from "./funcReplacements/replaceSvgAttr.js";
import replaceCircleAttr from "./funcReplacements/replaceCircleAttr.js";
import replaceClipPathAttr from "./funcReplacements/replaceClipPathAttr.js";
import createTagRegex from "./createTagRegex.js";
import capitalized from "./capitalized.js";
import createTagAttrRegex from "./createTagAttrRegex.js";
import replaceEllipseAttr from "./funcReplacements/replaceEllipseAttr.js";
import replaceGAttr from "./funcReplacements/replaceGAttr.js";
import replaceLineAttr from "./funcReplacements/replaceLineAttr.js";
import replaceLinearGradientAttr from "./funcReplacements/replaceLinearGradientAttr.js";
import replaceMarkerAttr from "./funcReplacements/replaceMarkerAttr.js";
import replacePathAttr from "./funcReplacements/replacePathAttr.js";
import replacePolygonAttr from "./funcReplacements/replacePolygonAttr.js";
import replaceRadialGradientAttr from "./funcReplacements/replaceRadialGradientAttr.js";
import replaceRectAttr from "./funcReplacements/replaceRectAttr.js";
import replaceStopAttr from "./funcReplacements/replaceStopAttr.js";
import replaceTextAttr from "./funcReplacements/replaceTextAttr.js";
import replaceTspanAttr from "./funcReplacements/replaceTspanAttr.js";
import addDependencies from "./funcReplacements/addDependencies.js";
import tags from "./tags.js";

const allRegex = /[\s\S]+/gm;

const transformations = [
    { regex: createTagRegex(tags.svgTag), replacement: capitalized(tags.svgTag) },
    { regex: createTagAttrRegex(tags.svgTag), replacement: replaceSvgAttr },
    { regex: createTagRegex(tags.circleTag), replacement: capitalized(tags.circleTag) },
    { regex: createTagAttrRegex(tags.circleTag), replacement: replaceCircleAttr },
    { regex: createTagRegex(tags.clipPathTag), replacement: capitalized(tags.clipPathTag) },
    { regex: createTagAttrRegex(tags.clipPathTag), replacement: replaceClipPathAttr },
    { regex: createTagRegex(tags.defsTag), replacement: capitalized(tags.defsTag) },
    { regex: createTagRegex(tags.ellipseTag), replacement: capitalized(tags.ellipseTag) },
    { regex: createTagAttrRegex(tags.ellipseTag), replacement: replaceEllipseAttr },
    { regex: createTagRegex(tags.gTag), replacement: capitalized(tags.gTag) },
    { regex: createTagAttrRegex(tags.gTag), replacement: replaceGAttr },
    { regex: createTagRegex(tags.lineTag), replacement: capitalized(tags.lineTag) },
    { regex: createTagAttrRegex(tags.lineTag), replacement: replaceLineAttr },
    { regex: createTagRegex(tags.linearGradientTag), replacement: capitalized(tags.linearGradientTag) },
    { regex: createTagAttrRegex(tags.linearGradientTag), replacement: replaceLinearGradientAttr },
    { regex: createTagRegex(tags.markerTag), replacement: capitalized(tags.markerTag) },
    { regex: createTagAttrRegex(tags.markerTag), replacement: replaceMarkerAttr },
    { regex: createTagRegex(tags.pathTag), replacement: capitalized(tags.pathTag) },
    { regex: createTagAttrRegex(tags.pathTag), replacement: replacePathAttr },
    { regex: createTagRegex(tags.polygonTag), replacement: capitalized(tags.polygonTag) },
    { regex: createTagAttrRegex(tags.polygonTag), replacement: replacePolygonAttr },
    { regex: createTagRegex(tags.radialGradientTag), replacement: capitalized(tags.radialGradientTag) },
    { regex: createTagAttrRegex(tags.radialGradientTag), replacement: replaceRadialGradientAttr },
    { regex: createTagRegex(tags.rectTag), replacement: capitalized(tags.rectTag) },
    { regex: createTagAttrRegex(tags.rectTag), replacement: replaceRectAttr },
    { regex: createTagRegex(tags.stopTag), replacement: capitalized(tags.stopTag) },
    { regex: createTagAttrRegex(tags.stopTag), replacement: replaceStopAttr },
    { regex: createTagRegex(tags.textTag), replacement: capitalized(tags.textTag) },
    { regex: createTagAttrRegex(tags.textTag), replacement: replaceTextAttr },
    { regex: createTagRegex(tags.tspanTag), replacement: capitalized(tags.tspanTag) },
    { regex: createTagAttrRegex(tags.tspanTag), replacement: replaceTspanAttr },
    { regex: allRegex, replacement: addDependencies },
];

export default transformations;
