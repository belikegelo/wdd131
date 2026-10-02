
// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
    
});

// // Added feature if you click Enter in keyboard
// const inputElement = document.querySelector("#favchap");
// const buttonElement = document.querySelector("button");
// const listElement = document.querySelector("#list");

// function addChapter() {
//     // Check if the user entered something
//     if (inputElement.value != "") {

//         // Create list item
//         const li = document.createElement("li");
//         li.textContent = inputElement.value;

//         // Create delete button
//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "❌";

//         deleteBtn.addEventListener("click", function () {
//             listElement.removeChild(li);
//             inputElement.focus();
//         });

//         // Add delete button to list item
//         li.appendChild(deleteBtn);

//         // Add list item to unordered list
//         listElement.appendChild(li);

//         // Clear input
//         inputElement.value = "";
//     }

//     inputElement.focus();
// }

// // Click the button
// buttonElement.addEventListener("click", addChapter);

// // Press Enter in the input
// inputElement.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         addChapter();
//     }
// });

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener('click', function () {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  console.log(
    'I like to copy code instead of typing it out myself and trying to understand it.'
  );
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}



