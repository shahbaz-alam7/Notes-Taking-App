shownotes();
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  console.log("submit");
  title = document.getElementById("title");
  note = document.getElementById("note");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  myObj = {
    title: title.value,
    note: note.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  title.value = "";
  note.value = "";
  shownotes();
});
// ? shownotes function will render all the notes
function shownotes() {
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    console.log(notesObj);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    console.log(element, index);
    html += `
      <div class="note my">
        <h1>${index + 1}. ${element.title}</h1>
        <p class="para">${element.note}</p>
        <button id="${index}" onclick="deletenote(this.id)" class="delbtn btn">Delete Note</button>
      </div>`;
  });
  let allnotes = document.getElementById("allnotes");
  if (notesObj.length != 0) {
    allnotes.innerHTML = html;
  } else {
    allnotes.innerHTML = `We have nothing to show you, please use add note above`;
  }
}
// ! delete function on clicking delete button
function deletenote(index) {
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}

// ? date function will automaticlly update the year 
footer = document.getElementById("footer");
let date = new Date();
year = date.getFullYear();
console.log(year);
copyright = `All rights reserved |  <a href="https://github.com/shahbaz-alam7">Shahbaz Alam</a>`;
footer.innerHTML = copyright + " | " + year;
