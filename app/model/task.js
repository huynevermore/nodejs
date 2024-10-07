const fs = require("fs");  // File system built-in module in Node.js

const readAllTasks = () => {
    const buffer = fs.readFileSync('task.json'); // Reading the file
    const taskString = buffer.toString(); // Converting buffer to string
    const taskJson = JSON.parse(taskString); // Converting string to JSON
    console.log(taskJson);
    return taskJson;
};

const createTask = (title, description) => {
    const newTask = {
        id: Math.random().toString(),
        title,  // Fix typo here
        description,
    };

    let taskList = readAllTasks(); // Read the existing tasks
    console.log(taskList)
    taskList = [...taskList, newTask]; // Append the new task to the task list
    fs.writeFileSync("task.json", JSON.stringify(taskList)); // Write the entire task list back to the file
    return newTask
};


const updatdeTask= (id, title, description)=>{
    let taskList= readAllTasks();
    const index = taskList.findIndex(task => task.id === id);
    if(index!==-1){
        const oldTask = taskList[index];
        const newTask = {
            ...oldTask, title,description
        }
        taskList[index] = newTask;
        console.log(taskList)
        fs.writeFileSync('task.json', JSON.stringify(taskList))
    }
}

const deleteTask = (id) => {
    const taskList = readAllTasks();
    const taskFilter=taskList.filter((task) => task.id !== id)
    fs.writeFileSync('task.json', JSON.stringify(taskFilter))
}
module.exports = { readAllTasks, createTask, updatdeTask, deleteTask };
