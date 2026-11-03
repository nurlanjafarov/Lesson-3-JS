// let person = {
//     firstName: "John",
//     lastName: "Johnlu",
//     age: 50,
//     score: 98.7,
//     cars: [
//         { vendor: "Land Rover", model: "Discovery" },
//         { vendor: "Mercedes", model: "G-63" },
//         { vendor: "BMW", model: "M3" },
//     ],
//     Fullname: function () {
//         return this.firstName + "  " + this.lastName;
//     }
// };

// person.firstName = "Leyla";
// person.lastName = "Mammadli";
// // console.log(person.firstName);
// console.log(person["age"]);

// person.cars.push({ vendor: "BMW", model: "X5" });

// // person.cars.forEach((car)=>{
// //     console.log(car);
// // })

// let content = "";

// for (let key in person) {
//     if (key != "cars" && key != "Fullname") {
//         content += `<li> ${key} - ${person[key]} </li>`
//     }
//     else if (key == "cars") {
//         let cars = person.cars;
//         content += `<li>
//         <h1>Cars</h1>
//         </li>`
//         cars.forEach((car) => {
//             content += `
//             <li>
//                 ${car.model} - ${car.vendor}
//             </li>
//             `
//         })
//     }
// }
// const infoElement = document.getElementById("info");
// infoElement.innerHTML = content;

// function ChangeAllHeaders(){
//     const headers=document.getElementsByTagName("h1");
//     for (let i = 0; i < headers.length; i++) {
//         const element = headers[i];
//         element.style.color="deeppink";
//     }

//     const specs=document.getElementsByClassName("spec");
//     for (let i = 0; i < specs.length; i++) {
//         const element = specs[i];
//         element.style.borderBottom="2px solid black";
//     }
// }

// ChangeAllHeaders();


//Query Selector

// const singleHeader = document.querySelector("#header-1");

// singleHeader.style.fontSize = "4em";
// singleHeader.style.width = "200px";
// singleHeader.style.backgroundColor = "red";

// const titles = document.querySelectorAll(".spec");

// for (let i = 0; i < titles.length; i++) {
//     const element = titles[i];
//     element.style.width = "150px";
//     element.style.boxShadow = "0 0 10px 5px springgreen";
// }

// const headers=document.querySelectorAll("h1");
// for(let i=0;i<headers.length;i++){
//     const element=headers[i];
//     element.style.width="150px";
//     element.style.boxShadow='0 0 10px 5px deeppink';
// }

const section = document.querySelector("#s-1");

let id = 1;

function ChangeUI() {
    let element = document.createElement("h1");
    element.innerHTML = "Step IT";
    element.id = `i-${id++}`;

    // section.before(element);
    // section.after(element);
    section.append(element);
    // section.prepend(element);

    element.addEventListener("mousedown", ShowMessage);
}

function ShowMessage(e) {
    const element=e.target;
    element.style.color="red";
    // alert("Test");
}

function RemoveEvents(){
    const elements=section.children;
    for(let i=0;i<elements.length;i++){
        const item=elements[i];
        item.removeEventListener("mousedown", ShowMessage);
    }
}


function ChangeItems(){
    const first = section.firstElementChild;
    const last = section.lastElementChild;

    first.style.color = "springgreen";
    last.style.color = "deepskyblue";


    first.nextElementSibling.style.color = "deeppink";
    last.previousElementSibling.style.color = "gray";

} //

