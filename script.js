const quesans = document.querySelectorAll('.quesans')
const ans = document.querySelectorAll('.answer')

quesans.forEach((question) => question.addEventListener("click", () =>{
    console.log(question.lastElementChild)
    if(question.lastElementChild.classList.contains("hidden")){
        question.lastElementChild.classList.toggle("hidden")
        question.classList.toggle("active")
    }
    else{
        question.lastElementChild.classList.add("hidden")
        question.classList.remove("active")
    }
}
))



