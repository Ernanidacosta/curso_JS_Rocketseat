var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var tarefas = [
    'estudar cloud functions',
    'estudar firebase',
    'estudar cloud run - knative'
];

function renderTarefas(){
    listElement.innerHTML = '';

    for (tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var tarefasText = document.createTextNode(tarefa);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

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
}

buttonElement.onclick = addTarefa;