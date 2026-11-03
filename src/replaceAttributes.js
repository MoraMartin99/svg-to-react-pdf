import transformData from "./transformData.js";

export default function replaceAttributes(data, attributes) {
    const extractMatch = (item) => {
        const extraction = data.match(item.regex);
        return extraction ? transformData(extraction[0], item.transformation) : "";
    };
    const isTruthy = (match) => Boolean(match);
    const formatResult = (result, current) => result + " " + current;

    return attributes.map(extractMatch).filter(isTruthy).reduce(formatResult, "");
}
