import capitalized from "./capitalized.js";

export default function createTagAttrRegex(tag) {
    return new RegExp(`(?<=<(${tag}|${capitalized(tag)}) )[^<]+"(?=( \/>|>))`, "gm");
}
