import { extname } from "node:path";
import { stat } from "node:fs/promises";

async function isSvg(path) {
    const fileStat = await stat(path);
    return fileStat.isFile() && extname(path) === "svg";
}

export default isSvg;
