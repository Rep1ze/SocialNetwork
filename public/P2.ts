function reg1():void{
    const login = prompt("Enter your login")
    if(!login){
        for(!login  ; ;){
            alert("Login must have any symbol")
        }
    }else{
        const password = prompt("Enter your password")
        if(!password){
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
                
            }
        }
    }
}
function checkpersdata1():void{
    for(persdata1 != true ; ;){
        alert("You must accept personal data")
    }
}
let persdata1:boolean = confirm("You must accept personal data")
