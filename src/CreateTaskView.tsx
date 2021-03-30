import React, {useState} from 'react';
import {Button, Col, FormControl, Row} from 'react-bootstrap'
import ITask from "./ITask";
import {TaskStore} from "./TaskStore";
import {runInAction} from "mobx";
import {observer} from "mobx-react";

interface IAddTaskProps {
    store: TaskStore
}

const CreateTaskView: React.FC<IAddTaskProps> = ({store}: IAddTaskProps) => {

    const [input, setInput] = useState("");

    const addTask = () => {

        let taskID = Math.floor( Math.random() * 10000 );

        console.log(taskID)

        let task: ITask = {id: taskID, name: input, status: "active"}

        runInAction(() => {
            store.tasks.push(task)
            setInput("")
        })
    }

    return (

        <Row className="align-items-center mb-3 pb-3 border-bottom">
            <Col md={3}>

                <FormControl placeholder="New task name" value={input} onChange={e => setInput(e.target.value)}/>

            </Col>

            <Col md={3}>

                <Button variant="primary"  onClick={addTask}>
                    Add task
                </Button>
            </Col>

        </Row>

    );
}

export default CreateTaskView
