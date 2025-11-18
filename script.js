const nameBox=document.getElementById("nameInput");
console.log(nameBox);

const ageBox=document.getElementById("ageInput");
console.log(ageBox);

const favoriteColor =document.getElementById("colorInput");
console.log(favoriteColor);

const favoritePet=document.querySelectorAll("input[type='radio']");
console.log(favoritePet);

const yourHobbies= document.querySelectorAll("input[type='checkbox']");
console.log(yourHobbies);

const profileButton=document.getElementById("submitBtn");
console.log(profileButton);

profileButton.addEventListener("click",change);
function change(){
console.log(yourHobbies);
}

