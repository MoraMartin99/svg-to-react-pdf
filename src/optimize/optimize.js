import { optimize as externalOptimize } from "svgo";
import { removeUsePlugin } from "./removeUsePlugin.js";
import { wrapClipPathInDefsPlugin } from "./wrapClipPathInDefsPlugin.js";
import { mergeDefsAsFirstChildPlugin } from "./mergeDefsAsFirstChildPlugin.js";

const config = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    convertPathData: false,
                },
            },
        },
        "removeDimensions",
        "convertStyleToAttrs",
        "removeRasterImages",
        removeUsePlugin,
        wrapClipPathInDefsPlugin,
        mergeDefsAsFirstChildPlugin,
    ],
};

export default function optimize(data) {
    return { ...data, content: externalOptimize(data.content, config).data };
}
