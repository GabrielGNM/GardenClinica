var dados = {
    "mediaDescartePorAtendimento": {
      "Limpeza dental": 2.875,
      "Implantes dentários": 1.79,
      "Extração dentária": 3.92,
      "Facetas dentárias (lentes de contato dental)": 4.69,
      "Tratamento de canal": 1.91,
      "Obturação dentária": 8.07
    },
    "top5AgendamentosPorFaixaEtaria": {
      "Adulto": [
        "Limpeza dental"
      ],
      "Idoso": [
        "Extração dentária",
        "Facetas dentárias (lentes de contato dental)"
      ],
      "Criança": [
        "Tratamento de canal",
        "Obturação dentária",
        "Implantes dentários",
        "Limpeza dental",
        "Facetas dentárias (lentes de contato dental)"
      ]
    },
    "procedimentosMaisPedidosPorFaixaEtaria": {
      "Adulto": "Limpeza dental",
      "Idoso": "Extração dentária",
      "Criança": "Tratamento de canal"
    }
  };
  
  // Acessando dados da média de descarte por atendimento
  var mediaDescarteLimpezaDental = dados.mediaDescartePorAtendimento["Limpeza dental"];
  console.log("Média de descarte para Limpeza dental:", mediaDescarteLimpezaDental);
  
  // Acessando dados dos top 5 agendamentos por faixa etária
  var agendamentosCrianca = dados.top5AgendamentosPorFaixaEtaria["Criança"];
  console.log("Top 5 agendamentos para Criança:", agendamentosCrianca);
  
  // Acessando dados dos procedimentos mais pedidos por faixa etária
  var procedimentoAdulto = dados.procedimentosMaisPedidosPorFaixaEtaria["Adulto"];
  console.log("Procedimento mais pedido para Adulto:", procedimentoAdulto);