import * as fs from "node:fs/promises";
import transformData from "./transformData.js";
import transformations from "./transformations.js";
import isSvg from "./isSvg.js";
import { basename, join, extname, format } from "node:path";
import isFolder from "./isFolder.js";
import capitalized from "./capitalized.js";

const newExt = "jsx";
const getNewName = (path) => capitalized(basename(path, extname(path)));

const convertFile = async (source, destination) => {
    const content = await fs.readFile(source, { encoding: "utf8" });

    await fs.writeFile(destination, transformData({ content, name: getNewName(source) }, transformations));
};

export default async function convert(source, destination) {
    if (await isFolder(source)) {
        const converterAdapter = (path) => {
            const newPath = format({ dir: destination, base: `${getNewName(path)}.${newExt}` });
            return convertFile(path, newPath);
        };
        const getRelativePath = (path) => join(source, path);
        const files = await fs.readdir(source);
        return Promise.all(files.map(getRelativePath).filter(isSvg).map(converterAdapter));
    }
    await convertFile(source, destination);
}
