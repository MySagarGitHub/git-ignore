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
  