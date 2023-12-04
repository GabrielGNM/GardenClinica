document.addEventListener('DOMContentLoaded', function() {
    // Carregando dados do arquivo JSON
    fetch('seuarquivo.json')
        .then(response => response.json())
        .then(data => {
            // Exibindo dados no contêiner HTML
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = '<h2>Dados do JSON:</h2>';
            
            // Iterando sobre os dados e adicionando ao contêiner
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    dataContainer.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
                }
            }
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
});
