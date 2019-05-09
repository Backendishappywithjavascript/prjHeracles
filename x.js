//SALA 5 - EDIFICAÇÕES  --------------------------------------------//
			/*PLACA*/
		var placaDialogoParteUm = new DialogoParte(`PLANEJAMENTO.
	Atua na construção civil como uma importante ferramenta no gerenciamento de empresas para coordenar, orientar e controlar as atividades decorrentes de uma obra.
PRESSIONE "E" PARA AVANÇAR...`, null);	
		var placaDialogoParteDois = new DialogoParte(`BRASIL, OH CÉUS.
	O cenário atual da construção no Brasil mostra que a maioria das empresas ou não fazem o planejamento de suas obras ou o fazem de maneira inadequada.
PRESSIONE "E" PARA SAIR...`, null)
		var placaDialogos = new Array(placaDialogoParteUm, placaDialogoParteDois); 
		var placaDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', placaDialogos);
		
		
			/*SACO DE CIMENTO*/
		var cimentoParteUm = new DialogoParte(`PROJETO.
	O projeto é o planejamento gráfico visual feito com base no levantamento de diversas informações coletadas.
PRESSIONE "E" PARA AVANÇAR...`, null)	
		var cimentoParteDois = new DialogoParte(`INFORMAÇÕES.
	Essas informações têm por objetivo refletir as necessidades e condicionantes atuantes em uma determinada obra.
PRESSIONE "E" PARA AVANÇAR...`, null)
		var cimentoParteTres = new DialogoParte(`PROFISSIONAL.
	O profissional da área elabora os projetos com sabedoria e entendimento dos requisitos pedidos e das normas necessárias.
PRESSIONE "E" PARA SAIR...`, null)
		var cimentoDialogos = new Array(cimentoParteUm, cimentoParteDois, cimentoParteTres); 
		var cimentoDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/tv.png', cimentoDialogos);
		
		
			/*LOUSA*/
		var lousaDialogoParteUm = new DialogoParte(`TÉCNICO.
	O técnico em edificações deve lidar com diversas questões simultâneas em todas as etapas de uma obra, desta maneira é fundamental saber delegar e compreender a fundo todos os aspectos relativos á execução de obras, lidando com as etapas e os processos construtivos.
PRESSIONE "E" PARA SAIR...`, null);	
		var lousaDialogos = new Array(lousaDialogoParteUm); 
		var lousaDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', lousaDialogos);
		
		
			
			/*PROFESSOR*/
		var professoraEdfDialogoParteUm = new DialogoParte(`Olá, agora que você adquiriu na arte da construção civil, responda algumas questões.`, null);	
		
			//QUESTÕES
			//RH
		var perguntaEdfUmAlternativaUm = 'CERTO.';	
		var perguntaEdfUmAlternativaDois = 'ERRADO.';	
		var perguntaEdfUmAlternativas = new Array(perguntaEdfUmAlternativaUm, perguntaEdfUmAlternativaDois);
		
		var perguntaEdfUm = new Question(perguntaEdfUmAlternativas, 1);
		
			//MARKETING
		var perguntaEdfDoisAlternativaUm = 'é uma ferramenta para gerenciar as atividades de uma obra.';	
		var perguntaEdfDoisAlternativaDois = 'Não se faz necessário na maioria das obras.';	
		var perguntaEdfDoisAlternativaTres = 'O Brasil sempre realiza planejamentos impecáveis em suas obras.';	
		var perguntaEdfDoisAlternativaQuatro = 'é utilizado, apenas, na construção de atrações turísticas, tais como parquinhos.';	
		var perguntaEdfDoisAlternativas = new Array(perguntaEdfDoisAlternativaUm, perguntaEdfDoisAlternativaDois, perguntaEdfDoisAlternativaTres, perguntaEdfDoisAlternativaQuatro);
		
		var perguntaEdfDois = new Question(perguntaEdfDoisAlternativas, 0);
		
			//FINANÇAS
		var perguntaEdfTresAlternativaUm = 'Em qual desenho fica mais bonito!!!';	
		var perguntaEdfTresAlternativaDois = 'Na vontade do arquiteto, tal como o design e a quantidade de pilastras.';	
		var perguntaEdfTresAlternativaTres = 'No raciocínio lógico, buscando sempre a obra ideal que se encontra no mundo das idéias, proposto por platão.';	
		var perguntaEdfTresAlternativaQuatro = 'Nas informações coletadas sobre a determinada obra, tais como o relevo do local, temperatura ambiente, etc.';	
		var perguntaEdfTresAlternativas = new Array(perguntaEdfTresAlternativaUm, perguntaEdfTresAlternativaDois, perguntaEdfTresAlternativaTres, perguntaEdfTresAlternativaQuatro);
		
		var perguntaEdfTres = new Question(perguntaEdfTresAlternativas, 3);
			//PROFESSORA
		
		var professoraEdfDialogoParteUm = new DialogoParte(`Agora, com os conhecimentos adquiridos, responda as questões a seguir.`, null);
		var professoraEdfDialogoParteDois = new DialogoParte(`O técnico em edificações só se faz necessário na etapa de execução da obra.`, perguntaEdfUm);	
		var professoraEdfDialogoParteTres = new DialogoParte(`Sobre o planejamento, é correto afirmar:`, perguntaEdfDois);	
		var professoraEdfDialogoParteQuatro = new DialogoParte(`O projeto é um planejamento visual com base...`, perguntaEdfTres);
		var professoraEdfDialogoPartefinal = new DialogoParte(`Fim do teste!`, null);
		var professoraEdfDialogos = new Array(professoraEdfDialogoParteUm, professoraEdfDialogoParteDois, professoraEdfDialogoParteTres, professoraEdfDialogoParteQuatro, professoraEdfDialogoPartefinal); 
		var professoraEdfDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', professoraEdfDialogos);
		
		
		
		/*------------------------DECLARAÇÃO FINAL---------------------------*/
		var placa = new ObjetoInterativo('placa', 'computador', 'Planejamento', placaDialogo);
		var cimento = new ObjetoInterativo('cimento', 'computador', 'Projeto', cimentoDialogo);
		var lousa = new ObjetoInterativo('lousa', 'computador', 'Técnico', cimentoDialogo);
		var professoraEdf = new ObjetoInterativo('professora', 'professora', 'Exercícios', professoraEdfDialogo);
		
		var objetosAdministracao = new Array(portaSaida,placa,cimento,lousa,professoraEdf);
		
		/*---------------------------------------------------*/