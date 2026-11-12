import toCamelCase from "./toCamelCase.js";

function createAttrRegex(name) {
    return new RegExp(`(?<= )${name}="[^"]+"`, "gm");
}

function createAttrNameRegex(name) {
    return new RegExp(`${name}(?==")`, "gm");
}

export default function createAttr(name, requiresCamelCase) {
    function replacer(value) {
        return value.replaceAll(createAttrNameRegex(name), toCamelCase);
    }

    return { regex: createAttrRegex(name), replacer: requiresCamelCase ? replacer : null };
}
