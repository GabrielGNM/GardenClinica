document.addEventListener("DOMContentLoaded", function () {
    var NomeDoBotao = document.getElementById("PowerBiOuEntrarButton");
    var userDataString = sessionStorage.getItem("user");
    if (userDataString) NomeDoBotao.innerText = "Dashboard";

    // Adicionar um manipulador de eventos de clique ao botão
    document.getElementById("PowerBiOuEntrarButton").addEventListener("click", function () {
      // Verificar se o usuário está logado
      if (userDataString) {
        // O usuário está logado, redirecionar para PowerBi.html
        window.location.href = "PowerBi.html";
      } else {
        // O usuário não está logado, redirecionar para Login.html
        window.location.href = "login.html";
      }
    });
  });