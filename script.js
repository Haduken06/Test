document.getElementById("btn").onclick = function(){
    const result = document.getElementById("result").value;
    let randomNum = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result").textContent = "I Love You";

}
document.getElementById("resetBtn").onclick = function(){

    randomNum = 0;

    document.getElementById("result").textContent = randomNum;


}