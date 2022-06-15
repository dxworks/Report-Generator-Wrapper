#!/usr/bin/env node

import { print, usage } from "./functions.js";
import ora from "ora";
import child_process from "child_process";
import chalk from "chalk";
import {generateImages} from "@dxworks/echarts-to-pics";
import {generateReport} from "@dxworks/report-generator/dist/lib.js";

const spinner = ora('working');
print('\n');
spinner.start();

const args = process.argv;
if (args.length < 4) {
    spinner.stop();
    usage();
    process.exit(1);
}

const directoryPath = args[2];
const templateFile = args[3];
//print(templateFile)

generateImages()

generateReport().then(() => console.log("Done"))

// var firstModule = child_process.fork('C:/Users/IoanaL/LICENTA/NodeImageGenerator/echarts-to-pics/src/generate-images.js', [directoryPath, 'jpg', '1000'], { silent:true })
//
// firstModule.on('exit', function() {
//
//     var secondModule = child_process.fork('C:/Users/IoanaL/LICENTA/NodePptGenerator/report-generator/lib/report-generator.js', [templateFile])
//
//     spinner.succeed(chalk.green(" finished\n"));
// })
