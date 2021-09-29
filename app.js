let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// Máy tính chọn ngẫu nhiên
function getcomputerChoice(){
    const choices = [ 'r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

// Người chơi chọn

function convertToword(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToword(userChoice) + " Thắng " + convertToword(computerChoice) + ". Bạn Thắng Rồi!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToword(userChoice)  + " Thua " + convertToword(computerChoice) + ". Bạn Thua Máy!";
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToword(userChoice)  + " Hòa " + convertToword(computerChoice) + ". Hòa Nhau!";
}

function game(userChoice){
    const computerChoice = getcomputerChoice();
    // Các trường hợp xảy ra 
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Nhận giá trị người chơi chọn truyền vào userChoice
function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })
    
    paper_div.addEventListener('click', function(){
        game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();


