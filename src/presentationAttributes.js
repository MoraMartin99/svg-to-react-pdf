import toCamelCase from "./funcReplacements/toCamelCase.js";

const markerEndRegex = /marker-end="[^"]+"/gm;
const markerMidRegex = /marker-mid="[^"]+"/gm;
const markerStartRegex = /marker-start="[^"]+"/gm;
const clipPathRegex = /clip-path="[^"]+"/gm;
const visibilityRegex = /visibility="[^"]+"/gm;
const textAnchorRegex = /text-anchor="[^"]+"/gm;
const transformRegex = /transform="[^"]+"/gm;
const strokeDasharrayRegex = /stroke-dasharray="[^"]+"/gm;
const strokeLinejoinRegex = /stroke-linejoin="[^"]+"/gm;
const strokeLinecapRegex = /stroke-linecap="[^"]+"/gm;
const strokeOpacityRegex = /stroke-opacity="[^"]+"/gm;
const strokeWidthRegex = /stroke-width="[^"]+"/gm;
const strokeRegex = /stroke="[^"]+"/gm;
const opacityRegex = /opacity="[^"]+"/gm;
const fillRuleRegex = /fill-rule="[^"]+"/gm;
const fillOpacityRegex = /fill-opacity="[^"]+"/gm;
const fillRegex = /fill="[^"]+"/gm;
const dominantBaselineRegex = /dominant-baseline="[^"]+"/gm;
const colorRegex = /color="[^"]+"/gm;
const dominantBaselineAttrNameRegex = /dominant-baseline(?==")/gm;
const fillOpacityAttrNameRegex = /fill-opacity(?==")/gm;
const fillRuleAttrNameRegex = /fill-rule(?==")/gm;
const strokeWidthAttrNameRegex = /stroke-width(?==")/gm;
const strokeOpacityAttrNameRegex = /stroke-opacity(?==")/gm;
const strokeLinecapAttrNameRegex = /stroke-linecap(?==")/gm;
const strokeLinejoinAttrNameRegex = /stroke-linejoin(?==")/gm;
const strokeDasharrayAttrNameRegex = /stroke-dasharray(?==")/gm;
const textAnchorAttrNameRegex = /text-anchor(?==")/gm;
const clipPathAttrNameRegex = /clip-path(?==")/gm;
const markerStartAttrNameRegex = /marker-start(?==")/gm;
const markerMidAttrNamerRegex = /marker-mid(?==")/gm;
const markerEndAttrNameRegex = /marker-end(?==")/gm;

const kebabCaseAttributes = [
    [dominantBaselineRegex, dominantBaselineAttrNameRegex],
    [fillOpacityRegex, fillOpacityAttrNameRegex],
    [fillRuleRegex, fillRuleAttrNameRegex],
    [strokeWidthRegex, strokeWidthAttrNameRegex],
    [strokeOpacityRegex, strokeOpacityAttrNameRegex],
    [strokeLinecapRegex, strokeLinecapAttrNameRegex],
    [strokeDasharrayRegex, strokeDasharrayAttrNameRegex],
    [strokeLinejoinRegex, strokeLinejoinAttrNameRegex],
    [textAnchorRegex, textAnchorAttrNameRegex],
    [clipPathRegex, clipPathAttrNameRegex],
    [markerStartRegex, markerStartAttrNameRegex],
    [markerMidRegex, markerMidAttrNamerRegex],
    [markerEndRegex, markerEndAttrNameRegex],
].map(([regex, attrNameRegex]) => ({ regex, transformation: [{ regex: attrNameRegex, replacement: toCamelCase }] }));

const presentationAttributes = [
    ...kebabCaseAttributes,
    { regex: colorRegex },
    { regex: fillRegex },
    { regex: opacityRegex },
    { regex: strokeRegex },
    { regex: transformRegex },
    { regex: visibilityRegex },
];

export default presentationAttributes;
