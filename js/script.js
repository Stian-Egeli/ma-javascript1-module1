const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();

//Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const pElements = document.querySelectorAll("p");

for (let i = 0; i < pElements.length; i++){
    pElements[i].style.color = "red";
}

//Question 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function animal (list){
    for (let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

animal(cats);

//Question 8

function createCats(cats){

    let html = "";

    for (let i = 0; i < cats.length; i++){
        let catAge = "Age unknow";

        if (cats[i].age){
            catAge = cats[i].age;
        }
        html += `<div>
                <h5>${cats[i].name}</h5>
                <p>${catAge}</p>`
    }
    return html
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;

