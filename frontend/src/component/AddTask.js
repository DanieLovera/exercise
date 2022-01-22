import {useState} from "react";

function AddTask(props) {

    const [description, setDescription] = useState(" ");

    function handleChange(event) {
        setDescription(event.target.value)
    }

    function handleClick() {
        console.log(description)
        const task = {
            description: `${description}`,
            state: "UNCOMPLETED",
        }
        props.add(task);
        setDescription("");
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
            <button onClick={handleClick}>
                Add
            </button>
        </div>
    );
}

export default AddTask;
