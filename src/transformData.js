export default function transformData(data, transformations = []) {
    const applyTransformation = (result, { regex, replacement }) => {
        return result.replaceAll(regex, replacement);
    };

    return transformations.reduce(applyTransformation, data);
}
