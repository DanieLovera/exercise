import {useState} from "react";

function EditTask(props) {
    const [description, setDescription] = useState(props.task.description);

    function handleChange(event) {
        setDescription(event.target.value)
    }

    const handleSave = (task) => () => {
        task.description = description;
        props.update(task);
        props.cancel();
    }

    function handleCancel() {
        props.cancel();
    }

    return (
        <div>
            <input
                type="text"
                value={description}
                style={
                    {
                        height: 30,
                        width: '50%',
                        borderWidth: 1,
                        borderRadius: 8
                    }
                }
                onChange={handleChange}
            />
            <button onClick={handleSave(props.task)}>
                Save
            </button>
            <button onClick={handleCancel}>
                Cancel
            </button>
        </div>

    );

}

export default EditTask;
