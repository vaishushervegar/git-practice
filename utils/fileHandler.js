const fs = require("fs");

function readNotes() {
  return JSON.parse(fs.readFileSync("notes.json"));
}

module.exports = { readNotes };
