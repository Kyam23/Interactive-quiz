function StartQuiz() {
    document.getElementById('buttonStart').hidden = true;
    document.getElementById('question').innerHTML = "What animal cant blink? <br> <button onclick=q2()>Fish</button> <button onclick=wrongAns()>Cat</button>"
}
function wrongAns() {
    alert("Oops wrong answer, please try again!")
}
function q2() {
    document.getElementById('question').innerHTML = "What country is the happiest<br> <button onclick=q3()>Finland</button> <button onclick=wrongAns()>iceland</button>"
}
function q3() {
    document.getElementById('question').innerHTML = "What elememt has the simble AU?<br> <button onclick=q4()>GOLD</button> <button onclick=wrongAns()>ALUMINUM</button>"
}
function q4() {
    document.getElementById('question').innerHTML = "What is the oldest place in the Pholippines?<br> <button onclick=q5()>Cebu</button> <button onclick=wrongAns()>Manila</button>"
}
function q5() {
    document.getElementById('question').innerHTML = "BUGTONG-isang puno limang sanga walang dahon walang bunga. <br> <button onclick=q6()>kamay</button> <button onclick=wrongAns()>saging</button>"
}