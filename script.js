let tarefas = [
    { id: 1, texto: "Beber água", concluida: false },
    { id: 2, texto: "Fazer exercício", concluida: false },
    { id: 4, texto: "Meditar 5 minutos", concluida: false },
    { id: 5, texto: "Estudar pra pré-selção de inglês", concluida: false },
    { id: 6, texto: "Estudar pra prova de química", concluida: false },
    { id: 7, texto: "Sacar dinheiro no banco", concluida: false },
    { id: 8, texto: "Ver as coisas do meu aniversário (14/05)", concluida: false }    
  ];
  
  let filtroAtual = "todas";
  
  function mostrarTarefas() {
    let lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
  
    let tarefasFiltradas = tarefas.filter(function(tarefa) {
      if (filtroAtual === "todas") {
        return true;
      } else if (filtroAtual === "pendentes") {
        return !tarefa.concluida;
      } else if (filtroAtual === "concluidas") {
        return tarefa.concluida;
      }
    });
  
    //pra dxr a tarefa mais recente lá em cima
    tarefasFiltradas = tarefasFiltradas.reverse();
  
    tarefasFiltradas.forEach(function(tarefa) {
      let item = document.createElement("li");
      item.textContent = (tarefa.concluida ? "✅ " : "⬜ ") + tarefa.texto;
      if (tarefa.concluida) {
        item.classList.add("concluida");
      }
      item.onclick = function() {
        alternarConclusao(tarefa.id); //qnd clica, alterna
      };
      lista.appendChild(item);
    });
  }
  
    //estado de conclusao
    function alternarConclusao(id) {
    for (let i = 0; i < tarefas.length; i++) {
      if (tarefas[i].id === id) {
        tarefas[i].concluida = !tarefas[i].concluida;//inverter o estado
      }
    }
    mostrarTarefas(); //atlz
  }
  
  //filtro
  function filtrar(tipo) {
    filtroAtual = tipo;
    mostrarTarefas(); 
  }
  
  //nova tarefa
  function adicionarTarefa() {
    let input = document.getElementById("nova-tarefa");
    let textoTarefa = input.value.trim();
  
    //se o campo n tiver vazio
    if (textoTarefa) {
      let novaTarefa = {
        id: tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1,
        texto: textoTarefa,
        concluida: false
      };
      tarefas.push(novaTarefa); //add nova tarefa ao array
      input.value = ""; 
      mostrarTarefas(); //atualizando the list
    }
  }
  
  //exibindo as tarefas ao carregar the page
  mostrarTarefas();
  