function computerPlay() {
    return Math.floor((Math.random() * 3) + 1);
}

//1-Rock,2-Paper,3-Scissors

let player;

function play(player_choice, cpu_choice = computerPlay()) {
    if(player_choice.toLowerCase() == "rock") player = 1;
    else if(player_choice.toLowerCase() == "paper") player = 2;
    else if(player_choice.toLowerCase() == "scissors") player = 3;

    if(player == cpu_choice) {
        console.log("TIE");
    }
    else if(player == (cpu_choice + 1) % 3) {
        console.log("Player wins!")
    }
    else if(cpu_choice == (player + 1) % 3) {
        console.log("Computer wins!")
    }
}

function repeat(player_choice) {
    for(let i = 0; i<=5 ; i++) {
        play(player_choice);
    }
}