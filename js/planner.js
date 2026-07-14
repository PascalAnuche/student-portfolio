// planner.js — the Academic Planner. All task data lives in a single `tasks`
// array of objects ({ id, text, completed, dueDate }); the DOM list is always
// re-rendered from that array, and every change is persisted to localStorage.

const STORAGE_KEY = 'student-portfolio.tasks';
const DUE_SOON_WINDOW_MS = 48 * 60 * 60 * 1000; // 48 hours
const REMOVE_ANIMATION_MS = 250; // matches --transition-med in styles.css

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDueInput = document.getElementById('task-due');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');
const plannerEmpty = document.getElementById('planner-empty');

let tasks = loadTasks();

function loadTasks() {
  // A first-time visitor has nothing saved, and stored JSON could be invalid —
  // either way, fall back to an empty list instead of throwing.
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw === null ? [] : JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(text, dueDate) {
  const task = {
    id: Date.now(),
    text: text,
    completed: false,
    dueDate: dueDate || null
  };
  tasks.push(task);
  saveTasks();
  renderTasks(task.id);
}

function toggleComplete(id) {
  const task = tasks.find(function (item) { return item.id === id; });
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(function (item) { return item.id !== id; });
  saveTasks();
  renderTasks();
}

function isDueSoon(task) {
  if (!task.dueDate || task.completed) return false;
  const due = new Date(task.dueDate + 'T23:59:59');
  return due.getTime() - Date.now() < DUE_SOON_WINDOW_MS;
}

function isOverdue(task) {
  if (!task.dueDate || task.completed) return false;
  const due = new Date(task.dueDate + 'T23:59:59');
  return due.getTime() < Date.now();
}

function formatDueLabel(task) {
  const due = new Date(task.dueDate + 'T00:00:00');
  const formatted = due.toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
  return (isOverdue(task) ? 'Overdue · ' : 'Due ') + formatted;
}

function createTaskElement(task, isEntering) {
  const item = document.createElement('li');
  item.className = 'task';
  item.dataset.id = task.id;
  if (task.completed) item.classList.add('task--completed');
  if (isDueSoon(task)) item.classList.add('task--due-soon');
  if (isEntering) item.classList.add('task--entering');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task__checkbox';
  checkbox.id = 'task-check-' + task.id;
  checkbox.checked = task.completed;

  const body = document.createElement('div');
  body.className = 'task__body';

  const label = document.createElement('label');
  label.className = 'task__text';
  label.htmlFor = checkbox.id;
  label.textContent = task.text;
  body.appendChild(label);

  if (task.dueDate) {
    const due = document.createElement('span');
    due.className = 'task__due';
    due.textContent = formatDueLabel(task);
    body.appendChild(due);
  }

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'task__delete';
  deleteButton.setAttribute('aria-label', 'Delete task: ' + task.text);
  deleteButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="3 6 5 6 21 6"/>' +
    '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' +
    '<line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>' +
    '</svg>';

  item.appendChild(checkbox);
  item.appendChild(body);
  item.appendChild(deleteButton);
  return item;
}

function renderTasks(enteringId) {
  taskList.innerHTML = '';
  tasks.forEach(function (task) {
    taskList.appendChild(createTaskElement(task, task.id === enteringId));
  });
  plannerEmpty.hidden = tasks.length > 0;
  updateCounter();
}

function updateCounter() {
  if (tasks.length === 0) {
    taskCounter.textContent = 'No tasks yet.';
    return;
  }
  const remaining = tasks.filter(function (task) { return !task.completed; }).length;
  if (remaining === 0) {
    taskCounter.textContent = 'All done — 0 of ' + tasks.length + ' tasks remaining.';
  } else {
    taskCounter.textContent =
      remaining + ' of ' + tasks.length + (remaining === 1 && tasks.length === 1 ? ' task' : ' tasks') + ' remaining.';
  }
}

function startRemoveTask(item) {
  if (item.classList.contains('task--leaving')) return;
  const id = Number(item.dataset.id);
  item.classList.add('task--leaving');
  // Let the exit animation play before the task leaves the array + DOM.
  window.setTimeout(function () { deleteTask(id); }, REMOVE_ANIMATION_MS);
}

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }
  addTask(text, taskDueInput.value);
  taskForm.reset();
  taskInput.focus();
});

// Escape clears a half-typed task without reaching for the mouse.
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    taskInput.value = '';
  }
});

// One delegated listener each for toggling (change) and deleting (click),
// so listeners don't need to be re-attached after every render.
taskList.addEventListener('change', function (event) {
  if (!event.target.classList.contains('task__checkbox')) return;
  const item = event.target.closest('.task');
  if (item) toggleComplete(Number(item.dataset.id));
});

taskList.addEventListener('click', function (event) {
  const deleteButton = event.target.closest('.task__delete');
  if (!deleteButton) return;
  const item = deleteButton.closest('.task');
  if (item) startRemoveTask(item);
});

renderTasks();
