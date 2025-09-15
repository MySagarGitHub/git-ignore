// app.js - Vanilla JS todo app with localStorage
(() => {
  const LS_KEY = "modern_todo_v1";
  const form = document.getElementById("todo-form");
  const input = document.getElementById("new-todo");
  const listEl = document.getElementById("todo-list");
  const countEl = document.getElementById("count");
  const clearBtn = document.getElementById("clear-completed");
  const filters = document.querySelectorAll(".filter");

  let todos = [];

  // --- Utilities ---
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
  }

  function save() {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }

  function load() {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse todos", e);
      return [];
    }
  }
  // --- Rendering ---
  let activeFilter = "all";
  function render() {
    listEl.innerHTML = "";
    const visible = todos.filter(t => {
      if (activeFilter === "all") return true;
      if (activeFilter === "active") return !t.done;
      return t.done;
    });

    visible.forEach(todo => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.dataset.id = todo.id;

      // checkbox
      const cb = document.createElement("button");
      cb.className = "todo-checkbox" + (todo.done ? " checked" : "");
      cb.setAttribute("aria-pressed", String(!!todo.done));
      cb.setAttribute("aria-label", todo.done ? "Mark as not done" : "Mark done");
      cb.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      cb.addEventListener("click", () => toggle(todo.id));
            // content
      const content = document.createElement("div");
      content.className = "todo-content";

      const label = document.createElement("label");
      label.className = "todo-label";

      const span = document.createElement("span");
      span.className = "todo-text" + (todo.done ? " completed" : "");
      span.textContent = todo.text;
      span.title = todo.text;

      // double-click to edit
      span.addEventListener("dblclick", () => startEdit(todo.id, span));

      label.appendChild(span);
      content.appendChild(label);

      // actions: edit + delete
      const actions = document.createElement("div");
      actions.className = "todo-actions";

      const editBtn = document.createElement("button");
      editBtn.className = "action-btn";
      editBtn.title = "Edit";
      editBtn.innerHTML = "✏️";
      editBtn.addEventListener("click", () => startEdit(todo.id, span));

      const delBtn = document.createElement("button");
      delBtn.className = "action-btn";
      delBtn.title = "Delete";
      delBtn.innerHTML = "🗑️";
      delBtn.addEventListener("click", () => remove(todo.id));

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);

      li.appendChild(cb);
      li.appendChild(content);
      li.appendChild(actions);

      listEl.appendChild(li);
    });

    // count
    const remaining = todos.filter(t => !t.done).length;
    countEl.textContent = `${remaining} item${remaining !== 1 ? "s" : ""} left`;
  }