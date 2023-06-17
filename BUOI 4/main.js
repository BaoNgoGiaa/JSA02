localStorage.clear();
// xoa localstorage
localStorage.setItem('name','bao',);

let student= {
    namee: "Bao",
    age: "14",
}
localStorage.setItem('student', JSON.stringify(student));
let nam =localStorage.getItem("name");
    console.log(nam)
let i= JSON.parse (localStorage.setItem('student'));
console.log(student)
console.log(typeofstudent)