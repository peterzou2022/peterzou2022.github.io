document.addEventListener('DOMContentLoaded', () => {
	const inputEl = document.getElementById('todo-input');
	const addBtn = document.getElementById('add-btn');
	const listEl = document.getElementById('todo-list');

	function addTodoItem(text) {
		const li = document.createElement('li');

		const span = document.createElement('span');
		span.className = 'text';
		span.textContent = text;

		const completeBtn = document.createElement('button');
		completeBtn.className = 'btn complete-btn';
		completeBtn.type = 'button';
		completeBtn.textContent = '完成';
		completeBtn.addEventListener('click', () => {
			li.remove();
		});

		li.appendChild(span);
		li.appendChild(completeBtn);
		listEl.appendChild(li);
	}

	addBtn.addEventListener('click', () => {
		const value = (inputEl.value || '').trim();
		if (!value) return;
		addTodoItem(value);
		inputEl.value = '';
		inputEl.focus();
	});
});

