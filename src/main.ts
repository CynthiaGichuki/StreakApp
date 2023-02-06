import taskClass from "./Classes/taskClass.js";
import streakClass from "./Classes/streakClass.js";

const addBtn = document.querySelector('#addBtn')! as HTMLParagraphElement;
const welcome = document.getElementById('welcome')! as HTMLDivElement;
const tasks = document.getElementById('tasks')! as HTMLDivElement;
const closeBtn = document.getElementById('closeBtn')! as HTMLParagraphElement;
const nameInput = document.querySelector(".name") as HTMLInputElement;
const imageInput = document.querySelector(".image") as HTMLInputElement;
const dateInput = document.querySelector(".date") as HTMLInputElement;
const taskBtn = document.querySelector('.addTaskBtn') as HTMLButtonElement;
const inputs = document.getElementById('inputs')! as HTMLDivElement;
const cards = document.querySelector('.cards') as HTMLDivElement;
const activities = document.querySelector('#activitiesDiv') as HTMLDivElement;
const activitiesText = document.querySelector('#activitiesText') as HTMLDivElement;
const modal = document.querySelector('#modal') as HTMLDivElement;
const modalcontent = document.querySelector('.modal-content') as HTMLDivElement;


modal.style.display = "none";



const nameIn = nameInput.value
const imageIn = imageInput.value
const dateIn = dateInput.value


let streakObject = new streakClass()
// console.log(taskObject);

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    welcome.style.display = "none";
    tasks.style.display = "flex";
    // alert('hi')

});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.style.display = "none";
    welcome.style.display = "flex";
});

taskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidation();

});


function checkValidation() {

    // console.log("HELLO");
    const nameIn = nameInput.value
    const imageIn = imageInput.value
    const dateIn = dateInput.value

    if (nameIn == '' || imageIn == '' || dateIn == '') {
        const p = document.createElement('p')
        p.textContent = 'PLEASE FILL IN ALL FIELDS!'
        p.style.color = '#ff7f50'
        p.style.marginBottom = '20px'
        p.style.marginTop = '20px'
        p.id = 'error-message'
        inputs.insertAdjacentElement('afterbegin', p)

        setTimeout(() => {
            p.style.display = 'none'
        }, 5000)

    }
    else {

        let taskObject = new taskClass(nameIn, imageIn, new Date(dateIn));
        streakObject.StreakArray.push(taskObject)
        displayTask()

    }

}


function displayTask() {

    // console.log("asad");
    activities.innerHTML = '';

    activitiesText.innerHTML = `<p>Activities</p>`
    streakObject.StreakArray.map(task => {
        let divActivitiesDisplay =

            `<div class="cards" id="cards">
        <img
            src="${task.taskimage}">
        <p>${task.taskdate}</p>
        <p>${task.taskname}</p>
    </div>`
        activities.innerHTML += divActivitiesDisplay;

    })

    nameInput.value = '';
    imageInput.value = '';
    dateInput.value = '';

    const cards = document.getElementById('cards') as HTMLDivElement

    cards.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
        displayModal();




    });

}

function displayModal() {

    modal.innerHTML = '';
    streakObject.StreakArray.map(task => {
        let getModalActivity =

            `<div class="modals" id="cards">
        <img
            src="${task.taskimage}">
        <p>${task.taskdate}</p>
        <p>${task.taskname}</p>
        <button id ="btnClose">CLOSE</button>
        <button>DELETE</button>
    </div>`
        modal.innerHTML += getModalActivity;
    })

    const btnClose = document.getElementById('btnClose') as HTMLDivElement

    btnClose.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
    });

}




closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.style.display = "none";
    welcome.style.display = "flex";
});




// function checkActivity() {


// }















