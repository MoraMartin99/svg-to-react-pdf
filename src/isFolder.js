import { stat } from "node:fs/promises";

export default async function isFolder(path) {
    const pathStat = await stat(path);
    return pathStat.isDirectory();
}
