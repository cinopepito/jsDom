// document.querySelector("h4").style.backgroundColor = "yellow";

//click event
const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);
//add class method when you perform a click
questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-click");
});
//to add a class to the element, we can use a method like .classList.add
//to remove a class to the element, we can use a method like .classList.remove
questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-click");
});

//sometimes developper can use toggle to show the element and to hide it when we want the element to pop up
questionContainer.addEventListener("click", () => {
  questionContainer.toggle("question-click");
});
