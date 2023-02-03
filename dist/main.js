import taskClass from "./Classes/taskClass.js";
import streakClass from "./Classes/streakClass.js";
const addBtn = document.querySelector('#addBtn');
const welcome = document.getElementById('welcome');
const tasks = document.getElementById('tasks');
const closeBtn = document.getElementById('closeBtn');
const nameInput = document.querySelector(".name");
const imageInput = document.querySelector(".image");
const dateInput = document.querySelector(".date");
const taskBtn = document.querySelector('.addTaskBtn');
const inputs = document.getElementById('inputs');
const cards = document.querySelector('.cards');
const activities = document.querySelector('#activitiesDiv');
const activitiesText = document.querySelector('#activitiesText');
const modal = document.querySelector('#modal');
const modalcontent = document.querySelector('.modal-content');
modal.style.display = "none";
const nameIn = nameInput.value;
const imageIn = imageInput.value;
const dateIn = dateInput.value;
let streakObject = new streakClass();
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
    const nameIn = nameInput.value;
    const imageIn = imageInput.value;
    const dateIn = dateInput.value;
    if (nameIn == '' || imageIn == '' || dateIn == '') {
        const p = document.createElement('p');
        p.textContent = 'PLEASE FILL IN ALL FIELDS!';
        p.style.color = '#ff7f50';
        p.style.marginBottom = '20px';
        p.style.marginTop = '20px';
        p.id = 'error-message';
        inputs.insertAdjacentElement('afterbegin', p);
        setTimeout(() => {
            p.style.display = 'none';
        }, 5000);
    }
    else {
        let taskObject = new taskClass(nameIn, imageIn, new Date(dateIn));
        streakObject.StreakArray.push(taskObject);
        displayTask();
    }
}
function displayTask() {
    // console.log("asad");
    activities.innerHTML = '';
    activitiesText.innerHTML = `<p>Activities</p>`;
    streakObject.StreakArray.map(task => {
        let divActivitiesDisplay = `<div class="cards" id="cards">
        <img
            src="${task.taskimage}">
        <p>${task.taskdate}</p>
        <p>${task.taskname}</p>
    </div>`;
        activities.innerHTML += divActivitiesDisplay;
    });
    nameInput.value = '';
    imageInput.value = '';
    dateInput.value = '';
    const cards = document.getElementById('cards');
    cards.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
        displayModal();
    });
}
function displayModal() {
    modal.innerHTML = '';
    streakObject.StreakArray.map(task => {
        let getModalActivity = `<div class="modals" id="cards">
        <img
            src="${task.taskimage}">
        <p>${task.taskdate}</p>
        <p>${task.taskname}</p>
        <button>CLOSE</button>
        <button>DELETE</button>
    </div>`;
        modal.innerHTML += getModalActivity;
    });
}
closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.style.display = "none";
    welcome.style.display = "flex";
});
// function checkActivity() {
// }
