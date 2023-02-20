// document.querySelector("h4").style.backgroundColor = "yellow";

//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const response = document.querySelector(".rep");

// questionContainer.addEventListener("click", () => {
//   questionContainer.classList.add("question-click");
// });
//to add a class to the element, we can use a method like .classList.add
//to remove a class to the element, we can use a method like .classList.remove
// questionContainer.addEventListener("click", () => {
//   questionContainer.classList.add("question-click");
// });

//sometimes developper can use toggle to show the element and to hide it when we want the element to pop up
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
