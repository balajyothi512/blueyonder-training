document.addEventListener("DOMContentLoaded", function() {
    const draggables = document.querySelectorAll(".draggable");
    const dropzones = document.querySelectorAll(".dropzone");
  
    // Add event listeners for draggables
    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", dragStart);
      draggable.addEventListener("dragend", dragEnd);
    });
  
    // Add event listeners for dropzones
    dropzones.forEach(dropzone => {
      dropzone.addEventListener("dragover", dragOver);
      dropzone.addEventListener("dragenter", dragEnter);
      dropzone.addEventListener("dragleave", dragLeave);
      dropzone.addEventListener("drop", drop);
    });
  
    // Drag functions
    function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
      setTimeout(() => {
        event.target.style.display = "none"; // Hide element being dragged
      }, 0);
    }
  
    function dragEnd(event) {
      event.target.style.display = "block"; // Show element after dragging
    }
  
    // Drop zone functions
    function dragOver(event) {
      event.preventDefault(); // Allow drop
    }
  
    function dragEnter(event) {
      event.preventDefault();
      event.target.classList.add("hovered"); // Add visual feedback when element enters drop zone
    }
  
    function dragLeave(event) {
      event.target.classList.remove("hovered"); // Remove visual feedback when element leaves drop zone
    }
  
    function drop(event) {
      event.preventDefault();
      const draggableId = event.dataTransfer.getData("text/plain");
      const draggableElement = document.getElementById(draggableId);
  
      // Append draggable element to drop zone
      event.target.appendChild(draggableElement);
  
      // Remove visual feedback class
      event.target.classList.remove("hovered");
    }
  });
  