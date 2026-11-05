import tags from "./tags.js";
import createTagReplacer from "./createTagReplacer.js";
import createAttrsReplacer from "./createAttrsReplacer.js";
import formatAsReactComponent from "./formatAsReactComponent.js";

const createTransformations = (result, { name, attributes }) => {
    return attributes
        ? [...result, createTagReplacer(name), createAttrsReplacer(name, attributes)]
        : [...result, createTagReplacer(name)];
};

export default [...Object.values(tags).reduce(createTransformations, []), formatAsReactComponent];
