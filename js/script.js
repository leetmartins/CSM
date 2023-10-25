(function(){
    var animals = [];
    var musics = [];
    var qtdJogadores;
	var jogadores = [];
	var pontoJogador = []; 
    var pontos = 0;
    for(var i = 0; i < 14; i++){
		//cria um objeto animal e um objeto music com um src e um id
		var animal = {
			src: "imgs/" + i + ".jpg",
			id: i
		};

        var music = {
            src_m: "songs/" + i + ".mp3",
            id_m: i
        };
		
		//inserer os objetos criados nos respectivos arrays
		animals.push(animal);
        musics.push(music);
	} 
    //funcao para randomizar array
    function random(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    //embaralha a lista de animais e sons
    animals = random(animals);
    musics = random(musics);
    var frontFaces = document.getElementsByClassName("front");
    
    //arruma as cartas no tabuleiro
    for(var i = 0; i < 14; i++){
    
    
    //posiciona as cartas no tabuleiro
    var card = document.querySelector("#card" + i);
    card.style.left = (i % 7) === 0 ? 5 + "px" : 5 + ((i % 7) * 145) + "px";
    card.style.top = i/7 >= 1 ? 250 + "px" : 5 + "px"; 
   
    
    //adiciona as imagens às cartas
    frontFaces[i].style.background = "no-repeat center/130% url('" + animals[i].src + "')";
    frontFaces[i].setAttribute("id",animals[i].id);
    }
    function virarCarta(index) {
        frontFaces[index].style.transform = "rotateY(0deg)";
    }
    
    function desvirarCarta(index) {
        frontFaces[index].style.transform = "rotateY(180deg)";
    }
    function game(cardID,i){
        let numero = cardID.replace(/\D/g, '');
        
        console.log(i);
        console.log(numero);
        //virarCarta(i);
      //  desvirarCarta(i);       
       
        if(i == numero){            
            pontos++;            
        }
        else{
            if(cardID !="start"){
                console.log("Fim");
                alert("Voce fez " + pontos + " pontos.");
                pontos = 0;
            }
            

        }
       
        
    }
let ie = Math.floor(Math.random() * 14);    
document.getElementById("start").addEventListener("click", function() {
    this.classList.add('bottom');
    qtdJogadores = parseInt(prompt("Digite a quantidade de jogadores:"));
		for(var k = 1; k<= qtdJogadores; k++){
			jogadores [k] = String(prompt("Digite o nome" + k));
			pontoJogador [k] = 0;		
		console.log(pontoJogador[k]);
        }
    virarCarta(ie);
    desvirarCarta(ie);
    
    
});

    document.addEventListener("click", function(event) {
        if(event.target.id!="start"){
        game(event.target.id,iae);
        iae = Math.floor(Math.random() * 14);
        virarCarta(ie);
        desvirarCarta(ie);}
    });


    
}());


