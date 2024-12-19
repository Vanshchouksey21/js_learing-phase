let std = {
    name:"vansh",
    age:19,
    city:"bhopal",
    wlm: function(){
        console.log(`welcome to india ${this.name}  `);
       
        
    },
    fruits:["apple","banana","mango"]
}
console.log(std.fruits[2])
console.log(std);
console.log(std.age);
std.mail="Vanshchouksey2175@mail.com"
// delete std.name;
console.log(std);
std.wlm();
