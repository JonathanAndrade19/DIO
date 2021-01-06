<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $nota01 = 7;
    $nota02 = 2;
    $nota03 = 6;
    $nota04 = 9;
    $media = ($nota01+$nota02+$nota03+$nota04)/4;
    
    if ($media >= 7){
        echo "Você está aprovado com Média: ".$media;
    }else{
        echo "Você está Reprovado com a Média: ".$media;
    }

$fruta = ['Maça','Pera','Melancia','Banana'];
?>
<ul>
<li><?php echo $fruta[0]?></li>
<li><?php echo $fruta[1]?></li>
<li><?php echo $fruta[2]?></li>
<li><?php echo $fruta[3]?></li>
</ul>
</body>
</html>

