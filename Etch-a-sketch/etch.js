const max_size_grid_px = 700;

function createEtchGrid() {

  const number = document.getElementById("grid_size_num")?.value;
  if ((number != null) && number < 100) {
    const container = document.getElementById("container");
    empty(container);
    for (var i = 0; i < number; i++) {
      // Each row should also be a flex container that spans downwards
      const div = document.createElement("div");
      div.className = "flex_row_containers";
      for (var j = 0; j < number; j++) {
        const div_vertical = document.createElement("div");
        div_vertical.className = "flex_vertical_item";
        div_vertical.style.height = (max_size_grid_px / number) + "px";
        div_vertical.style.width = (max_size_grid_px / number) + "px";
        div.appendChild(div_vertical);
      }
      div.style.height = max_size_grid_px + "px";
      div.style.width = (max_size_grid_px / number) + "px";
      container.appendChild(div);
    }

    // Add event handlers for all of the etch squares
    const etch_squares = document.querySelectorAll('.flex_vertical_item');
    etch_squares.forEach((etch_square) => {
      // and for each one we add a 'click' listener
      etch_square.addEventListener('click', () => {
        etch_square.className = "flex_vertical_item_pressed";
      });
    });
  } else {
    //TODO: create popup to warn
  }
}

function empty(parent) {
  while (parent.firstElementChild) {
    parent.firstElementChild.remove();
  }
}
//Handlers
document.getElementById("submit_grid_size")?.addEventListener('click', createEtchGrid);

