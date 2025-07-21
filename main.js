const scores = [64,85,21,49,36,75,48,34,92]

function filtrerScores(scores, callback) {
    const newArray = [];
    scores.map((s) => {
        callback(s) ? newArray.push(s): "";
        
    })
    return newArray;
}
function estExcellent(score) {
    return score > 90 
}
function estMoyen(score) {
    return score >= 50 && score <80
}

function estInsuffisant(score) {
    return score < 50
}
console.log("Scores excellents : "+filtrerScores(scores, estExcellent));
console.log("Scores moyens : "+filtrerScores(scores, estMoyen));
console.log("Scores insuffisants : "+filtrerScores(scores, estInsuffisant));


