const button = document.querySelector("button"),
    alert = document.querySelector(".container"),
    closeIcon = document.querySelector(".close"),
    progress = document.querySelector(".progress");


button.addEventListener("click", () => {
    alert.classList.add("active");
    progress.classList.add("active");
    setTimeout(() => {
        alert.classList.remove("active");
    }, 5000);
});

closeIcon.addEventListener("click", () => {
    alert.classList.remove("active");
    setTimeout(() => {
        progress.classList.remove("active");
    }, 6000);
});


function getAgeStages() {
    let name = document.getElementById("name").value;
    document.getElementById("username").innerHTML = name;
    let age = document.getElementById("age").value;
    if (age > 0 && age < 7) {
        document.getElementById("stages").innerHTML = "Early Childhood";
    } else if (age >= 7 && age < 15) {
        document.getElementById("stages").innerHTML = "Childhood";
    } else if (age >= 15 && age < 28) {
        document.getElementById("stages").innerHTML = "Adolescence";
    } else if (age >= 28 && age < 50) {
        document.getElementById("stages").innerHTML = "Youth";
    } else if (age >= 50 && age < 70) {
        document.getElementById("stages").innerHTML = "Maturity";
    } else if (age >= 70) {
        document.getElementById("stages").innerHTML = "Older";
    } else {
        document.getElementById("stages").innerHTML = "Input Valid";
    }


}