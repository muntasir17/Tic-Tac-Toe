
let message = document.getElementById("message");
let square = document.querySelectorAll(".square");
let resetBtn = document.querySelector(".reset");
let players = ["X", "0"];
let currentPlayer = players[0];
let winningPatter = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];
for (let i = 0; i < square.length; i++) {
   // aikhane akta for loop use kora hoise jaita square er length porjonto colbe
   square[i].addEventListener("click", () => {
      // ai line e protekta box er upor click event lagaici
      if (square[i].textContent !== "" || winner(currentPlayer)) {
         //jodi box khali na thake tahole code aikhane theme jabe.
         return
      }
      square[i].textContent = currentPlayer;
      //jodi khali thake tahole ai code run hobe
      if (winner(currentPlayer)) {
         message.innerHTML = ` ${currentPlayer}' Win. Restart The game`
         return;
      }
      if (tieResult()) {
         message.innerHTML = `Match Tied. Restart The game`
         return;
      }
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
      //aikhane jodi current player === X hoi tahole poroborti player 0 hobe and abr X hobe.
      if (currentPlayer === players[0]) {
         // basically aikhane kora hoise je jodi player x hoi tahole or turn dhekabe naile 0 er turn dhekabe;
         message.innerHTML = `X' turn`;
      }
      else {
         message.innerHTML = `0' turn`;
      }

   });
};
function winner(currentPlayer) {
   for (let i = 0; i < winningPatter.length; i++) {
      let [a, b, c] = winningPatter[i];
      if (square[a].textContent === currentPlayer &&
         square[b].textContent === currentPlayer &&
         square[c].textContent === currentPlayer
         // jodi box er modde x ba 0 duitar modde akta o jodi mile jai wining patern er sate tahole return true mane khela sesh 
      ) {
         return true
      }
   }
   //ar jodi na mile tahole return false mane khela akono calai jabo
   return false
}
function tieResult() {
   for (let i = 0; i < square.length; i++) {
      if (square[i].textContent === "") {
         //mane akono jodi box khali thake tahole tahole khela calai jabo
         return false
      }
   }
   //ar jodi sob box puron hoi jai tahole khela sesh
   return true;
}
resetBtn.addEventListener("click", () => {
   reset();
})
function reset() {
   for (let i = 0; i < square.length; i++) {
      square[i].textContent = "";
      message.textContent = ""
   }
}
let changecolor = document.getElementById("changecolor");
let body = document.querySelector("body");
changecolor.addEventListener("click", () => {
   body.classList.toggle("active");

})




































// for(let i = 0; i < square.length; i++){
// square[i].addEventListener("click", ()=>{
//    if(square[i].textContent !== "" || CheckWinner(currentPlayer)){
//       return
//    }
//    square[i].textContent = currentPlayer;
// if(CheckWinner(currentPlayer)){
// message.textContent = ` ${currentPlayer}' Wins restart the game`
// return
// }
// if(TiesResult()){
//    message.textContent = `Match Tied restart the game`
// return
// }
//    currentPlayer = currentPlayer === players[0]? players[1] : players[0];
//    if(currentPlayer === players[0]){
//       message.textContent = `X' Turn`
//    }
//    else{
//           message.textContent = `0' Turn`
//    }
// })
// }
// function CheckWinner(currentPlayer) {
//    for(let i = 0; i < winningPatter.length; i++){
//       let [a,b,c] = winningPatter[i];
//       if(square[a].textContent === currentPlayer &&
//          square[b].textContent === currentPlayer &&
//          square[c].textContent === currentPlayer
//       ){
//          return true
//       }
//    }
//    return false
// }
// function TiesResult(){
//    for(let i = 0; i < square.length; i++){
// if(square[i].textContent === ""){
//    return false
// }
//    }
//    return true
// }

// function resetButon(){
//    for(let i = 0; i < square.length; i++){
//       square[i].textContent = "";
//       message.textContent = "";
//    }
// }
// RestartBUtton.addEventListener("click", ()=>{
//    resetButon()
// });