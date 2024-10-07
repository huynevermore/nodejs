const yargs = require("yargs")
const {readAllTasks, createTask, updatdeTask, deleteTask} = require('./model/task')
// Tạo lệnh test
// node app/index.js test
yargs.command({
    command: "test",
    describe: "Chạy test cho chương trình",
    handler: ({...rest}) => {
        console.log("Đã chạy test cho chương trình!", rest);
    },
});

// CRUD

// CREATE
yargs.command({
    command:'create',
    builder:{
        id:{
            type:'string'
        },
        tittle:{
            type:'string'
        },
        description:{
            type:'string'
        }
    },
    handler:(args)=>{
        const {tittle, description} = args;
        createTask(tittle, description)
    }
})

// READ ALL
yargs.command({
    command:'read-all',
    handler:readAllTasks
})

// READ DETAIL node app/index.js read-detail --id='123'
yargs.command({
    command:'read-detail',
    builder:{
        id:{
            type:'string'
        }
    },
    handler:(args)=>{
        const {id}=args;
        console.log('read-detail',id)
    }
})

// UPDATE

yargs.command({
    command:'update',
    builder:{
        tittle:{
            type:'string'
        },
        description:{
            type:'string'
        },
        id:{
            type:'string'
        }
    },
    handler:(args)=>{
        const {tittle, description, id} = args;
        console.log('update')
        updatdeTask(id, tittle, description)
    }
})

// DELETE
yargs.command({
    command:'delete',
    builder:{
        id:{
            type:'string'
        },
    },
    handler:({id})=>{
        deleteTask(id)
    }
})

// Lưu các lệnh vừa tạo
yargs.parse();


