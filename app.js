let slideIndex = 0;
showSlides();
let studentsArray = [];

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

function Student(name, dob, phoneNumber, gender, major, grade, photo) {
    this.name = name;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.major = major;
    this.grade = grade;
    this.photo = photo;
}


function showSlides() {
    const slides = document.getElementsByClassName("slide");
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

    // Retrieve stored students from local storage if available
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        studentsArray = JSON.parse(storedStudents);



        // Create cards for the stored students
        studentsArray.forEach(studentData => {
            const student = new Student(
                studentData.name,
                studentData.dob,
                studentData.phoneNumber,
                studentData.gender,
                studentData.major,
                studentData.grade,
                studentData.photo
            );
            createStudentCard(cardContainer, student);
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const sname = document.getElementById("sname").value;
        const dbirthday = document.getElementById("dbirthday").value;
        const phonenum = document.getElementById("phonenum").value;
        const gender = document.getElementById("gender").value;
        const major = document.getElementById("major").value;
        const grade = document.getElementById("grade").value;
        const photo = document.getElementById("photo").value;

        // Create a new student object
        const student = new Student(sname, dbirthday, phonenum, gender, major, grade, photo);

        // Add the student to the array
        studentsArray.push(student);

        // Save the updated studentsArray to local storage
        localStorage.setItem("students", JSON.stringify(studentsArray));

        // Create a new card element and populate it with student information
        createStudentCard(cardContainer, student);

        form.reset();
    });
});

function createStudentCard(container, student) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Populate the card with student information
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Date of Birth: ${student.dob}</p>
        <p>Gender: ${student.gender}</p>
        <p>Phone Number: ${student.phoneNumber}</p>
        <p>Major: ${student.major}</p>
        <p>Grade: ${student.grade}</p>
        <img src="${student.photo}" alt="Student Photo">
    `;

    // Append the card to the card container
    container.appendChild(card);
}



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



console.log(studentsArray.length);
console.log(studentsArray);