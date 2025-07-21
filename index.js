const score = [50,46,91,80,27]

function afficherScores(scores) {
    console.log("Score des joueur : ");
    
    console.log(scores);
}

function moyenne(scores) {
    let total = 0;
    for (let i =0  ; i<scores.length; i++) {
        total += scores[i]
    }
    console.log(" Score moyen : "+total / scores.length);
}

function meilleurScore(scores) {
    let score = scores
    console.log("Meilleur score : "+score.sort((b,a) => a - b )[0]);
    
     
}

function mention(player , score){
    let mention = "erreur"
    if(score < 50) {
        mention = "Insuffisant"
    } else if (score <= 64) {
        mention = "Passable"
    } else if (score <= 79 ){
        mention = "Bien"
    } else if(score <= 88) {
        mention = "Trés bien"
    } else if (score <= 100 ) {
        mention = "Excellent"
    }
    console.log("le joueur " + player + " a ue la mention :"+mention);
    
    
}



afficherScores(score)
moyenne(score)
meilleurScore(score)

console.log("mention : ");
mention("joueur 1 " , score[0])
mention("joueur 2" , score[1])
mention("joueur 3" , score[2])
mention("joueur 4" , score[3])
mention("joueur 5" , score[4])
