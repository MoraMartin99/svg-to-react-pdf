import { stat } from "node:fs/promises";

export default async function isFolder(path) {
    return stat(path).isDirectory();
}
