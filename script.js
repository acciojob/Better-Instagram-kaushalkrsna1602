//your code here
const parent = document.getElementById("parent");

let draggedElement = null;

// Add event listeners to all child elements
parent.addEventListener("dragstart", (e) => {
  if (e.target && e.target.classList.contains("image")) {
    draggedElement = e.target;
    e.target.classList.add("selected");
  }
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow the drop
});

parent.addEventListener("drop", (e) => {
  if (e.target && e.target.classList.contains("image")) {
    const droppedElement = e.target;

    // Swap the innerHTML of dragged and dropped elements
    const draggedHTML = draggedElement.innerHTML;
    const droppedHTML = droppedElement.innerHTML;

    draggedElement.innerHTML = droppedHTML;
    droppedElement.innerHTML = draggedHTML;

    // Swap background images of dragged and dropped elements
    const draggedBg = draggedElement.style.backgroundImage;
    const droppedBg = droppedElement.style.backgroundImage;

    draggedElement.style.backgroundImage = droppedBg;
    droppedElement.style.backgroundImage = draggedBg;
  }

  if (draggedElement) {
    draggedElement.classList.remove("selected");
  }
  draggedElement = null;
});

parent.addEventListener("dragend", (e) => {
  if (e.target && e.target.classList.contains("image")) {
    e.target.classList.remove("selected");
  }
});
