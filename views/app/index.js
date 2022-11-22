const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const invalidCheck = document.querySelector('.invalid-check');





const getTodos = async () => {

try {

const {data: todos} = await axios.get('/api/todos');
if(todos.length === 0) {
	const li = document.createElement('li');
	li.id = todo.id;
	li.classList.add('flex', 'flex-row')
	li.innerHTML = `
	<div class="group grow flex flex-row justify-between">
								<i class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</i>
								<p class="p-4 break-words grow">No tienes ninguna tarea</p>
							</div>
							<i class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 easy-in-out">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</i>
						</li>
	`;
	ul.append(li);
	todoCount();
};

todos.forEach( todo => {
	const li = document.createElement('li');
	li.id = todo.id;
	li.classList.add('flex', 'flex-row')
	li.innerHTML = `
	<div class="group grow flex flex-row justify-between">
								<i class="delete-icon w-12 md:w-14 hidden group-hover:flex group-hover:justify-center group-hover:items-center cursor-pointer bg-red-500 origin-left">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</i>
								<p class="p-4 break-words grow">${todo.text}</p>
							</div>
							<i class="check-icon w-12 md:w-14 flex justify-center items-center cursor-pointer border-l border-slate-300 dark:border-slate-400 hover:bg-green-300 transition duration-300 easy-in-out">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</i>
						</li>
	`;
	if (todo.checked) {
		li.classList.add('line-through', 'text-slate-400', 'dark:text-slate-600');		
		li.children[1].classList.add('bg-green-400');
		li.children[1].classList.remove('hover:bg-green-300');
	}
	ul.append(li);
});
todoCount();

} catch (error) {
	if (error.response.status === 401 ) {
		window.location.pathname = '/login'
	}
}

}


getTodos()

const createDeleteIconSvg = () => {
	const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const pathSvg = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	iconSvg.setAttribute('fill', 'none');
	iconSvg.setAttribute('viewBox', '0 0 24 24');
	iconSvg.setAttribute('stroke', 'currentColor');
	iconSvg.setAttribute('stroke-width', '2');

	iconSvg.classList.add('h-6', 'w-6', 'md:h-7', 'md:w-7', 'text-white');
	
	pathSvg.setAttribute('d', 'M6 18L18 6M6 6l12 12');
	pathSvg.setAttribute('stroke-linecap', 'round');
	pathSvg.setAttribute('stroke-linejoin', 'round');

	iconSvg.appendChild(pathSvg);
	return iconSvg;
};

const createCheckIconSvg = () => {
	const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const pathSvg = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	iconSvg.setAttribute('fill', 'none');
	iconSvg.setAttribute('viewBox', '0 0 24 24');
	iconSvg.setAttribute('stroke', 'currentColor');
	iconSvg.setAttribute('stroke-width', '2');

	iconSvg.classList.add('h-6', 'w-6', 'md:h-7', 'md:w-7', 'text-green-600');
	
	pathSvg.setAttribute('d', 'M5 13l4 4L19 7');
	pathSvg.setAttribute('stroke-linecap', 'round');
	pathSvg.setAttribute('stroke-linejoin', 'round');

	iconSvg.appendChild(pathSvg);
	return iconSvg;
};

const addTodo = async () => {

	const newTodo = input.value;

	const {data: todo}  = await axios.post('/api/todos', {text: newTodo});
	
	
	// // Create the HTML Elements and asign the value of the input
	const div = document.createElement('div');
	const listItem = document.createElement('li');
	const todoText = document.createElement('p');
	const deleteIcon = document.createElement('i');
	const checkIcon = document.createElement('i');
	const deleteIconSvg = createDeleteIconSvg();
	const checkIconSvg = createCheckIconSvg();
	
	
	// Add the classes to the HTML Elements
	div.classList.add('group', 'grow', 'flex', 'flex-row', 'justify-between');
	listItem.classList.add('flex', 'flex-row');
	todoText.classList.add('p-4', 'break-words', 'grow');
	deleteIcon.classList.add('delete-icon', 'w-12', 'md:w-14', 'hidden', 'group-hover:flex', 'group-hover:justify-center', 'group-hover:items-center', 'cursor-pointer', 'bg-red-500', 'origin-left');
	checkIcon.classList.add('check-icon', 'w-12', 'md:w-14', 'flex', 'justify-center', 'items-center', 'cursor-pointer', 'border-l', 'border-slate-300', 'dark:border-slate-400', 'hover:bg-green-300', 'transition', 'duration-300', 'easy-in-out');

	// Append the elemets
	listItem.id = todo.id;
	deleteIcon.appendChild(deleteIconSvg);
	checkIcon.appendChild(checkIconSvg);
	todoText.innerHTML = todo.text;
	div.appendChild(deleteIcon);
	div.appendChild(todoText);
	listItem.append(div, checkIcon);
	ul.appendChild(listItem);
	input.value = '';
	todoCount();
};

const totalCount = () => {
	const count = document.querySelector('.total-count');
	const totalTodos = document.querySelector('.total-todos');
	const howMany = document.querySelector('ul').children.length; 
	count.textContent = '';
	count.append(howMany);
	totalTodos.appendChild(count);
};

const completeCount = () => {
	const count = document.querySelector('.completed-count');
	const completedTodos = document.querySelector('.completed-todos');
	const howMany = document.querySelectorAll('.line-through').length;
	count.textContent = '';
	count.append(howMany);
	completedTodos.appendChild(count);
};

const incompletedCount = () => {
	const count = document.querySelector('.incompleted-count');
	const incompletedTodos = document.querySelector('.incompleted-todos');
	const howMany = document.querySelectorAll('ul li:not(.line-through)').length; 
	count.textContent = '';
	count.append(howMany);
	incompletedTodos.appendChild(count);
};

const todoCount = () => {
	totalCount();
	completeCount();
	incompletedCount();
};

// Add a todo by keyboard
input.addEventListener('keydown', event => {
	if (event.key === 'Enter' && input.value !== '') {
		input.classList.remove('border-2', 'border-rose-500');
		invalidCheck.classList.add('hidden');
		addTodo();
		todoCount();
	} else if (event.key === 'Enter' && input.value === '') {
		input.classList.remove('focus:ring-2', 'focus:ring-violet-600');
		input.classList.add('focus:ring-2', 'focus:ring-rose-600');
		invalidCheck.classList.remove('hidden');
	} else {
		input.classList.remove('focus:ring-2', 'focus:ring-rose-600', 'border-2', 'border-rose-600');
		input.classList.add('focus:ring-2', 'focus:ring-violet-600');
		invalidCheck.classList.add('hidden');
	};
});

// Add a todo by button
addBtn.addEventListener('click', () => {
	if (input.value !== '') {
		addTodo();
		todoCount();
	} else {
		input.classList.remove('focus:ring-2', 'focus:ring-violet-600');
		input.classList.add('border-2', 'border-rose-600');
		invalidCheck.classList.remove('hidden');
	}
});

ul.addEventListener('click', async event => {
	const deleteBtn = document.querySelectorAll('.delete-icon svg path');
	const checkBtn = document.querySelectorAll('.check-icon svg path');

	deleteBtn.forEach( async element => {
		if (event.target === element.parentElement || event.target ===
			 element.parentElement.parentElement || event.target === element) {
		
		const id = element.parentElement.parentElement.parentElement.parentElement.id;
		if (id) {
			await axios.delete(`/api/todos/${id}`);
			
		}
		element.parentElement.parentElement.parentElement.parentElement.remove();
			todoCount();
		
		} else {
			return;
		}
	});

	checkBtn.forEach( async element => {
		if (event.target === element.parentElement || event.target === element.parentElement.parentElement || event.target === element) {
			const todo = element.parentElement.parentElement.parentElement;
			const checkIcon = element.parentElement.parentElement;
			const id = element.parentElement.parentElement.parentElement.id;
			if (!todo.classList.contains('line-through')) {
				await axios.patch(`/api/todos/${id}`, {checked: true});
				checkIcon.classList.add('bg-green-400');
				checkIcon.classList.remove('hover:bg-green-300');
				todo.classList.add('line-through', 'text-slate-400', 'dark:text-slate-600');
				todoCount();
				localStorage.setItem('todoList', ul.innerHTML);
			} else {
				await axios.patch(`/api/todos/${id}`, {checked: false});
				checkIcon.classList.remove('bg-green-400');
				checkIcon.classList.add('hover:bg-green-300');
				todo.classList.remove('line-through', 'text-slate-400', 'dark:text-slate-600');
				todoCount();
				localStorage.setItem('todoList', ul.innerHTML);
			}
		} else {
			return
		}
	});
});

// (() => {
// 	if (localStorage.getItem('todoList')) {
// 		ul.innerHTML = localStorage.getItem('todoList');
// 		todoCount();
// 	} else {
// 		todoCount();
// 	}
// })();