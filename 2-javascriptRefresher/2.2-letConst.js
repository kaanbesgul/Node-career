const name = "Kaan";
let age = 25;
const hasHobbies = true;

age=30;

function summarizeUser(userName,userAge,userHasHobbies){
    return "Name is "+ userName + ", age is " + userAge + " and the user has hobbies:"+ userHasHobbies
}

console.log(summarizeUser(name,age,hasHobbies))