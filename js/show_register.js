const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const showFormButton = document.getElementById("showFormButton");
const showFormButton2 = document.getElementById("showFormButton2")

// Add an event listener to the button
showFormButton.addEventListener("click", function() {
    // Hide the first page and show the second page (form)
    page1.style.display = "none";
    page2.style.display = "block"; 
});

showFormButton2.addEventListener("click", function() {
    page1.style.display = "block";
    page2.style.display = "none"; 
});