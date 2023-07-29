var objOfStatment =[
    {
        statment:`  <i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                    1- Beware of what you become in pursuit of what you want.
                    <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                    `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                    Jim Rohn
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },
    {
        statment:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                2- It's not what happens to you, but how you react to it that matters.
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                Epictetus
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },
    {
        statment:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                3- The best revenge is massive success.
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                Frank Sinatra
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },
    {
        statment:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                4- You miss 100% of the shots you don't take.
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                Wayne Gretzy
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },
    {
        statment:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                4- Resentment is like drinking poison and waiting for your enemies to die.
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                Nelson Mandela
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },
    {
        statment:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                5- o not take life too seriously. You will not get out alive.
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `,
        author:`<i class="fa-solid fa-quote-left position-absolute quotLeft fa-fade"></i>
                Elbert Hubbard
                <i class="fa-solid fa-quote-right position-absolute quotRight fa-fade"></i>
                `
                },

]

function randQout(){
    var num = 0;
    num = Number(Math.floor(Math.random() * objOfStatment.length)) ;
    document.getElementById('statmentQuot').innerHTML= objOfStatment[num].statment;
    document.getElementById('statmentAuth').innerHTML= objOfStatment[num].author;
    console.log(num);
}