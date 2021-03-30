import {IObservableArray, makeAutoObservable, observable, runInAction, toJS} from "mobx";
import ITask from "./ITask";


export class TaskStore {

    constructor() {
        makeAutoObservable(this);

        (window as any).tasks = this.tasks;


    }

    setTasksFromArray = (tasks: ITask[]) => {
        this.tasks.replace(tasks)
    }

    tasks: IObservableArray<ITask> = observable.array([]);


}
