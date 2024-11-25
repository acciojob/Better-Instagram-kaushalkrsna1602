document.addEventListener("DOMContentLoaded", () => {
  const draggables = document.querySelectorAll(".draggable");
  const droppables = document.querySelectorAll(".droppable");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        draggable.classList.add("hide");
      }, 0);
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("hide");
    });
  });

  droppables.forEach((droppable) => {
    droppable.addEventListener("dragover", (e) => {
      e.preventDefault();
      droppable.classList.add("over");
    });

    droppable.addEventListener("dragleave", () => {
      droppable.classList.remove("over");
    });

    droppable.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggableId = e.dataTransfer.getData("text/plain");
      const draggableElement = document.getElementById(draggableId);
      if (!droppable.contains(draggableElement)) {
        droppable.appendChild(draggableElement);
      }
      droppable.classList.remove("over");
    });
  });
});
