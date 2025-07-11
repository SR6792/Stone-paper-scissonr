
let s;//globally defining human ch
let x;//comp ch
let humanScore=0;
let computerScore=0;
let roundCount=0;//count how many rounds we play
let gameOver=false;//if true then stop

const button= document.querySelector("button");
function login(){
    const name=prompt("Enter your name:");
    const output= document.querySelector(".h");
    output.innerHTML="";
    if(name)
    {
        output.innerHTML = `${name} Score`;
    }
}
button.addEventListener("click",login);//login done

//now for human choice

//0-rock,1-paper,2-scissor,get the bot choice
function getHumanChoice(s){
    const rock= document.querySelector(".rock");
    const paper= document.querySelector(".paper");
    const scissor= document.querySelector(".scissor");
    rock.addEventListener("click",()=>{
        alert("You have chosen rock");
        s=0;
        playerCh(0);
        x=getComputerChoice();
        checkScore(s,x);
    });

    paper.addEventListener("click",()=>{
        alert("You have chosen paper");
        s=1;
        playerCh(1);
        x=getComputerChoice();
        checkScore(s,x);
    });

    scissor.addEventListener("click",()=>{
        alert("You have chosen scissor");
        s=2;
        playerCh(2);
        x=getComputerChoice();
        checkScore(s,x);
    });
}
getHumanChoice();

//now computers ch
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);//no btw 0-3 ie 0,1,2 not 3
    computerCh(choice);
    return choice;
}

//get our choice
function playerCh(choice){
    if(choice==0)
    {
        console.log(`You has chosen rock`);
    }
    if(choice==1)
    {
        console.log(`You has chosen paper`);
    }
    if(choice==2)
    {
        console.log(`You has chosen scissor`);
    }
}
//tells which option bot selected
function computerCh(choice){
    if(choice==0)
    {
        console.log(`Computer has chosen rock`);
    }
    if(choice==1)
    {
        console.log(`Computer has chosen paper`);
    }
    if(choice==2)
    {
        console.log(`Computer has chosen scissor`);
    }
}
//result or the calculation behind the result

function checkScore(s,x)//0-rock,1-paper,2-scissor
{

    const result=document.querySelector(".opd");
    if(gameOver) return;
    const hs=document.querySelector(".hs");
    const cs=document.querySelector(".cs");
    const hs1=document.querySelector(".hs1");
    const cs1=document.querySelector(".cs1");
    //to display what u and pc habe selected
    const hChoice=document.createElement("p");
    const compChoice=document.createElement("p");
    //human
    hs1.textContent="";
    cs1.textContent="";
    if(s===0)
    {

        hChoice.textContent='Chosen rock';
    }
    else if(s===1)
    {
        hChoice.textContent='Chosen paper';
    }
    else
    {
        hChoice.textContent='Chosen scissor';
    }
    hs1.appendChild(hChoice);
    //pc choice

    if(x===0)
    {
        compChoice.textContent='Chosen rock';
    }
    else if(x===1)
    {
        compChoice.textContent='Chosen paper';
    }
    else
    {
        compChoice.textContent='Chosen scissor';
    }
    cs1.appendChild(compChoice);



    if (s === x) {
        result.innerHTML = "Round result: It's a draw!";
    } else if (
        (s === 0 && x === 2) ||
        (s === 1 && x === 0) ||
        (s === 2 && x === 1)
    ) {
        humanScore++;
        result.innerHTML = "Round result: You win!";
    } else {
        computerScore++;
        result.innerHTML = "Round result: Computer wins!";
    }

    hs.innerHTML = `${humanScore}`;
    cs.innerHTML = `${computerScore}`;
    if(humanScore===5|| computerScore===5){
        gameOver=true;
        if(humanScore>computerScore)
        {
            result.innerHTML+= "<br> You won <br>";
        }
        else if(computerScore>humanScore){
            result.innerHTML+="<br>COMPUTER WON<br>"
        }
        else{
            result.innerHTML+="its a tie";
        }
    }

}

//no of times to play(5)
