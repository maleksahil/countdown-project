const quates = [
    {
        quate: `"You only live once, but if you do it right, once is enough."`,
        writer: `"-Mae West"`
    },{
        quate: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        writer: `"-Albert Einstein"`
    },{
        quate: `"Intelligent people tend to have less friends than the avarage person.The smarter you are, the more selective you become"`,
        writer: `"-Nikola Tesla"`
    },{
        quate: `"Your Time is limited so don't waste it living someone else's life"`,
        writer: `"-Steave Jobs"`
    },{
        quate: `"Anti-social behavior is a trait of intelligence in a world full of conformists."`,
        writer: `"-Nikola Tesla"`
    },{
        quate: `"Money and success don’t change people; they merely amplify what is already there."`,
        writer: `"-Will Smith"`
    },{
        quate: `"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."`,
        writer: `"-Henry Ford"`
    },{
        quate: `"Successful people are not gifted; they just work hard, then succeed on purpose."`,
        writer: `"-G.K. Nielson"`
    },{
        quate: `"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."`,
        writer: `"-Dwayne Johnson"`
    },
]

let btn = document.querySelector("#Qbtn");
let quate = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let currentQuateIndex = 0;

btn.addEventListener("click", function(){
      
    if(currentQuateIndex < quates.length){
        let currentquate = quates[currentQuateIndex];
        quate.innerHTML = currentquate.quate;
        writer.innerHTML = currentquate.writer
        currentQuateIndex++;
    }else{
        currentQuateIndex = 0;
        let currentquate = quates[currentQuateIndex];
        quate.innerHTML = currentquate.quate;
        writer.innerHTML = currentquate.writer;
    }
})
    
    // let random = Math.floor(Math.random() * quates.length);

    // quate.innerHTML = quates[random].quate;

    // writer.innerHTML = quates[random].writer;
// })