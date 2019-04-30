<?php
switch($_POST['caso'])
{
    case 'entrarPrincipal':
        ?>
        <div id='escurecer' style='visibility: hidden;'>
			
	    </div>
        <div id="container" style='background-image: url("img/fundos/principal.png");background-size: 100% 100%;'>
		<div id="interactabilityDiv">
			
		</div>
		<div id="showInfo">
			
		</div>
	 	<div id='player' style="
	 	background-image: url('img/heracles/stopped.gif');
		background-size: 100% 100%;
		background-position: 0px 0px;
	 	left: 0.05vw;
	 	height: 12vw;
	 	width: 9vw;">
 		</div>

 		<div id="portaInformatica" name='Desenvolvimento de Sistemas' style="
	 	background-image: url('img/portas/portaDS.png');
		background-size: 100% 100%;
 		left: 20vw;
		height: 17vw;
		width: 8vw;">

 		</div>
 		<div id="portaEnfermagem" name='Enfermagem' style="
	 	background-image: url('img/portas/portaENF.png');
		background-size: 100% 100%;
 		left: 35vw;
		height: 17vw;
		width: 8vw;">

 		</div>
 		<div id="portaEdificacoes" name='Edificações' style="
 		background-image: url('img/portas/portaEDI.png');
		background-size: 100% 100%;
 		left: 50vw;
		height: 17vw;
		width: 8vw;">

 		</div>
 		<div id="portaTurismo" name='Turismo' style="
	 	background-image: url('img/portas/portaTUR.png');
		background-size: 100% 100%;
 		left: 65vw;
		height: 17vw;
		width: 8vw;">

 		</div>
	</div>
        <?php
        break;
    case 'entrarInformatica':
        ?>
        
        <?php
        break;
    case'exibirInfo':
        ?>
        <div>
            <img style='height: 30vw;width: 35vw;' src="<?php echo $_POST['dd1']?>" />
            <span style='position: absolute; left: 41vw;top: -5.5vw; color: red;font-size:3vw;cursor: pointer;' onclick="document.getElementById('escurecer').style.visibility = 'hidden';tmpJan('indexX.php','limparInfo')">X</span>
        </div>
        <?php
        break;
    case'limparInfo':
        break;
}
?>
