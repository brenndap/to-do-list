
const add = document.getElementById("add");
const userInput = document.getElementById("user-input");
const doneAll = document.getElementById("done-select");
const deleteAll = document.getElementById("delete-select");
const taskContent = document.getElementById("task-content");
const buttonsContainer = document.getElementById("buttons-container");


// evento para adicionar tarefa
add.addEventListener("click", function(event){ 
    event.preventDefault();
    //validação do input do usuário
    if(userInput.value.length == 0 || userInput.value.replace(/\s+/g, '').length == 0){
        alert("Digite um valor válido!");
        return;
    };
    //adiciona link para deletar individualmente a tarefa
    const deleteTask = document.createElement("a");
    deleteTask.innerHTML = "x";
    deleteTask.setAttribute("href", "#");
    deleteTask.style.textDecoration = "none";
    deleteTask.style.color = "#000";

    //adiciona tag li com a tarefa na lista 
    let task = document.createElement("li");
    task.innerHTML = userInput.value;
    //adiciona deleteTask na tarefa da lista 
    task.appendChild(deleteTask);
    taskContent.appendChild(task);
    task.setAttribute("draggable", "true");
    buttonsContainer.style.display = "block";
    // reseta o input 
    userInput.value = "";
    // evento para poder dar check nas tarefas
    task.addEventListener("click", function(){
        task.style.textDecoration = "line-through";
        task.style.color = "#aeaeae";
    });

    

    // evento para excluir tarefa
    deleteTask.addEventListener("click", function(){
        task.remove();
    })
    // evento para concluir todas as tarefas
    doneAll.addEventListener("click", function(){
        task.style.textDecoration = "line-through";
        task.style.color = "#aeaeae";
    });
    // evento para excluir todas as tarefas
    deleteAll.addEventListener("click", function(){
        task.remove();
    });


   
});

