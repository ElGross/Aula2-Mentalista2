var numeroS = parseInt(Math.random() * 1001);
    while(palpite != numeroS)
    {var palpite = prompt('Adivinhe o número secreto entre 0 e 1000')
    if(palpite == numeroS) {alert('WOW! Você está com sorte! Muito bem!')}
     else if(palpite > numeroS) {alert('Não foi dessa vez! Tente um número menor.')}
     else if(palpite < numeroS){alert('Não foi dessa vez! Tente um numero maior')}}