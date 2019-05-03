
const addButton = document.getElementById("add-btn");
const userInput = document.getElementById("user-input");
const doneAll = document.getElementById("done-all");
const deleteAll = document.getElementById("delete-all");
const undoneAll = document.getElementById("undone-all");
const taskContent = document.getElementById("task-content");
const buttonsContainer = document.getElementById("buttons-container");


function toDo() {
    event.preventDefault();
    //validação do input do usuário
    if (userInput.value.length == 0 || userInput.value.replace(/\s+/g, '').length == 0) {
        alert("Digite um valor válido!");
        return;
    };
    //adiciona link para deletar individualmente a tarefa
    const deleteTask = document.createElement("img");
    deleteTask.setAttribute("src", "./assets/img/close.png");
    deleteTask.setAttribute("class", "delete__icon")

    //adiciona tag li com a tarefa na lista 
    let task = document.createElement("li");
    task.innerHTML = userInput.value;

    //adiciona deleteTask na tarefa da lista 
    task.appendChild(deleteTask);
    taskContent.appendChild(task);
    task.setAttribute("class", "task__add");
    buttonsContainer.style.display = "flex";
    undoneAll.style.display = "none";
    doneAll.style.display = "block";
    // reseta o input 
    userInput.value = "";

    // funcão para dar check nas tarefas
    function doneTask() {
        task.classList.add("task__add--done");
    };

    //verifica se todas as tarefas estão check
    function isCheck() {
        
        let taskList = document.querySelectorAll(".task__add");
        return Array.from(taskList).filter(array => array.classList.contains("task__add--done")).length == taskList.length;
    };

    //evento para dar check nas tarefass
    task.addEventListener("click", function () {
        if (task.classList.contains("task__add--done")) {
            task.classList.remove("task__add--done");
        } else if (task.classList.contains("task__add--undone")) {
            task.classList.remove("task__add--undone");
            doneTask();
        } else {
            doneTask();
        }

        
        if (isCheck()) {
            undoneAll.style.display = "block";
            doneAll.style.display = "none";
            
        } else {
            undoneAll.style.display = "none";
            doneAll.style.display = "block";
        };
        
    });

    // evento para excluir tarefa
    deleteTask.addEventListener("click", function () {
        task.remove();
    });

    // evento para concluir todas as tarefas
    doneAll.addEventListener("click", function () {
        task.classList.remove("task__add--undone");
        doneTask();
        doneAll.style.display = "none";
        undoneAll.style.display = "block";
    });

    //evento para desfazer seleção
    undoneAll.addEventListener("click", function () {
        task.classList.remove("task__add--done");
        task.classList.add("task__add--undone");
        doneAll.style.display = "block";
        undoneAll.style.display = "none";


    });

    // evento para excluir todas as tarefas
    deleteAll.addEventListener("click", function () {
        task.remove();
        buttonsContainer.style.display = "none";
    });
    
};

// adiciona evento para receber input do usuário pela tecla enter
window.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        toDo();
    };
});

// adiciona evento no botão add
addButton.addEventListener("click", toDo);


