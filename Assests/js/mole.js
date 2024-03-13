let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let backgroundMusic = new Audio("Assests/sounds/videoplayback-[AudioTrimmer.com].mp3");
    backgroundMusic.loop = true;
let musicPlaying = false;

window.onload = ()=>{
    
    setGame();
    document.getElementById("toggleMusic").addEventListener("click", toggleBackgroundMusic);
    document.getElementById("again").addEventListener("click", restartGame);
};

function restartGame() {
    window.location.reload(true);
    
    
}


function setGame() {
    for(let i = 0 ; i<=8 ; i++){
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 1000);
};

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if (gameOver) {
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML ="";
    }

    let mole = document.createElement('img');
    mole.src = 'Assests/imgs/habibi.png';
    let num = getRandomTile();

    if(currPlantTile && currPlantTile.id == num){
        num = (parseInt(num)-1).toString();
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if (gameOver) {
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML ="";
    }

    let plant = document.createElement('img');
    plant.src = 'Assests/imgs/banana-cat.png';
    let num = getRandomTile();

    if(currMoleTile && currMoleTile.id == num){
        num = (parseInt(num)+1).toString();
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if (gameOver) {
        return;
    }
    if (this == currMoleTile){
        
        let sound = new Audio("Assests/sounds/toyota-meme-[AudioTrimmer.com]-[AudioTrimmer.com].mp3");
        sound.play();
        score += 10;
        currPlantTile.innerHTML = '<img src="Assests/imgs/Banana-cat.png">';
        if(score % 100 === 0 && score!== 0){
            let sound2 = new Audio("Assests/sounds/“happy-happy-happy”-meme-made-with-Voicemod.mp3");
            // currPlantTile.innerHTML = ""; 
            // currPlantTile.innerHTML = '<img src="Assests/imgs/Banana_cat_holding_heart.png">';
            
        sound2.play();
        setInterval(() => {if(score % 100 === 0 && score!== 0){
            currPlantTile.innerHTML = '<img src="Assests/imgs/Banana_cat_holding_heart.png">';
        }}, 10);
        }
        document.getElementById("score") .innerText= "Score: "+score;
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "Game  Over! Your Score is :"+score;
        gameOver = true;
        let sound = new Audio("Assests/sounds/banana-cat-crying-full-sound-made-with-Voicemod.mp3");
        sound.play();
        currPlantTile.innerHTML = ""; 
        currPlantTile.innerHTML = '<img src="Assests/imgs/Uheuu.png">';
    }
}

function toggleBackgroundMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
    musicPlaying = !musicPlaying;
}