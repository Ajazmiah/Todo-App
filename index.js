const search = document.querySelector('#search');
const addBtn = document.querySelector('#addBtn');
const todos = document.querySelector('.Todos');
const empty = document.querySelector('.empty');

getTodo();

todos.addEventListener('click', Delete);
addBtn.addEventListener("click", function (e) {
e.preventDefault();
		addToDo();
});
search.addEventListener('keydown', function (e) {
	if (e.which === 13) {
		e.preventDefault();
		addToDo()
	}
})

function addToDo(e) {

if(search.value){
		 const input = search.value;
		 let newTodo = {todo: input};
		 let todo = []
		 todo.push(newTodo.todo);

		 if(localStorage.getItem('todo') === null){
			 localStorage.setItem('todo', JSON.stringify(todo));
		 }
		 else{
		  	let todos = JSON.parse(localStorage.getItem('todo'));
				todos.forEach(savedTodo=>{
					todo.push(savedTodo);
			})
				localStorage.setItem('todo', JSON.stringify(todo));
		}
		search.value = "";
	 	getTodo();
	}else{
		alert('Please enter a todo')
	}
}
function Delete(e) {

		let todo = [];
		let savedItems = JSON.parse(localStorage.getItem('todo'));
		let TODO = document.getElementsByClassName('Todo');

		todo = Array.from(TODO);

		if(e.target.classList.contains('ToDo__del')){
				let tar = e.target.previousSibling.innerText;
				for(let i =0; i<savedItems.length; i++){
						if(tar == savedItems[i]){
								savedItems.splice(i , 1);
							}
						}
					}
			localStorage.setItem('todo', JSON.stringify(savedItems));
			getTodo();
	}

function getTodo() {
	search.value = "";
	todos.innerHTML = ""
	if(localStorage.getItem('todo')){
			const saved = JSON.parse(localStorage.getItem('todo'));

			saved.forEach(todo =>{
					const listItem = document.createElement('li');
					listItem.className = "list__item";

					const delBtn = document.createElement('button');
					delBtn.className = "ToDo__del";
					delBtn.innerText = "delete";

					const para = document.createElement('p');
					para.className = "Todo"
					para.innerText = todo

					listItem.appendChild(para);
					listItem.appendChild(delBtn);
					todos.appendChild(listItem);
				})
			}
		}
