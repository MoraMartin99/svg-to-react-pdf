export default function transformData(data, transformations = []) {
    const applyTransformation = (result, transformation) => {
        return transformation(result);
    };

    return transformations.reduce(applyTransformation, data).content;
}
