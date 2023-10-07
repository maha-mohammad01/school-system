let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); 
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sform");
    const cardContainer = document.getElementById("card-container");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const sname = document.getElementById("sname").value;
        const dbirthday = document.getElementById("dbirthday").value;
        const phonenum = document.getElementById("phonenum").value;
        const gender = document.getElementById("gender").value;
        const major = document.getElementById("major").value;
        const grade = document.getElementById("grade").value;
        const photo = document.getElementById("photo").value;

        // Create a new card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Populate the card with student information
        card.innerHTML = `
            <h3>${sname}</h3>
            <p>Date of Birth: ${dbirthday}</p>
            <p>Gender: ${gender}</p>
            <p>Phone Number: ${phonenum}</p>
            <p>Major: ${major}</p>
            <p>Grade: ${grade}</p>
            <img src="${photo}" alt="Student Photo"">
        `;
        // Append the card to the card container
        cardContainer.appendChild(card);

      
        form.reset();
    });
});
