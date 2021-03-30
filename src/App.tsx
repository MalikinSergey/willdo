import React, {useMemo} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import {TaskView} from "./TaskView";
import CreateTaskView from "./CreateTaskView";
import {observer} from "mobx-react";
import {TaskStore} from "./TaskStore";

const App: React.FC = observer(() => {

    const tasksStore = useMemo(() => new TaskStore(), []);

    return (
        <div className="App">
            <Container className="mt-5">

                <Row>
                    <Col className="p-3 mb-5 text-center h1 text-light bg-dark">willdoo task manager</Col>
                </Row>

                <Row>
                    <Col className="h2 mb-3">Your tasks</Col>
                </Row>

                {!tasksStore.tasks.length &&
                <Row className="mb-3">
                  <Col className="font-italic">No tasks at this moment</Col>
                </Row>
                }

                {tasksStore.tasks.map((task, key) =>
                    <TaskView task={task} key={key}/>
                )}

                <CreateTaskView store={tasksStore}/>

            </Container>
        </div>
    );
})

export default App;
