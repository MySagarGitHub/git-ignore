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
        