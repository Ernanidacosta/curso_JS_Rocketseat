var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var tarefas = [
    'estudar cloud functions',
    'estudar firebase',
    'estudar cloud run - knative'
];

function renderTarefas(){
    for (tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var tarefasText = document.createTextNode(tarefa);

        tarefaElement.appendChild(tarefasText);
        listElement.appendChild(tarefaElement);
    }
}
renderTarefas();