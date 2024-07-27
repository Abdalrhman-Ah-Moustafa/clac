var myInputUser = document.querySelector(".userNameInput");
var myLableUser = document.querySelector(".UserNameLable");
var myInputpasowrd = document.querySelector(".pasowrdInput");
var myPasowrdUser = document.querySelector(".pasowrdLable");
var myCheckbox = document.querySelector(".checkbox");
var confarmpas = document.querySelector(".ConfarmPasowrd");
var pasLable = document.querySelector(".pasLable");



function login() {
  if (
    myInputUser.value === "" ||                 
    myInputUser.value.length < 3 ||               //for input user name
    !isNaN(myInputUser.value)
  ) {
    myLableUser.innerHTML = "Invalid User Name";      //for lable user name
    myLableUser.style.color = "red";
    return false;
  } else if (
    myInputpasowrd.value === "" ||
    myInputpasowrd.value.length < 6 ||               //for input pasowrd          
    myInputpasowrd.value.includes("@") === false
  ) {
    reset();
    myPasowrdUser.innerHTML = "Invalid Your Pasword";         //for lable pasword
    myPasowrdUser.style.color = "red";
    return false;
  } else if (confarmpas.value !== myInputpasowrd.value) {     //for input confirm pasowrd
    reset();
    pasLable.innerHTML = "The Conferm Pasword Rong";                
    pasLable.style.color = "red";                             //for lable confirm pasowrd

    return false;
  } else {
    reset();
    return true;
  }

}
function reset() {
   myLableUser.innerHTML = "User Name";
   myLableUser.style.color = "black";
    myPasowrdUser.innerHTML = "Pasword"; 
    myPasowrdUser.style.color = "black";
    pasLable.innerHTML = "Conferm Pasword";             
    pasLable.style.color = "black";
}
// console.log(myInputpasowrd);
myCheckbox.addEventListener('click', () => {
      if (myCheckbox.checked == true ) {
        myInputpasowrd.type = "text";
      } else  {
        myInputpasowrd.type = "password";

      }

} )