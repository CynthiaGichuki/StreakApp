class taskClass {
    constructor(taskname, taskimage, taskdate) {
        this.taskname = taskname;
        this.taskimage = taskimage;
        this.taskdate = taskdate;
    }
    generateID() {
        return Math.floor(Math.random() * 100);
    }
}
export default taskClass;
