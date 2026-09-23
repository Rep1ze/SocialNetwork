ReactDOM.render(
    <div>
        <form action={"http://localhost:3001/api/home"}>
            <input className="name" required placeholder="Enter your name" type="text"></input>
            <input className="email" required placeholder="Enter your e-mail" pattern="^\S+@\S+.\S+$" type="email"></input>
            <input className="password" required placeholder="Enter your password" type="password"></input>
            <input className="box" required onClick={bot} title="captcha beta" type="checkbox"></input>
            <button className="btn1" role="button" type="submit">Login</button>
        </form>
    </div>,
    document.getElementById("login")
)
function bot(){
    let bot = Math.floor(Math.random()*100)
    let checkbot = bot
    alert(checkbot)
    let checkbot1 = prompt("Enter last number on past window")
    if(checkbot1 != checkbot){
        for(checkbot1 != checkbot ; ;){
            alert("Wrong captcha")
        }
    }
}