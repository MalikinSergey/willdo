import React from 'react';
import {Button, Col, Row} from 'react-bootstrap'
import ITask from "./ITask";
import {runInAction} from "mobx";
import {observer} from "mobx-react";

interface ITaskComponentProps {
    task: ITask
}

export const TaskView: React.FC<ITaskComponentProps> = observer(({task}: ITaskComponentProps) => {

    const changeTaskStatus = (task: ITask) => {


        runInAction(() => {

            if (task.status === 'hold') {
                task.status = 'active'
            } else {
                task.status = 'hold'
            }

        })

    }

    return (

        <Row className="align-items-center mb-3 pb-3 border-bottom">
            <Col md={3}>
                {task.name}
            </Col>

            <Col md={2}>
                <Button
                    size="sm" onClick={() => {
                    changeTaskStatus(task)
                }} variant={task.status === 'active' ? 'success' : 'warning'}
                >{task.status}</Button>
            </Col>
        </Row>

    );
})

