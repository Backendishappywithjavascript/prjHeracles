//SALA 5 - AdmUTENÇÃO E SUPORTE  --------------------------------------------//
		var computadorAdmDialogoParteUm = new DialogoParte(`RECURSOS HUMANOS.
	Aplicação de um conjunto de conhecimentos e técnicas administrativas especializadas no gerenciamento das relações de pessoas com as organizações.
PRESSIONE "E" PARA AVANÇAR...`, null);	
		var computadorAdmDialogoParteDois = new DialogoParte(`TUDO PERFEITAMENTE EQUILIBRADO.
	Deve-se prover satisfação tanto para a organização, tais como as empresas, como para com as pessoas, tais como os funcionários.
PRESSIONE "E" PARA SAIR...`, null)
		var computadorAdmDialogos = new Array(computadorAdmDialogoParteUm, computadorAdmDialogoParteDois); 
		var computadorAdmDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', computadorAdmDialogos);
		
		
			/*COMPUTADOR DOIS*/
		var roboDialogoParteUm = new DialogoParte(`Olá.
	Eu sou, um Robô e fui criado pelo conhecimento advindo da prototipação que é fornecido no curso. 
PRESSIONE "E" PARA AVANÇAR...`, null);	
		var roboDialogoParteDois = new DialogoParte(`Como fui criado?
	Através do Admuseio do Arduino, uma placa com microcontroladores - quase um mini computador - que é barata e eficiênte no auxílio da prototipação, isto é, programação voltada a Admipulação de um protótipo.
PRESSIONE "E" PARA AVANÇAR...`, null);	
		var roboDialogoParteTres = new DialogoParte(`Opa, quase esqueci!
	Além disso o Arduino é um hardware livre, ou seja, com ele você pode criar e alterar qualquer projeto da Admeira que quiser.
	Bem Admeiro né? eu sei. então venha pro curso e crie uma namorada pra mim!
PRESSIONE "E" PARA SAIR...`, null);	
		var roboDialogos = new Array(roboDialogoParteUm, roboDialogoParteDois, roboDialogoParteTres); 
		var roboDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', roboDialogos);
		
		
			/*computadorDanificado TRÊS*/
		var circuitoDialogoParteUm = new DialogoParte(`FUNDAMENTOS DA ELETRÔNICA.
	Apresenta o conceito basico dos funcionamentos de diodos e capacitores, além de funções como técnicas de soldagem e relatório profissional.`, null);	
		var circuitoDialogoParteDois = new DialogoParte(`Diodos? Que?
	Um diodo é um componente eletrônico que permite a passagem da corrente elétrica somente em um sentido, ou seja, o diodo é como uma válvula que só deixa a agua fluir em um sentido, além disso ele tambem pode converter uma tensão elétrica alternada em contínua.`, null);	
		var circuitoDialogoParteTres = new DialogoParte(`Capacitores? Ham?
	Um capacitor é um despositivo capaz de acumular cargar elétricas em seus terminais quando a diferença da potência é estabelecida em seus terminais.`, null);	
		var circuitoDialogos = new Array(circuitoDialogoParteUm, circuitoDialogoParteDois, circuitoDialogoParteTres); 
		var circuitoDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', circuitoDialogos);
		
		
			
			/*PROFESSOR*/
		var professoraAdmDialogoParteUm = new DialogoParte(`Olá, agora que você adquiriu um pouco de conhecimento a respeito deste curso, responda algumas questões.`, null);	
		
			//QUESTÕES
			//PROGRAMAÇÃO
		var perguntaAdmUmAlternativaUm = 'REINICIAR O COMPUTADOR.';	
		var perguntaAdmUmAlternativaDois = 'FORMATAR O COMPUTADOR.';	
		var perguntaAdmUmAlternativaTres = 'ABRIR O WINDOWS DEFENDER E REALIZAR UMA VARREDURA.';	
		var perguntaAdmUmAlternativaQuatro = 'ABRIR O GERENCIADOR DE TAREFAS E LISTAR OS PROCESSOS EM ORDEM DE USO DA CPU.';	
		var perguntaAdmUmAlternativas = new Array(perguntaAdmUmAlternativaUm, perguntaAdmUmAlternativaDois, perguntaAdmUmAlternativaTres, perguntaAdmUmAlternativaQuatro);
		
		var perguntaAdmUm = new Question(perguntaAdmUmAlternativas, 3);
		
			//BANCO DE DADOS
		var perguntaAdmDoisAlternativaUm = 'Você deve implementar um sensor de temperatura.';	
		var perguntaAdmDoisAlternativaDois = 'Você deve implementar um sensor de movimento.';	
		var perguntaAdmDoisAlternativaTres = 'Você deve implementar um detector de umidade.';	
		var perguntaAdmDoisAlternativaQuatro = 'Você deve implementar um Receptor infravermelho para captar a energia advinda da luz solar';	
		var perguntaAdmDoisAlternativas = new Array(perguntaAdmDoisAlternativaUm, perguntaAdmDoisAlternativaDois, perguntaAdmDoisAlternativaTres, perguntaAdmDoisAlternativaQuatro);
		
		var perguntaAdmDois = new Question(perguntaAdmDoisAlternativas, 0);
		
			//REDES
		var perguntaAdmTresAlternativaUm = 'Capacitar um sistema através do gerenciamento da potência gráfica de uma GPU.';	
		var perguntaAdmTresAlternativaDois = 'Armazenar energia elétrica.';	
		var perguntaAdmTresAlternativaTres = 'Estabelecer uma conexão vetorial em relação aos circuitos da placa mãe.';	
		var perguntaAdmTresAlternativaQuatro = 'Realizar a Admutenção do uso da CPU em larga escala.';	
		var perguntaAdmTresAlternativas = new Array(perguntaAdmTresAlternativaUm, perguntaAdmTresAlternativaDois, perguntaAdmTresAlternativaTres, perguntaAdmTresAlternativaQuatro);
		
		var perguntaAdmTres = new Question(perguntaAdmTresAlternativas, 1);
			//PROFESSORA
		
		var professoraAdmDialogoParteUm = new DialogoParte(`Agora, com os conhecimentos adquiridos, responda as questões a seguir.`, null);
		var professoraAdmDialogoParteDois = new DialogoParte(`Se seu computador está lento, qual é o procedimento adequado?`, perguntaAdmUm);	
		var professoraAdmDialogoParteTres = new DialogoParte(`Para automatizar a inicialização de um ventilador em função de uma temperatura X`, perguntaAdmDois);	
		var professoraAdmDialogoParteQuatro = new DialogoParte(`Qual a função de um Capacitor?`, perguntaAdmTres);
		var professoraAdmDialogoPartefinal = new DialogoParte(`Fim do teste!`, null);
		var professoraAdmDialogos = new Array(professoraAdmDialogoParteUm, professoraAdmDialogoParteDois, professoraAdmDialogoParteTres, professoraAdmDialogoParteQuatro, professoraAdmDialogoPartefinal); 
		var professoraAdmDialogo = new DialogoInterativo('interactabilityDiv', 'img/telas/telaComputador.jpg', professoraAdmDialogos);
		
		
		
		/*------------------------DECLARAÇÃO FINAL---------------------------*/
		var computadorAdm = new ObjetoInterativo('computadorAdm', 'computador', 'Recursos Humanos', computadorUnicoDialogo);
		var robo = new ObjetoInterativo('robo', 'robo', 'Prototipação', roboDialogo);
		var circuito = new ObjetoInterativo('circuito', 'computador', 'Fundamentos Eletrônicos', circuitoDialogo);
		var professoraAdm = new ObjetoInterativo('professoraAdm', 'professora', 'Exercícios', professoraAdmDialogo);
		
		var objetosAdministracao = new Array(portaSaida,computadorAdm,robo,circuito,professoraAdm);
		
		/*---------------------------------------------------*/