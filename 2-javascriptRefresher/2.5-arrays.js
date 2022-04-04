const person = {
    name:"Kaan",
    age:25,

    greet(){
        console.log("Hi, i am " + this.name + " and i am "+this.age+" years old" )
    }
}

const hobbies = ["Sports","Cooking"]

/*

for(let hobby of hobbies){
    console.log(hobby)
}

*/

console.log(hobbies.map(hobby => "Hobby: "+ hobby));
