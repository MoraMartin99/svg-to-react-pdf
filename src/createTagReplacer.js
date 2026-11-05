import capitalized from "./capitalized.js";
import createTagRegex from "./createTagRegex.js";

export default function createTagReplacer(tag) {
    return (data) => {
        return { ...data, content: data.content.replaceAll(createTagRegex(tag), capitalized(tag)) };
    };
}
