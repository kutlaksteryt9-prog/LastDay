const authModal = document.getElementById("authModal");
const settingsModal = document.getElementById("settingsModal");


// ПЛАВНЫЙ СКРОЛЛ

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// АВТОРИЗАЦИЯ

function openAuth() {
    authModal.classList.add("active");
}

function closeAuth() {
    authModal.classList.remove("active");
}

function showRegister() {

    document.getElementById("authTitle").innerText = "РЕГИСТРАЦИЯ";

    document.getElementById("authSwitch").innerHTML =
        'Уже есть аккаунт? <span onclick="showLogin()">Войти</span>';
}

function showLogin() {

    document.getElementById("authTitle").innerText = "ВХОД";

    document.getElementById("authSwitch").innerHTML =
        'Нет аккаунта? <span onclick="showRegister()">Зарегистрироваться</span>';
}


function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (!username || !password) {
        alert("Заполни все поля!");
        return;
    }

    localStorage.setItem("lastday_user", username);

    alert("Добро пожаловать, " + username + "!");

    closeAuth();
}


// НАСТРОЙКИ

function openSettings() {
    settingsModal.classList.add("active");
}

function closeSettings() {
    settingsModal.classList.remove("active");
}


function changeFont(value) {

    if (value === "large") {
        document.body.classList.add("large");
    } else {
        document.body.classList.remove("large");
    }
}


function toggleAnimations(value) {

    if (value === "off") {
        document.body.classList.add("no-animation");
    } else {
        document.body.classList.remove("no-animation");
    }
}


// ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН

window.addEventListener("click", function(event) {

    if (event.target === authModal) {
        closeAuth();
    }

    if (event.target === settingsModal) {
        closeSettings();
    }

});


// ЕСЛИ ПОЛЬЗОВАТЕЛЬ УЖЕ ЗАХОДИЛ

const savedUser = localStorage.getItem("lastday_user");

if (savedUser) {

    document.querySelector(".login-btn").innerText =
        savedUser;
}
