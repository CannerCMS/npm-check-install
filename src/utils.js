const { gray } = require("chalk");

export const info = (...msgs) => `${gray(">")} ${msgs.join("\n")}`;
