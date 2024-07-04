let cp_pt=0;
let pl_pt=0;
function play(){
    let choice=confirm("Wanna play Rock, Paper, Scissor.??");
    let arr=["ROCK","PAPER","SCISSOR"];
    if(choice){
        let n=prompt("ROCKKK   PAPERRR   SCISSORRR....!!!!!!!!!!\nWhat's your option?");
        let computer=arr[Math.floor(Math.random() * arr.length)];
        n=n.toUpperCase();
        console.log(computer);
        if(computer == n){
            alert("Tie");
        }else if(computer ==="PAPER"&&n === "ROCK"){
            alert("YAY, I got a point..!!");
            cp_pt++;
        }else if(computer ==="PAPER"&&n === "SCISSOR"){
            alert("OH, You got a point..!!");
            pl_pt++;
        }else if(computer ==="SCISSOR"&&n === "ROCK"){
            alert("OH, You got a point..!!");
            pl_pt++;
        }else if(computer ==="SCISSOR"&&n === "PAPER"){
            alert("YAY, I got a point..!!");
            cp_pt++;
        }else if(computer ==="ROCK"&&n === "PAPER"){
            alert("OH, You got a point..!!");
            pl_pt++;
        }else if(computer ==="ROCK"&&n === "SCISSOR"){
            alert("YAY, I got a point..!!");    
            cp_pt++;
        }else{
            alert("Invalid Input");
        }
        play();
    }else{
        alert("Ok Bye..!!");
        if(cp_pt>pl_pt)
        document.getElementById('ans').innerHTML = "Points : "+cp_pt +"I won the Match..!!";
        else if(cp_pt<pl_pt)
        document.getElementById('ans').innerHTML = "Points : "+pl_pt+ "You won the Match..!!";
        else
        document.getElementById('ans').innerHTML = "It was a Tie..!!";
    }
}