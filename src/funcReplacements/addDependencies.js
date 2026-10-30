import tags from "../tags.js";
import createTagRegex from "../createTagRegex.js";
import capitalized from "../capitalized.js";

export default function addDependencies(data) {
    const hasAMatch = (tag) => createTagRegex(tag).test(data);

    return `import { ${Object.values(tags).filter(hasAMatch).map(capitalized).join(", ")} } from '@react-pdf/renderer';
    
    ${data}`;
}
