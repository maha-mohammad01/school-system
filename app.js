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
    const tableBody = document.querySelector("#student-table tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

       
        const sname = document.getElementById("sname").value;
        const dbirthday = document.getElementById("dbirthday").value;
        const phonenum = document.getElementById("phonenum").value;
        const gender = document.getElementById("gender").value;
        const major = document.getElementById("major").value;
        const grade = document.getElementById("grade").value;
        const photo = document.getElementById("photo").value;


        // Create a new table row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${sname}</td>
            <td>${dbirthday}</td>
            <td>${gender}</td>
            <td>${phonenum}</td>
            <td>${major}</td>
            <td>${grade}</td>
            <td>${photo}</td>

        `;

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear form fields
        form.reset();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".navmenu");

 
    hamburgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("open"); 
    });

   
    window.addEventListener("resize", function () {
      
        if (window.innerWidth > 768) {
         
            navMenu.classList.remove("open");
        }
    });
});

