import { optimize as externalOptimize } from "svgo";

const config = {
    plugins: ["preset-default", "removeDimensions", "convertStyleToAttrs", "removeRasterImages"],
};

export default function optimize(data) {
    return { ...data, content: externalOptimize(data.content, config).data };
}
