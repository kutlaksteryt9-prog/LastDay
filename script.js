/* ==================================================
   ELEMENTS
================================================== */

const authModal = document.getElementById("authModal");
const settingsModal = document.getElementById("settingsModal");


/* ==================================================
   SCROLL
================================================== */

function scrollToSection(id) {

    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ==================================================
   AUTH
================================================== */

function openAuth() {

    authModal.classList.add("active");

}

function closeAuth() {

    authModal.classList.remove("active");

}


/* ==================================================
   REGISTER / LOGIN
================================================== */

function showRegister() {

    document.getElementById("authTitle").innerText =
        "РЕГИСТРАЦИЯ";

    document.querySelector(".full").innerText =
        "СОЗДАТЬ АККАУНТ";

    document.querySelector(".full").onclick =
        register;

    document.getElementById("authSwitch").innerHTML =
        'Уже есть аккаунт? <span onclick="showLogin()">Войти</span>';

}


function showLogin() {

    document.getElementById("authTitle").innerText =
        "ВХОД";

    document.querySelector(".full").innerText =
        "ВОЙТИ";

    document.querySelector(".full").onclick =
        login;

    document.getElementById("authSwitch").innerHTML =
        'Нет аккаунта? <span onclick="showRegister()">Зарегистрироваться</span>';

}


/* ==================================================
   REGISTER
================================================== */

function register() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (!username || !password) {

        alert("Заполни все поля!");

        return;
    }


    localStorage.setItem(
        "lastday_user",
        username
    );


    alert(
        "Аккаунт создан! Добро пожаловать, " +
        username +
        "!"
    );


    document.querySelector(".login-btn").innerText =
        username;

    closeAuth();

}


/* ==================================================
   LOGIN
================================================== */

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (!username || !password) {

        alert("Заполни все поля!");

        return;
    }


    localStorage.setItem(
        "lastday_user",
        username
    );


    document.querySelector(".login-btn").innerText =
        username;


    alert(
        "Добро пожаловать, " +
        username +
        "!"
    );


    closeAuth();

}


/* ==================================================
   SETTINGS
================================================== */

function openSettings() {

    settingsModal.classList.add("active");

}

function closeSettings() {

    settingsModal.classList.remove("active");

}


/* ==================================================
   FONT
================================================== */

function changeFont(value) {

    if (value === "large") {

        document.body.classList.add("large");

    } else {

        document.body.classList.remove("large");

    }

}


/* ==================================================
   ANIMATIONS
================================================== */

function toggleAnimations(value) {

    if (value === "off") {

        document.body.classList.add(
            "no-animation"
        );

    } else {

        document.body.classList.remove(
            "no-animation"
        );

    }

}


/* ==================================================
   MODAL CLICK OUTSIDE
================================================== */

window.addEventListener(
    "click",
    function(event) {

        if (event.target === authModal) {

            closeAuth();

        }

        if (event.target === settingsModal) {

            closeSettings();

        }

    }
);


/* ==================================================
   ESCAPE
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeAuth();

            closeSettings();

        }

    }
);


/* ==================================================
   SAVED USER
================================================== */

const savedUser =
    localStorage.getItem("lastday_user");


if (savedUser) {

    document.querySelector(
        ".login-btn"
    ).innerText = savedUser;

}


/* ==================================================
   3D MOUSE PARALLAX
================================================== */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

document.addEventListener(
    "mousemove",
    function(event) {

        if (
            document.body.classList.contains(
                "no-animation"
            )
        ) {
            return;
        }


        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        if (hero && heroContent) {

            heroContent.style.transform =
                `translate3d(
                    ${x * 18}px,
                    ${y * 12}px,
                    25px
                )`;

        }

    }
);


/* ==================================================
   RESET PARALLAX
================================================== */

document.addEventListener(
    "mouseleave",
    function() {

        if (heroContent) {

            heroContent.style.transform =
                "translate3d(0,0,0)";

        }

    }
);


/* ==================================================
   CARD 3D TILT
================================================== */

const cards =
    document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener(
        "mousemove",
        function(event) {

            if (
                document.body.classList.contains(
                    "no-animation"
                )
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) / centerX) * 5;

            const rotateX =
                ((centerY - y) / centerY) * 5;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)
                 translateZ(30px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "";

        }
    );

});
