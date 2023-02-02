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
    activities.innerHTML = '';
    streakObject.StreakArray.map(task => {
        let divActivitiesDisplay = `
        <div class="cards" id="cards">
        <img
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
        <p>Start Date</p>
        <p>Name</p>
    </div>`;
        activities.innerHTML += divActivitiesDisplay;
    });
}
function checkActivity() {
    // if(){
    // }
}
