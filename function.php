   <?php

    ini_set('default_charset','UTF-8');  
    $nome = "Dilsinei"; // Isso é um texto "" string
    $sobrenome = "Lúcio";
    echo "Meu nome é " .$nome." ".$sobrenome. "." ; // mostra as opções na tela
	echo "</br>";
    print_r("Meu nome é " .$nome. ".");
	$pessoa = array( "alias" => "Dilsinei", "vulgo" =>"nei");
    echo "</br></br>";
    echo $pessoa["vulgo"];

    ?>