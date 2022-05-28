const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});

saveHighScore = e => {
    console.log('clicked to save!');
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
};

goToHighScores = e => {
    location.assign('highscores.html');
}

playAgain = e => {
    location.assign('game.html');
}

goHome = e => {
    location.assign('index.html');
}