
    const taskForm = document.getElementById('task-form');
    const tasksContainer = document.getElementById('tasks');
    const filterButtons = document.querySelectorAll('button[id^="filter-"]');
    
    let tasks = [];
    let editTaskId = null;
    
    const renderTasks = (filter = 'all') => {
        tasksContainer.innerHTML = '';
        let filteredTasks = tasks;

        if (filter !== 'all') {
            filteredTasks = tasks.filter(task => task.status === filter);
        }

        filteredTasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            if (task.status === 'complete') {
                taskDiv.classList.add('completed');
            }

            taskDiv.innerHTML = `
                <div>
                    <strong>${task.title}</strong>
                    <p>${task.description}</p>
                    <small>${task.status}</small>
                </div>
                <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    <button class="toggle-status">${task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
                </div>
            `;

            tasksContainer.appendChild(taskDiv);

            taskDiv.querySelector('.edit').addEventListener('click', () => editTask(task.id));
            taskDiv.querySelector('.delete').addEventListener('click', () => deleteTask(task.id));
            taskDiv.querySelector('.toggle-status').addEventListener('click', () => toggleStatus(task.id));
        });
    };

    const addTask = (title, description, status) => {
        tasks.push({
            id: Date.now(),
            title,
            description,
            status
        });
        renderTasks();
    };

    const editTask = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('status').value = task.status;
            editTaskId = id;
        }
    };

    const updateTask = (id, title, description, status) => {
        tasks = tasks.map(task => task.id === id ? { id, title, description, status } : task);
        editTaskId = null;
        renderTasks();
    };

    const deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    const toggleStatus = (id) => {
        tasks = tasks.map(task => task.id === id ? { ...task, status: task.status === 'complete' ? 'incomplete' : 'complete' } : task);
        renderTasks();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const status = document.getElementById('status').value;

        if (editTaskId) {
            updateTask(editTaskId, title, description, status);
        } else {
            addTask(title, description, status);
        }

        taskForm.reset();
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.id.replace('filter-', '');
            renderTasks(filter);
        });
    });

    renderTasks();

