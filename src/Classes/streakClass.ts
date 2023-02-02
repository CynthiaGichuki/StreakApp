import streakinterface from "../Interfaces/streakInterface";
import taskClass from "./taskClass";

class streakClass implements streakinterface {
    StreakArray: taskClass[];

    constructor() {
        this.StreakArray = []

    }
}
export default streakClass;