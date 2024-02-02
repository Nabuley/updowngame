var number = Math.floor(Math.random() * 100) + 1;
var chance=7;
var suc=false;
    
function play() {
    let guess = document.getElementById("guess").value;
    chance -= 1;
    if (guess === number) {
        document.getElementById("message").innerHTML = "축하합니다! 숫자를 맞추셨습니다. 이스터 에그 힌트를 드리겠습니다! 제작자의 이름을 써보세요!";
        number = Math.floor(Math.random() * 100) + 1;
        suc=true;
        chance=7;
    } else if (guess < number) {
        document.getElementById("message").innerHTML = `업! 더 큰 숫자입니다.${chance}번 남았습니다.`;
    } else if(guess > number){
        document.getElementById("message").innerHTML = `다운! 더 작은 숫자입니다. ${chance}번 남았습니다.`;
    }
    else{
        document.getElementById("message").innerHTML = `숫자를 입력해 주세요.${chance}번 남았습니다.`;
    }
    if(chance == 0 && !suc){
        alert(`정답은${number} 이었습니다.. 다시 도전하세요!`);
        number = Math.floor(Math.random() * 100) + 1;
        chance=7;
    }
}
