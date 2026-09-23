function reg(){
    const login = prompt("Enter your login")
    if(!login){
        for(!login ; ;){
            alert("Login must have any symbol")
        }
    }else{
        const password = prompt("Enter your password")
        if(!password){
            for(!password ;; ){
                alert("Password must have any symbol")
            }
        }else{
            const checkpass = prompt("Enter your password again")
            if(checkpass != password ){
                for(checkpass != password ; ;){
                    alert("Wrong password")
                }
            }else{
                const welcome = document.getElementById("1")
                welcome.textContent(`Welcome back ${login}`) 
            }
        }
    }
}
function checkpersdata(){
    for(persdata != true  ; ;){
        alert("You must accept personal data")
    }
}
let persdata = confirm("You must accept personal data")?
() => reg():
() => checkpersdata()