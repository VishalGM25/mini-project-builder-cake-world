/*Fill your code */
var prices = {
  chocolate: 300,
  strawberry: 100,
  butterscotch: 200,
  vannila: 250,
  redvelvet: 350,
};

var state = {
  Chocolate: false,
  Strawberry: false,
  Butterscotch: false,
  Vannila: false,
  Redvelvet: false,
};

function renderAll() {
  renderChocolate();
  renderStrawberry();
  renderButterScotch();
  renderVannila();
  renderRedvelvet();
  renderPrice();
}
function renderChocolate() {
  var chocolate = document.querySelector("#box5");
  //console.log(chocolate);
  if (state.Chocolate) {
    chocolate.style.visibility = "visible";
  } else {
    chocolate.style.visibility = "hidden";
  }
}
function renderStrawberry() {
  var strawberry = document.querySelector("#box4");
  if (state.Strawberry) {
    strawberry.style.visibility = "visible";
  } else {
    strawberry.style.visibility = "hidden";
  }
}
function renderButterScotch() {
  var butterscotch = document.querySelector("#box3");
  if (state.Butterscotch) {
    butterscotch.style.visibility = "visible";
  } else {
    butterscotch.style.visibility = "hidden";
  }
}
function renderVannila() {
  var vannila = document.querySelector("#box2");
  if (state.Vannila) {
    vannila.style.visibility = "visible";
  } else {
    vannila.style.visibility = "hidden";
  }
}
function renderRedvelvet() {
  var redvelvet = document.querySelector("#box1");
  if (state.Redvelvet) {
    redvelvet.style.visibility = "visible";
    document.querySelector(".candles").style.display = "block";
  } else {
    redvelvet.style.visibility = "hidden";
    document.querySelector(".candles").style.display = "none";
  }
}

document.querySelector(".btn-chocolate").onclick = function () {
  state.Chocolate = !state.Chocolate;
  //console.log(state.chocolate);
  isActive("chocolate", state.Chocolate);
  renderAll();
};
document.querySelector(".btn-strawberry").onclick = function () {
  state.Strawberry = !state.Strawberry;
  isActive("strawberry", state.Strawberry);
  renderAll();
};
document.querySelector(".btn-butterScotch").onclick = function () {
  state.Butterscotch = !state.Butterscotch;
  isActive("butterscotch", state.Butterscotch);
  renderAll();
};
document.querySelector(".btn-vannila").onclick = function () {
  state.Vannila = !state.Vannila;
  isActive("vannila", state.Vannila);
  renderAll();
};
document.querySelector(".btn-redvelvet").onclick = function () {
  state.Redvelvet = !state.Redvelvet;
  isActive("redvelvet", state.Redvelvet);
  renderAll();
};
let isActive = (name, rtn) => {
  let billBoard = document.querySelectorAll("span");
  console.log(name + " " + rtn);
  for (let i = 0; i < billBoard.length; i++) {
    let falvour = billBoard[i].innerHTML;
    if (state[falvour] != rtn) {
      console.log("if");
      document.querySelector(
        `.bill-${name}`
      ).innerHTML = `${name.toUpperCase()}.....${prices[name]}`;
      console.log(`${prices[name]}`);
    } else {
      document.querySelector(`.bill-${name}`).innerHTML = "";
    }
  }
};

let renderPrice = () => {
  var total = 0;
  for (const item in state) {
    if (state[item]) {
      console.log(prices[item.toLowerCase()]);
      total += prices[item.toLowerCase()];
    }
  }
  document.querySelector(
    ".total-amount"
  ).innerHTML = `Total ...........${total}`;
};
