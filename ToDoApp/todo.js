var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.todoTasks = [];
        this.taskInputHTML = document.getElementById("taskInput");
        this.todoItemsHTML = document.getElementById("todoItems");
    }
    TodoApp.prototype.addNewTask = function (taskText) {
        var newTask = {
            id: (new Date()).getTime(),
            task: taskText,
            completed: false
        };
        this.todoTasks.push(newTask);
        this.renderTasks();
        this.taskInputHTML.value = '';
    };
    TodoApp.prototype.val = function () {
        if (this.taskInputHTML.value == "") {
            return false;
        }
        else {
            return true;
        }
    };
    TodoApp.prototype.markCompleted = function (id) {
        var targetTask = this.todoTasks.filter(function (el) {
            return el.id === id;
        })[0];
        if (targetTask) {
            targetTask.completed = !targetTask.completed;
        }
        // TODO: send alert for invalid id
        this.renderTasks();
    };
    TodoApp.prototype.removeTask = function (id) {
        this.todoTasks = this.todoTasks.filter(function (el) {
            return el.id !== id;
        });
        this.renderTasks();
    };
    TodoApp.prototype.renderTasks = function () {
        var _this = this;
        /*
        convert the ts array into html list
        */
        this.todoItemsHTML.innerHTML = '';
        this.todoTasks.forEach(function (todoTask) {
            _this.todoItemsHTML.innerHTML += "\n                <li class=\"".concat(todoTask.completed ? 'completed' : 'notcompleted', "\">\n                    ").concat(todoTask.task, "\n                    <button onclick=\"todoApp.markCompleted(").concat(todoTask.id, ")\"><i class=\"bi bi-check\"></i></button>\n                    <button onclick=\"todoApp.removeTask(").concat(todoTask.id, ")\"><i class=\"bi bi-x-lg\"></i></button>\n                </li>\n            ");
        });
    };
    return TodoApp;
}());
var todoApp = new TodoApp();
// interface todoTask {
//     id: number,
//     task: string,
//     completed: boolean
// }
// class TodoApp {
//     todoTasks: todoTask[]
//     taskInputHTML: HTMLInputElement
//     todoItemsHTML: HTMLInputElement
//     constructor() {
//         this.taskInputHTML = document.getElementById("taskInput") as HTMLInputElement
//         this.todoItemsHTML = document.getElementById("todoItems") as HTMLInputElement
//     }
//     addNewTask(taskText: string) {
//         console.log(taskText);
//         const newTask:todoTask = {
//             id: 0,
//             task: taskText,
//             completed: false
//         }
//         console.log(newTask);
//         this.todoTasks.push(newTask)
//         this.renderTasks()
//         this.taskInputHTML.value = ''
//     }
//     markCompleted(id: number) {
//         const targetTask = this.todoTasks.filter((el) => {
//             return el.id === id
//         })[0]
//         if (targetTask) {
//             targetTask.completed = true
//         }
//         this.renderTasks()
//         //ToDO:send alert for invalid id
//     }
//     removeTask(id: number) {
//         this.todoTasks = this.todoTasks.filter((el) => {
//             return el.id !== id
//         })
//     }
//     renderTasks(){
//         /*
//         convert the ts array into html list
//         */
//         this.todoItemsHTML.innerHTML = ''
//         this.todoTasks.forEach((todoTask: todoTask)=>{
//             this.todoItemsHTML.innerHTML += `
//                 <li class="${todoTask.completed? 'completed': 'notcompleted'}">
//                     ${todoTask.task}
//                     <button onclick="todoApp.markCompleted(${todoTask.id})">Done</button>
//                     <button onclick="todoApp.removeTask(${todoTask.id})">Delete</button>
//                 </li>
//             `
//         })
//     }
// }
// this.todoApp=new TodoApp()
