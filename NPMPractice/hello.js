import { Command } from "commander";

const program = new Command();

// console.log(program);

program.option("-n, --name <name>", "Your name");
program.parse();

const options = program.opts();

const result = `Hello ${options.name}!`;
console.log(result);
