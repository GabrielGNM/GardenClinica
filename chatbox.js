  // Array para armazenar as mensagens
  var mensagens = [
    { texto: 'Olá! Seja bem-vindo(a) à Clínica Garden! Gostaria de realizar um agendamento?', classe: 'mensagem-recebida' }
];

// Função para exibir as mensagens na caixa de conversa
function exibirMensagens() {
    var conversa = document.getElementById('conversa');
    conversa.innerHTML = ''; // Limpa a caixa de conversa

    mensagens.forEach(function (mensagem) {
        var mensagemDiv = document.createElement('div');
        mensagemDiv.className = 'mensagem ' + mensagem.classe;
        mensagemDiv.textContent = mensagem.texto;
        conversa.appendChild(mensagemDiv);
    });

    // Rola a caixa de conversa para o final
    conversa.scrollTop = conversa.scrollHeight;
}

// Função para enviar uma mensagem
function enviarMensagem() {
    var mensagemInput = document.getElementById('mensagem-input');
    var mensagemTexto = mensagemInput.value.trim();

    if (mensagemTexto !== '') {
        // Adiciona a mensagem enviada pelo usuário ao array
        mensagens.push({ texto: mensagemTexto, classe: 'mensagem-usuario' });

        // Simula uma resposta automática
        mensagens.push({ texto: 'Entendi. Para começar, preciso que me passe alguns dados. ', classe: 'mensagem-recebida' });

        // Exibe as mensagens na caixa de conversa
        exibirMensagens();

        // Limpa a caixa de entrada
        mensagemInput.value = '';
    }
}

// Adiciona um ouvinte de evento para o botão
document.getElementById('agendar-consulta-btn').addEventListener('click', function() {
    // Mostra a caixa de diálogo (modal) ao clicar no botão
    document.getElementById('chatbox-modal').style.display = 'block';
    document.getElementById('agendar-consulta-btn').style.display = 'none';

    // Exibe as mensagens na caixa de conversa ao abrir o chatbox
    exibirMensagens();
});

// Adiciona um ouvinte de evento para fechar a caixa de diálogo (modal)
document.getElementById('fechar-chatbox').addEventListener('click', function() {
    // Fecha a caixa de diálogo (modal) ao clicar no botão de fechar
    document.getElementById('chatbox-modal').style.display = 'none';
    document.getElementById('agendar-consulta-btn').style.display = 'block';
});