const header_div = document.createElement("div");

// header_div.innerHTML = `
//     <nav class="header" style="display: grid; grid-template-columns: repeat(4, 20vw); text-align: center; grid-template-areas: 'about_me etch_sketch cs_fsm .'">
//         <a href="https://fionanet.github.io/About_me/index.html" id = "about_me" style="grid-column-start: 1;">About me</a>
//         <a href="https://fionanet.github.io/Etch-a-sketch/index.html" id = "etch_sketch" style="grid-column-start: 2;">Etch & Sketch</a>
//         <a href="https://github.com/FionaNET/Csharp---FSM" id = "cs_fsm" style="grid-column-start: 3;" >C# - FSM </a>
//     </nav>
// `;

//For testing
header_div.innerHTML = `
    <nav class="header d-flex justify-content-center py-3" style="display: grid; grid-template-columns: repeat(4, 25vw); text-align: center; grid-template-areas: 'about_me etch_sketch cs_fsm .'">
        <a href="../index.html" id = "about_me" style="grid-column-start: 1;">About me</a>
        <a href="/Etch-a-sketch/index.html" id = "etch_sketch" style="grid-column-start: 2;">Etch & Sketch</a>
        <a href="https://github.com/FionaNET/Csharp---FSM" id = "cs_fsm" style="grid-column-start: 3;" >C# - FSM </a>
    </nav>
`;

// header_div.style.fontFamily = 'Times';
// header_div.style.fontSize = "25px";
// header_div.style.fontWeight = "bold";
// header_div.style.backgroundColor = "#FFF";
// header_div.style.position = "absolute";
// header_div.style.top = "0px";
document.body.prepend(header_div);