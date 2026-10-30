import transformData from "./transformData.js";

export default function replaceAttributes(data, attributes) {
    const extractMatch = (item) => {
        const extraction = item.regex.exec(data);
        return extraction ? transformData(extraction[0], item.transformation) : "";
    };
    const hasMatch = (item) => Boolean(item.match);
    const formatResult = (result, current) => result + " " + current;

    return attributes.map(extractMatch).filter(hasMatch).reduce(formatResult);
}
