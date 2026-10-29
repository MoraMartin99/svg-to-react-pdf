export default function transformData(data, transformations = []) {
    const applyTransformation = (result, { regex, replacement }) => {
        return transformations ? result.replaceAll(regex, replacement) : result;
    };

    return transformations.reduce(applyTransformation, data);
}
