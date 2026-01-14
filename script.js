document.body.style.backgroundColor = "rgba(2, 6, 23, 1)";
document.body.style.fontFamily = "cursive";

let FourDiv = document.createElement('div');
FourDiv.className = "FourDiv";
FourDiv.style.width = "60rem";
FourDiv.style.height = "30rem";
FourDiv.style.background = "none";
FourDiv.style.display = "flex";
FourDiv.style.justifyContent = "center";
FourDiv.style.alignItems = "center";
FourDiv.style.gap = "15px";
FourDiv.style.margin = "auto";
FourDiv.style.boxShadow = "0 0 12px rgba(255,255,255,0.4), 0 0 35px rgba(255,255,255,0.7)";

FourDiv.style.marginTop = "7rem";

let ThreePro = document.createElement('div');
ThreePro.className = "ThreePro";
ThreePro.style.width = "14rem";
ThreePro.style.height = "14rem";
ThreePro.style.borderRadius = "5px";
ThreePro.style.background = "linear-gradient(125deg, #1788a7, #1a1d21, #d5cfdb)";


let ThreeProg = document.createElement('div');
ThreeProg.className = "ThreeProg";
ThreeProg.style.width = "14rem";
ThreeProg.style.height = "14rem";
ThreeProg.style.background = "linear-gradient(135deg, #343839, #d3dae4, #b591da)";
ThreeProg.style.borderRadius = "5px";
ThreeProg.style.transition = "all 1s ease";


let Buttonn = document.createElement('button');
Buttonn.className = "Buttonn";
Buttonn.innerText = "Click";
Buttonn.style.padding = "10px";
Buttonn.style.width = "5rem";
Buttonn.style.background = "linear-gradient( #343839, #1d75f0)";
Buttonn.style.boxShadow = "4px 5px 3px";
Buttonn.style.borderRadius = "4px"
Buttonn.style.border = "none";
Buttonn.style.boxShadow = "none";
Buttonn.style.marginLeft = "10px";
Buttonn.style.fontSize = "15px";
Buttonn.style.fontWeight = "700";
Buttonn.style.color = "white";
Buttonn.style.transition = "all 1s ease";

Buttonn.addEventListener('mouseenter', function () {
    Buttonn.style.background = "linear-gradient(135deg, rgba(0, 255, 255, 1), rgba(0, 114, 255, 1))";
    Buttonn.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
})

Buttonn.addEventListener('mouseleave', function () {
    Buttonn.style.background = "linear-gradient( #343839, #1d75f0)";
    Buttonn.style.boxShadow = "none";
})

let AnimateScale = false;
Buttonn.addEventListener('click', function () {
    AnimateScale = !AnimateScale;

    ThreeProg.style.transition = "all 2s ease";
    ThreeProg.style.background = "linear-gradient(125deg, #cce5ec, #113628, #877896)";
    ThreeProg.style.transform = AnimateScale ? "scale(0.5)" : "scale(1)";
})

//click dblclick event
let AnimateDb = true;
Buttonn.addEventListener('dblclick', function () {
    AnimateDb = !AnimateDb;

    ThreePro.style.transition = "all 2s ease";
    ThreePro.style.background = "linear-gradient(125deg, #cce5ec, #16c984, #9457d0)";
    ThreePro.style.transform = AnimateDb ? "scale(0.5)" : "scale(1)";
})

FourDiv.appendChild(ThreePro);
FourDiv.appendChild(ThreeProg);
FourDiv.appendChild(Buttonn);
document.body.appendChild(FourDiv);

