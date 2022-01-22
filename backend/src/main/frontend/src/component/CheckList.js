import '../App.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import EditTask from "./EditTask";

function CheckList(props) {

    const [editModalState, setEditModalState] = useState(false);
    const [editableTask, setEditableTask] = useState({});

    const handleToggle = (task) => () => {
        task.state = (task.state === "COMPLETED") ? "UNCOMPLETED" : "COMPLETED";
        props.update(task);
    }

    const handleDelete = (task) => () => {
        props.delete(task);
    }

    const handleEdit = (task) => () => {
        setEditableTask(task);
        openEditModal();
    }

    function openEditModal(){
        setEditModalState(true);
    }

    function closeEditModal(){
        setEditModalState(false);
    }

    return (
        <>
        <div>
            {props.title}
            <List sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
                {props.tasks.map((task, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                        <ListItem
                            key={index}
                            disablePadding
                        >
                            <ListItemButton role={undefined} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={task.state === "COMPLETED"}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        onClick={handleToggle(task)}
                                    />
                                </ListItemIcon>

                                <ListItemText id={labelId} primary={task.description} />

                                <ListItemIcon>
                                    <button onClick={handleEdit(task)}>Edit</button>
                                    <button onClick={handleDelete(task)}>Delete</button>
                                </ListItemIcon>

                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
        <div>
                <Modal size="lg" show={editModalState} onHide={closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editing Task: "{editableTask.description}"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditTask
                            task={editableTask}
                            update={props.update}
                            cancel={closeEditModal}
                        />
                    </Modal.Body>
                </Modal>
        </div>
        </>
    );
}

export default CheckList;
