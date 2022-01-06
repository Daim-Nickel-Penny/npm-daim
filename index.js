"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card
const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:daimk558@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Have a Great Day..Good Bye!\n");
        },
      },
    ],
  },
];

// Data for the card
const data = {
  name: chalk.bold.green("        Daim Khan"),
  work: `${chalk.white("Software Developer")} ${chalk
    .hex("#2b82b2")
    .bold("MERN Stack")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("i_am_daim"),
  github: chalk.gray("https://github.com/") + chalk.green("Daim-Nickel-Penny"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("daim"),
  web: chalk.cyan("https://daimk1.web.app/"),
  npx: chalk.red("npx") + " " + chalk.white("daim"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

// Build the card
const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm an Electronics Engineer passionate about software development."
    )}`,
    `${chalk.italic("I'm a big connoisseur of music.")}`,
    `${chalk.italic("Thanks to my love for songs. ")}`,
    `${chalk.italic("Almost everything I work on is published on my Github")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");

// Show the tip
console.log(tip);

// Ask the Inquirer questions.
prompt(questions).then((answer) => answer.action());
