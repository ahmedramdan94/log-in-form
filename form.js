let userInput = document.querySelector("[name = user]");
let passInput = document.querySelector("[name = password]");



console.log(userInput);

document.forms[0].onsubmit = function(event){
  let userValid = false;
  let passValid = false;
 if(userInput.value !== "" && userInput.value.length <= 10){
  userValid = true;
 }
if(passInput.value !== "" && passInput.value.length <= 20){
  passValid = true;
}
  if(userValid === false || passValid === false){
    event.preventDefault();
  }
};
