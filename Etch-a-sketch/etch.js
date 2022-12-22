const max_size_grid_px = 700;

function createEtchGrid() {

  const number = document.getElementById("grid_size_num")?.value;
  if (number < 100 && number != "") {
    closeWarning();
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

    if (document.getElementById("draw_etch_mode").value == "ETCH") {
      etch();
    } else {
      draw();
    }

  } else {
    openWarning();
  }
}

function draw() {
  // Add event handlers for all of the etch squares
  const etch_squares = document.querySelectorAll('.flex_vertical_item');
  // To draw
  etch_squares.forEach((etch_square) => {
    // and for each one we add a 'click' listener
    etch_square.addEventListener('click', () => {
      if (etch_square.classList.contains("flex_vertical_item_pressed")) {
        etch_square.classList.remove("flex_vertical_item_pressed");
        etch_square.classList.add("flex_vertical_item");
      } else {
        etch_square.classList.add("flex_vertical_item_pressed");
        etch_square.classList.remove("flex_vertical_item");
      }

    });
  });
}

function etch() {
  // Add event handlers for all of the etch squares
  const etch_squares = document.querySelectorAll('.flex_vertical_item');
  // To Etch
  etch_squares.forEach((etch_square) => {
    // and for each one we add a 'click' listener
    etch_square.addEventListener('mouseover', () => {
      if (!etch_square.classList.contains("flex_vertical_item_pressed")) {
        etch_square.classList.add("flex_vertical_item_pressed");
        etch_square.classList.remove("flex_vertical_item");
      }

    });
  });
}

function empty(parent) {
  while (parent.firstElementChild) {
    parent.firstElementChild.remove();
  }
}

function closeWarning() {
  const popup = document.querySelectorAll(".popUpInfo");
  popup.forEach((item) => {
    item.style.display = "none";
  });
}

function openWarning() {
  const popup = document.querySelectorAll(".popUpInfo");
  popup.forEach((item) => {
    item.style.display = "block";
  });
}

function changeEtchColor() {
  const color = document.getElementById("etch_color").value;
  var etch_square = getCSSRule('div.flex_vertical_item_pressed');
  etch_square.style.backgroundColor = color;
}

function changeBackgroundColor() {
  const color = document.getElementById("etch_background_color").value;
  var background_square = getCSSRule('.flex_vertical_item');
  background_square.style.backgroundColor = color;
}

function getCSSRule(selector) {
  selector = selector.toLowerCase();
  var result = null;
  var find = Array.prototype.find;

  find.call(document.styleSheets, styleSheet => {
    result = find.call(styleSheet.cssRules, cssRule => {
      return cssRule instanceof CSSStyleRule
        && cssRule.selectorText.toLowerCase() == selector;
    });
    return result != null;
  });
  return result;
}

function toggleMode() {
  switch_text = document.getElementById("draw_etch_mode");
  if (switch_text.value == "DRAW") {
    switch_text.value = "ETCH";
  } else {
    switch_text.value = "DRAW";
  }

}

function darkMode() {

  switch_text = document.getElementById("darkmode");
  var body = getCSSRule('body');
  var labels = getCSSRule('.label');
  var etch_container = getCSSRule('.flex_box_container');
  var header_title = getCSSRule(".header_title");

  if (switch_text.value == "Dark mode") {
    // Turn on dark mode
    switch_text.value = "Light mode";
    body.style.backgroundColor = "#303030";
    labels.style.color = "#989898";
    etch_container.style.backgroundColor = "#d7d7d7";
    header_title.style.color = "#FFF";
  } else {
    // Turn on light mode
    switch_text.value = "Dark mode";
    body.style.backgroundColor = "#ededed";
    labels.style.color = "#000000";
    etch_container.style.backgroundColor = "#FFF";
    header_title.style.color = "#000";
  }
}
//Handlers
document.getElementById("submit_grid_size")?.addEventListener('click', createEtchGrid);
document.getElementById("error_ok").addEventListener('click', closeWarning);
document.getElementById("etch_color").addEventListener('blur', changeEtchColor);
document.getElementById("etch_background_color").addEventListener('blur', changeBackgroundColor);
document.getElementById("draw_etch_mode").addEventListener('click', toggleMode);
document.getElementById("darkmode").addEventListener('click', darkMode);

createEtchGrid(); //Create etch on startup
