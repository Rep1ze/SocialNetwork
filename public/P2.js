function reg(){
    const login = prompt("Enter your login")
    if(!login){
        for(!login  ; ;){
            alert("Login must have any symbol")
        }
    }else{
        const password = prompt("Enter your password")
        if(!password || password == null || password == undefined || password == isNaN() || password == false){
            for(!password ; ;){
                alert("Password must have any symbol")
            }
        }else{
            const checkpass = prompt("Enter your password again")
            if(checkpass != password ){
                for(checkpass != password ;; ){
                    alert("Wrong password")
                }
            }else{
                let welcome = document.getElementById("1")
                welcome.textContent = (`welcome back ${login}`)
            }
        }
    }
}
function checkpersdata(){
    for(persdata != true ; ;){
        alert("You must accept personal data")
    }
}
let persdata = confirm("You must accept personal data")?
() => reg():
() => checkpersdata()