import tags from "./tags.js";
import capitalized from "./capitalized.js";
import createTagRegex from "./createTagRegex.js";

export default function formatAsReactComponent(data) {
    const reactPdfDependencyPath = "@react-pdf/renderer";
    const hasAMatch = (tag) => createTagRegex(capitalized(tag)).test(data.content);
    const getTagName = ({ name }) => name;

    return {
        ...data,
        content: `import { ${Object.values(tags).map(getTagName).filter(hasAMatch).map(capitalized).join(", ")} } from '${reactPdfDependencyPath}';
    
    export default function ${capitalized(data.name)}(){
      return (${data.content})
    }`,
    };
}
