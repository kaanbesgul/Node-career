const person = {
    name:"Kaan",
    age:25,

    greet(){
        console.log("Hi, i am " + this.name + " and i am "+this.age+" years old" )
    }
}

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ["Sports","Cooking"]


const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray =(...args) => {
    return args
}

console.log(toArray(1,2,3))
