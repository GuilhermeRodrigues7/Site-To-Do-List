const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')


let minhaListadeitens = []



function AdicionarNovaTarefa() {
    const tarefa =  input.value.trim();

    
    if (tarefa === '') {
        alert('O campo de tarefa não pode estar vazio!');
        return; 
    
    }
    
    minhaListadeitens.push({
        tarefa: input.value,
        concluida: false
    })
    
    input.value = ' '

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''
    // ['comprar café','estudar programação']

    minhaListadeitens.forEach((item, posicao) => {

    novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
           <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
           <p>${item.tarefa}</p>
           <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletaritem(${posicao})"> 
        </li>
        
        `
  })

  listacompleta.innerHTML = novaLi

  localStorage.setItem('lista',JSON.stringify(minhaListadeitens))





}

function concluirTarefa(posicao){ 
    minhaListadeitens[posicao].concluida = !minhaListadeitens[posicao].concluida

    mostrarTarefas()

}


function deletaritem(posicao){
    minhaListadeitens.splice(posicao, 1)

    mostrarTarefas()

}

function recarregarTarefas(){
    const tarefasdolocalstorage = localStorage.getItem('lista')

if(tarefasdolocalstorage){
    minhaListadeitens = JSON.parse (tarefasdolocalstorage)
}

    mostrarTarefas()

}

recarregarTarefas()

button.addEventListener('click', AdicionarNovaTarefa)


