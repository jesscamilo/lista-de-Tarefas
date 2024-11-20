document.addEventListener("DOMContentLoaded", () => {
  const Tarefa = document.getElementById("Tarefa");
  const Adicionar = document.getElementById("Adicionar");
  const Lista = document.getElementById("Lista");

  function addTask() {
    const taskText = Tarefa.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
              <input type="checkbox" class="task-checkbox">
              <span>${taskText}</span>
              <button class="remove-button">Remover</button>
          `;
      Lista.appendChild(li);
      Adicionar.value = "";
    }
  }

  function removeTask(evento) {
    if (evento.target.classList.contains("remove-button")) {
      const li = evento.target.parentElement;
      Lista.removeChild(li);
    }
  }

  function toggleTaskCompletion(evento) {
    if (evento.target.classList.contains("task-checkbox")) {
      const taskText = evento.target.nextElementSibling;
      taskText.classList.toggle("completed");
    }
  }

  Adicionar.addEventListener("click", addTask);
  Lista.addEventListener("click", removeTask);
  Lista.addEventListener("change", toggleTaskCompletion);
});
