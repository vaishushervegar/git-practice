const fs = require("fs");

function addNote(note) {
  const notes = JSON.parse(fs.readFileSync("notes.json"));
  notes.push(note);
  fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));
  console.log("Note added!");
}

const input = process.argv[2];

if (input) {
  addNote(input);
} else {
  console.log("Please provide a note.");
}


if (process.argv[2] === "list") {
  const notes = JSON.parse(fs.readFileSync("notes.json"));
  console.log(notes);
}
