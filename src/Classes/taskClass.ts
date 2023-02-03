import taskInterface from "../Interfaces/taskInterface";

class taskClass implements taskInterface {
    taskname: String;
    taskimage: String;
    taskdate: Date;
    // id = this.generateID()
    constructor(taskname: String, taskimage: String, taskdate: Date) {
        this.taskname = taskname
        this.taskimage = taskimage
        this.taskdate = taskdate
        
    }

    generateID() {
        return Math.floor(Math.random() * 100)
    }

}
export default taskClass;

