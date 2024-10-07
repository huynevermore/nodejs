const yargs = require("yargs")
const fs = require("fs") 
const {readAllTasks, createTask} = require('./model/task')
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
    handler:()=>{
        console.log('update')
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
    handler:()=>{
        console.log('delete')
    }
})

// Lưu các lệnh vừa tạo
yargs.parse();


