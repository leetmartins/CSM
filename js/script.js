(function(){
    var animals = [];
    var musics = [];
    var flipcards = [];

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
    let test = document.querySelector("card");
    var frontFaces = document.getElementsByClassName("front");
    let gameOver = false;
    //arruma as cartas no tabuleiro
    for(var i = 0; i < 14; i++){
    
    
    //posiciona as cartas no tabuleiro
    var card = document.querySelector("#card" + i);
    card.style.left = (i % 7) === 0 ? 5 + "px" : 5 + ((i % 7) * 145) + "px";
    card.style.top = i/7 >= 1 ? 250 + "px" : 5 + "px"; 
    card.addEventListener("click",game,false);
    
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
    function game(){
        var i = 2;
        virarCarta(i);
        desvirarCarta(i);

        flipcards.push(card.id);
       

        if(this.id == i){
            game();
        }
        else{
            console.log("Fim");
        }
       
        
    }
document.getElementById("start").addEventListener("click", function() {
    game();
    this.classList.add("bottom");
});
    
}());


