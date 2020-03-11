var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

function renderTarefas(){
    listElement.innerHTML = '';

    for (tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var tarefasText = document.createTextNode(tarefa);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'deleteTarefas('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        
        tarefaElement.appendChild(tarefasText);
        tarefaElement.appendChild(linkElement);
        listElement.appendChild(tarefaElement);
    }
}
renderTarefas();

function addTarefa(){
    var tarefasText = inputElement.value;

    tarefas.push(tarefasText);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

buttonElement.onclick = addTarefa;

function deleteTarefas(pos){
    tarefas.splice(pos, 1);
    renderTarefas();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
}