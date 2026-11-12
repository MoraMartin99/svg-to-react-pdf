#!/usr/bin/env node

import { program } from "commander";
import convert from "./src/convert.js";

program
    .name("svg-to-react-pdf")
    .argument("<source>", "A path to an svg or a folder containing at least 1 svg")
    .argument("<destination>", "A path to a folder or if source points to 1 svg file, a path to an output jsx file")
    .description("converts svg source to a react-pdf component and saves it in the destination path")
    .action(convert);

program.parse();
