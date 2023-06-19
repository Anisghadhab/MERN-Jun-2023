// console.log(hello);
// var hello = 'world';
// // var hello;
// // console.log(hello); undifined
// // hello = "world"

// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// //var needle
// //function test() {
// //     var needle
// //     needle = 'magnet'

// // }
// // needle = 'haystack'
// //test()
// //magnet

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// // var brendan;
// // brendan = 'super cool'   hoisted to the top
// // 'super cool'

// // var food = 'chicken';
// // console.log(food);
// // eat();
// // function eat() {
// //     food = 'half-chicken';
// //     console.log(food);
// //     var food = 'gone';
// // }

// // var food;
// // food = 'chicken';
// // function eat(){
// //     var food;
// //     food = 'gone'
// //     food = 'half-chicken'
// //     console.log(food)
// // }
// // console.log(food)
// //eat();

// //chicken
// //half-chicken

// // mean();
// // console.log(food);
// // var mean = function () {
// //     food = "chicken";
// //     console.log(food);
// //     var food = "fish";
// //     console.log(food);
// // }
// // console.log(food);


// // var mean 
// // mean(); Error : mean is not a function
// // console.log(food);
// // mean = function () {
// //var food
// // food = "chicken"
// // console.log(food)
// //food = "fish"
// //console.log(food)
// // }
// //console.log(food)

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// // var genre
// // console.log(genre)
// // genre = "disco"
// // rewind();
// // function rewind() {
// //var genre
// // genre = "rock"
// //console.log(genre)
// //genre = "rb"
// // console.log(genre)
// // }
// // console.log(genre)

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// function learn() {
//     var dojo
//     dojo = "seattle"
//     console.log(dojo)
//     dojo = "burbank"
//     console.log(dojo)
// }
// dojo = "san jose"
// console.log(dojo)
// learn()
// console.log(dojo);

//san jose
//seattle
//burbank
//san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// } 

