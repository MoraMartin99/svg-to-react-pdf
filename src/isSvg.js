import { extname } from "node:path";
import { stat } from "node:fs/promises";

async function isSvg(path) {
    return (await stat(path)).isFile() && extname(path) === "svg";
}

export default isSvg;
