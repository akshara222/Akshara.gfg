alert("🏴‍☠️ Welcome to Reverse Quest!\nSolve the opposite words to reach the treasure!");

const data = [
    ["ancient","modern"],
    ["victory","defeat"],
    ["accept","reject"],
    ["increase","decrease"],
    ["create","destroy"],
    ["maximum","minimum"],
    ["entrance","exit"],
    ["include","exclude"],
    ["optimistic","pessimistic"],
    ["generous","selfish"],
    ["success","failure"],
    ["expand","contract"],
    ["visible","invisible"],
    ["possible","impossible"],
    ["arrival","departure"],
    ["borrow","lend"],
    ["ordinary","extraordinary"],
    ["freedom","captivity"],
    ["knowledge","ignorance"],
    ["hope","despair"]
];

const maps = [
    "🚶 ➜ ⬜ ➜ ⬜ ➜ ⬜ ➜ ⬜ ➜ 🏆",
    "⬜ ➜ 🚶 ➜ ⬜ ➜ ⬜ ➜ ⬜ ➜ 🏆",
    "⬜ ➜ ⬜ ➜ 🚶 ➜ ⬜ ➜ ⬜ ➜ 🏆",
    "⬜ ➜ ⬜ ➜ ⬜ ➜ 🚶 ➜ ⬜ ➜ 🏆",
    "⬜ ➜ ⬜ ➜ ⬜ ➜ ⬜ ➜ 🚶 ➜ 🏆",
    "🏆 Treasure Found!"
];

const rewards = [
    "🪙 Gold Coin",
    "💎 Diamond",
    "🗝️ Magic Key",
    "📜 Treasure Map",
    "✨ Magic Potion"
];

let score = 0;
let lives = 3;
let current = -1;

nextQuestion();

function nextQuestion(){

    let old = current;

    while(current == old){
        current = Math.floor(Math.random() * data.length);
    }

    document.getElementById("question").innerHTML = data[current][0];
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();

    if(score==2){
        document.getElementById("story").innerHTML="🌳 You entered the Dark Forest.";
    }
    else if(score==4){
        document.getElementById("story").innerHTML="🏜️ You crossed the Desert.";
    }
    else if(score==6){
        document.getElementById("story").innerHTML="🏰 You reached the Ancient Temple.";
    }
    else if(score==8){
        document.getElementById("story").innerHTML="💎 The treasure is just ahead!";
    }

}

function checkAnswer(){

    let ans = document.getElementById("answer").value.toLowerCase().trim();

    if(ans == data[current][1]){

        score++;

        document.getElementById("score").innerHTML = score;

        if(score <= 5){
            document.getElementById("map").innerHTML = maps[score];
        }

        let reward = rewards[Math.floor(Math.random()*rewards.length)];

        document.getElementById("msg").innerHTML =
        "✅ Correct! You found " + reward;

        document.getElementById("msg").style.color="green";

    }
    else{

        lives--;

        document.getElementById("lives").innerHTML=lives;

        document.getElementById("msg").innerHTML =
        "💀 Wrong! A trap was activated!<br>Correct Answer: " + data[current][1];

        document.getElementById("msg").style.color="red";
    }

    if(score==5){

        alert("🏆 Congratulations!\n\nYou reached the hidden treasure!\nFinal Score: "+score+"/5");
        location.reload();
        return;
    }

    if(lives==0){

        alert("💀 Game Over!\n\nYour Score: "+score);
        location.reload();
        return;
    }

    setTimeout(nextQuestion,1000);
}

document.getElementById("answer").addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        checkAnswer();
    }

});