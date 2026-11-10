import { optimize as externalOptimize } from "svgo";
import { removeUsePlugin } from "./removeUsePlugin.js";

const config = {
    plugins: ["preset-default", "removeDimensions", "convertStyleToAttrs", "removeRasterImages", removeUsePlugin],
};

export default function optimize(data) {
    return { ...data, content: externalOptimize(data.content, config).data };
}
