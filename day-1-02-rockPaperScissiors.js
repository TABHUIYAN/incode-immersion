let user1=prompt("Do you choose rock, paper or scissors?");
let user2=Math.random();
if(user2<0.34){
    user2="rock";
}else if(user2<=0.67){
    user2="paper";
}else{
    user2="scissors";
}
let comaprision=function(selection1,selection2){
    if(selection1==selection2){
        return "The result is a tie";
    }
    else if(selection1=="rock"){
        if(selection2=="scissors"){
            return"rock wins";
        }
    else if(selection2=="paper"){
        return "paper wins"
    }
    }
    else if(selection1=="paper"){
        if(selection2==="scissors"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "paper wins";
        }
    }
    else if(selection1==="scissors"){
        if(selection2==="paper"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "rock wins";
        }
    }
    
}
console.log(comaprision(user1,user2));
