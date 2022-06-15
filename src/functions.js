import chalk from "chalk";

export function print(args) {
    console.log(args);
   }

export function usage(){
    console.log(chalk.dim("\nGenerate a PowerPoint presentation starting from some graphical configuration files and a structure template file.\n"));
    console.log(chalk.red(" Use:"));
    console.log("       report-generator <folder-name> <template-file>\n")
}