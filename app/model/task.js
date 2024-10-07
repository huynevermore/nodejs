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

module.exports = { readAllTasks, createTask };
