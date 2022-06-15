let rolls = [];
let totalNoRolls;
let counter = 0;
let loopInterval;
let total = 0;
let average;

let rollLoop = () => loopInterval = setInterval(roll, 1000);
let stopLoop = () => clearInterval(loopInterval);

function setRolls()
{
    totalNoRolls = document.getElementById("userRollInput").value;
    rollLoop();
}

function roll()
{
    if(rolls.length >= 20)
    {
        clearInterval(loopInterval);
    } else
    {
        rolls.push(Math.floor(Math.random() * 6) + 1);
        document.getElementById('roll-result').innerHTML = rolls;
        counter++;
        
        if(counter >= totalNoRolls)
        {
            stopLoop();
            counter = 0;
        }
    }
}

function calculateTotal()
{
    for(let i = 0; i < rolls.length; i++)
    {
        total += rolls[i];
    }
    document.getElementById('total-output').innerHTML = `Total: ${total}`;
    total = 0;
}

function calculateAverage()
{
    for(let i = 0; i < rolls.length; i++)
    {
        total += rolls[i];
    }
    average = total / rolls.length;
    document.getElementById('average-output').innerHTML = `Average: ${average}`;
    average = 0
    total = 0
}

function reset()
{
    rolls = [];
    document.getElementById('roll-result').innerHTML = "";
    document.getElementById('average-output').innerHTML = `Average:`;
    document.getElementById('total-output').innerHTML = `Total:`;
}
