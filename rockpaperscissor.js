let score = [0,0];
    function computerplay()
    {
        const choice = ["rock", "paper", "scissor"];
        const random = Math.floor(Math.random() * choice.length);
        return choice[random];
    }
    function playround(x,y)
    {
        y = y.toLowerCase();
        if( x == "rock" && y == "scissor")
        {
            score[0] +=1;
            console.log(1,score);
        }
        else if( x == "rock" && y == "paper")
        {
            score[1] += 1;
            console.log(2,score);
        }
        else if( x == "paper" && y == "rock")
        {
            score[0] += 1;
            console.log(3,score);
        }
        else if( x == "paper" && y == "scissor")
        {
            score[1] +=1;
            console.log(4,score);
        }
        else if( x == "scissor" && y == "paper")
        {
            score[0] +=1;
            console.log(5,score);
        }
        else if( x == "scissor" && y == "rock")
        {
            score[1] +=1;
            console.log(6,score);
        }
        else if(x==y)
        {
            console.log(score);
        }
    }
function game()
{
    for(let i = 0; i<5; i++)
    {
        let y = prompt("please select one : rock, paper, scissor");
        y = y.toLowerCase();
        let x = computerplay();
        playround(x,y)
    }
    console.log(score[0]);
    console.log(score[1]);
    if(score[1] > score[0])
    {
        console.log("Player wins");
    }
    if(score[0] > score[1])
    {
        console.log("Computer wins");
    }
    if(score[1] == score[0])
    {
        console.log("It is a tie.");
    }
}
