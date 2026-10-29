import capitalized from "../capitalized.js";

function toCamelCase(value) {
    const separator = /-|:/gm;
    const formatResult = (result, current, index) => {
        return index ? result + capitalized(current) : result + current.toLowerCase();
    };
    return value.split(separator).reduce(formatResult, "");
}

export default toCamelCase;
