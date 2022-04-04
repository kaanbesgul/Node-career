const person = {
    name:"Kaan",
    age:25,

    greet(){
        console.log("Hi, i am " + this.name + " and i am "+this.age+" years old" )
    }
}

const printName = (personData) => {
    console.log(personData.name)
}

printName(person);