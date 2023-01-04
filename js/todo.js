const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.id
	li.remove();
}

function paintToDo(newToDoObj) {
	const li = document.createElement("li");
	li.id = newTodoObj.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);

	span.innerText = newToDoObj.text;


	li.appendChild(span);
	li.appendChild(button);
	

	toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newToDoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
