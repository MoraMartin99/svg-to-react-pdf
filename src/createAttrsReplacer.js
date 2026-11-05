import createTagAttrRegex from "./createTagAttrRegex.js";

export default function createAttrsReplacer(tag, attributes) {
    const replacement = (value) => {
        const extractMatch = ({ regex, replacer }) => {
            const match = value.match(regex);
            return match ? (replacer ? replacer(match[0]) : match[0]) : "";
        };
        const isTruthy = (match) => Boolean(match);
        const formatResult = (result, current) => result + " " + current;
        return attributes.map(extractMatch).filter(isTruthy).reduce(formatResult, "");
    };

    return (data) => {
        return { ...data, content: data.content.replaceAll(createTagAttrRegex(tag), replacement) };
    };
}
