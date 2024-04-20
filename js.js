//making a question to tab
const questions=[
    {
        question:'what does  HTML stands for?',
        answers:[
            {answer:'Hyper Text Markup languages',correct:false},
            {answer:'Hyper transfer language',correct:false},
            {answer:'Hyper Text Markup Language',correct:true},
        ],

        // question:'what is the HTML file extension ',
        // answers:[
        //     {answer:'.html',correct:true},
        //     {answer:'.jpeg',correct:false},
        //     {answer:'.jpg',correct:false},
        // ]
         
    }
]
const triger=document.querySelector("#start")//start button
const qContainer=document.querySelector(".q-container")//container of the question
const pragraph=document.querySelector(".quiz")//holder for the question
const solution=document.querySelector(".solution")//answer buttons 
const submit=document.getElementById("submit")//submit the solution
const p=document.querySelector(".topic")
const heading=document.querySelector("h1")
//start quiz btn
triger.addEventListener("click",start)


// submit.addEventListener("click",()=>{
//     currentQuestionIndex++
//     setNext()
// })
let replace=""
replace=questions.sort(()=>Math.random()- .5)//finding random question for the question object
let currentQuestionIndex='';//current Index of the question

//function for the start btn 
function start(){
   triger.classList.add("hide")
   qContainer.classList.remove("hide")
   currentQuestionIndex=0;
   p.classList.add("hide")
   heading.innerText="HTML"
   setNext()
}
//next question function
function setNext(){
    removeQuestion()
    showQuestion(replace[currentQuestionIndex])
    
}
//showing the question in our qcontainer
function showQuestion(la){
    
    pragraph.innerText=la.question
    la.answers.forEach(answer=>{
    let buttons=document.createElement('button')
    buttons.innerText=answer.answer
    buttons.classList.add(".answers")
    solution.appendChild(buttons)
    if(answer.correct){// setting the data attribute for the button
        buttons.dataset.correct=answer.correct
    }
    buttons.addEventListener("click",selectAnswer)
    })
}

//checking for the answer
function selectAnswer(e){
    const clicked=e.target //getting the clicked element
    const correct=clicked.dataset.correct//checking if the answer is correct
    Array.from(solution.children).forEach(btn=>{
        if(correct){
           clicked.classList.add("green")
        }
        else{
          clicked.classList.add("red")
        }
    })
//     if(replace.length>currentQuestionIndex){
//         submit.classList.add("hide")
//     }
//     else{
//         submit.classList.remove("hide") 
//     }
submit.classList.remove("hide")
}


//removing the existing element in the dom
function removeQuestion(){
    submit.classList.add("hide")
    while(solution.firstChild){
        solution.removeChild(solution.firstChild)
    }
}

