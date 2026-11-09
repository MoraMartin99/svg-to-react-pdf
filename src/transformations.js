import tags from "./tags.js";
import createTagReplacer from "./createTagReplacer.js";
import createAttrsReplacer from "./createAttrsReplacer.js";
import formatAsReactComponent from "./formatAsReactComponent.js";
import optimize from "./optimize/optimize.js";

const createTransformations = (result, { name, attributes }) => {
    return attributes
        ? [...result, createTagReplacer(name), createAttrsReplacer(name, attributes)]
        : [...result, createTagReplacer(name)];
};

export default [optimize, ...Object.values(tags).reduce(createTransformations, []), formatAsReactComponent];
