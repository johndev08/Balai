
// Open and Close logindiv
function openlogin() {
    var logindiv = document.querySelector(".loginform");
    logindiv.style.display = "flex";
}
function closelogin() {
    var logindiv = document.querySelector(".loginform");
    logindiv.style.display = "none";
}
document.querySelector(".fa-user").addEventListener("click", openlogin);
document.querySelector(".x").addEventListener("click", closelogin);


// LoIn Function
const passwordInput = document.getElementById('pass');
const loginbox = document.getElementById("loginform");
const profitbut = document.getElementById("profit");
const adminbox = document.getElementById("admin");
const passwordbox = document.getElementById("pass");

const loginButton = document.getElementById("loginbuti").addEventListener('click', logining);
const logoutbutton = document.getElementById("logoutbuti").addEventListener("click", logoutout);

function logining() {
    const password = passwordInput.value;
    const loginbox = document.getElementById("loginform");
    const logoutbutton = document.getElementById("logoutbuti");
    const loginButton = document.getElementById("loginbuti");
    if (password === '1') {
        alert('Successfully LogIn');
        checkboxc1.style.display = 'block';
        checkboxc2.style.display = 'block';
        checkboxc3.style.display = 'block';
        checkboxc4.style.display = 'block';
        checkboxc5.style.display = 'block';
        checkboxc6.style.display = 'block';
        checkboxc7.style.display = 'block';
        checkboxc8.style.display = 'block';
        checkboxc9.style.display = 'block';
        checkboxc10.style.display = 'block';
        checkboxc11.style.display = 'block';
        checkboxc12.style.display = 'block';
        checkboxc13.style.display = 'block';
        checkboxc14.style.display = 'block';
        checkboxc15.style.display = 'block';
        checkboxc16.style.display = 'block';
        checkboxc17.style.display = 'block';
        checkboxc18.style.display = 'block';
        checkboxc19.style.display = 'block';
        checkboxc20.style.display = "block";
        seedetails1.style.display = "block";
        seedetails2.style.display = "block";
        seedetails3.style.display = "block";
        seedetails4.style.display = "block";
        seedetails5.style.display = "block";
        seedetails6.style.display = "block";
        seedetails7.style.display = "block";
        seedetails8.style.display = "block";
        seedetails9.style.display = "block";
        seedetails10.style.display = "block";
        seedetails11.style.display = "block";
        seedetails12.style.display = "block";
        seedetails13.style.display = "block";
        seedetails14.style.display = "block";
        seedetails15.style.display = "block";
        seedetails16.style.display = "block";
        seedetails17.style.display = "block";
        seedetails18.style.display = "block";
        seedetails19.style.display = "block";
        seedetails20.style.display = "block";

        loginButton.style.display = "none";
        logoutbutton.style.display = "block";
        profitbut.style.display = "block";
        loginbox.style.display = "none";
        adminbox.style.display = "none";
        passwordbox.style.display = "none";
        passwordbox.value = "";
    } else {
        alert("Wrong password!");
    }
}

function logoutout() {
    const loginbox = document.getElementById("loginform");
    const logoutbutton = document.getElementById("logoutbuti");
    const loginButton = document.getElementById("loginbuti");

    alert('LogOut Successfully');
    checkboxc1.style.display = 'none';
    checkboxc2.style.display = 'none';
    checkboxc3.style.display = 'none';
    checkboxc4.style.display = 'none';
    checkboxc5.style.display = 'none';
    checkboxc6.style.display = 'none';
    checkboxc7.style.display = 'none';
    checkboxc8.style.display = 'none';
    checkboxc9.style.display = 'none';
    checkboxc10.style.display = 'none';
    checkboxc11.style.display = 'none';
    checkboxc12.style.display = 'none';
    checkboxc13.style.display = 'none';
    checkboxc14.style.display = 'none';
    checkboxc15.style.display = 'none';
    checkboxc16.style.display = 'none';
    checkboxc17.style.display = 'none';
    checkboxc18.style.display = 'none';
    checkboxc19.style.display = 'none';
    checkboxc20.style.display = "none";

    seedetails1.style.display = "none";
    seedetails2.style.display = "none";
    seedetails3.style.display = "none";
    seedetails4.style.display = "none";
    seedetails5.style.display = "none";
    seedetails6.style.display = "none";
    seedetails7.style.display = "none";
    seedetails8.style.display = "none";
    seedetails9.style.display = "none";
    seedetails10.style.display = "none";
    seedetails11.style.display = "none";
    seedetails12.style.display = "none";
    seedetails13.style.display = "none";
    seedetails14.style.display = "none";
    seedetails15.style.display = "none";
    seedetails16.style.display = "none";
    seedetails17.style.display = "none";
    seedetails18.style.display = "none";
    seedetails19.style.display = "none";
    seedetails20.style.display = "none";

    logoutbutton.style.display = "none"
    loginbox.style.display = "none";
    profitbut.style.display = "none";
    loginButton.style.display = "block";
    adminbox.style.display = "block";
    passwordbox.style.display = "block";
}
const checkboxc1 = document.getElementById('availablec1');
const checkboxc2 = document.getElementById("availablec2");
const checkboxc3 = document.getElementById("availablec3");
const checkboxc4 = document.getElementById('availablec4');
const checkboxc5 = document.getElementById('availablec5');
const checkboxc6 = document.getElementById('availablec6');
const checkboxc7 = document.getElementById('availablec7');
const checkboxc8 = document.getElementById('availablec8');
const checkboxc9 = document.getElementById('availablec9');
const checkboxc10 = document.getElementById('availablec10');
const checkboxc11 = document.getElementById('availablec11');
const checkboxc12 = document.getElementById('availablec12');
const checkboxc13 = document.getElementById('availablec13');
const checkboxc14 = document.getElementById('availablec14');
const checkboxc15 = document.getElementById('availablec15');
const checkboxc16 = document.getElementById('availablec16');
const checkboxc17 = document.getElementById('availablec17');
const checkboxc18 = document.getElementById('availablec18');
const checkboxc19 = document.getElementById('availablec19');
const checkboxc20 = document.getElementById('availablec20');

const seedetails1 = document.getElementById("seedetailsc1");
const seedetails2 = document.getElementById("seedetailsc2");
const seedetails3 = document.getElementById("seedetailsc3");
const seedetails4 = document.getElementById("seedetailsc4");
const seedetails5 = document.getElementById("seedetailsc5");
const seedetails6 = document.getElementById("seedetailsc6");
const seedetails7 = document.getElementById("seedetailsc7");
const seedetails8 = document.getElementById("seedetailsc8");
const seedetails9 = document.getElementById("seedetailsc9");
const seedetails10 = document.getElementById("seedetailsc10");
const seedetails11 = document.getElementById("seedetailsc11");
const seedetails12 = document.getElementById("seedetailsc12");
const seedetails13 = document.getElementById("seedetailsc13");
const seedetails14 = document.getElementById("seedetailsc14");
const seedetails15 = document.getElementById("seedetailsc15");
const seedetails16 = document.getElementById("seedetailsc16");
const seedetails17 = document.getElementById("seedetailsc17");
const seedetails18 = document.getElementById("seedetailsc18");
const seedetails19 = document.getElementById("seedetailsc19");
const seedetails20 = document.getElementById("seedetailsc20");




// Open Comments
function showC1() {
    var divc1 = document.querySelector(".comsec1");
    divc1.style.display = "flex";
}
function hideC1() {
    var divc1 = document.querySelector(".comsec1");
    divc1.style.display = "none";
}
document.querySelector(".comc1").addEventListener("click", showC1);
document.querySelector(".comsecclose1").addEventListener("click", hideC1);


function showC2() {
    var divc2 = document.querySelector(".comsec2");
    divc2.style.display = "flex";
}
function hideC2() {
    var divc2 = document.querySelector(".comsec2");
    divc2.style.display = "none";
}
document.querySelector(".comc2").addEventListener("click", showC2);
document.querySelector(".comsecclose2").addEventListener("click", hideC2);


function showC3() {
    var divc3 = document.querySelector(".comsec3");
    divc3.style.display = "flex";
}
function hideC3() {
    var divc3 = document.querySelector(".comsec3");
    divc3.style.display = "none";
}
document.querySelector(".comc3").addEventListener("click", showC3);
document.querySelector(".comsecclose3").addEventListener("click", hideC3);


function showC4() {
    var divc4 = document.querySelector(".comsec4");
    divc4.style.display = "flex";
}
function hideC4() {
    var divc4 = document.querySelector(".comsec4");
    divc4.style.display = "none";
}
document.querySelector(".comc4").addEventListener("click", showC4);
document.querySelector(".comsecclose4").addEventListener("click", hideC4);


function showC5() {
    var divc5 = document.querySelector(".comsec5");
    divc5.style.display = "flex";
}
function hideC5() {
    var divc5 = document.querySelector(".comsec5");
    divc5.style.display = "none";
}
document.querySelector(".comc5").addEventListener("click", showC5);
document.querySelector(".comsecclose5").addEventListener("click", hideC5);


function showC6() {
    var divc6 = document.querySelector(".comsec6");
    divc6.style.display = "flex";
}
function hideC6() {
    var divc6 = document.querySelector(".comsec6");
    divc6.style.display = "none";
}
document.querySelector(".comc6").addEventListener("click", showC6);
document.querySelector(".comsecclose6").addEventListener("click", hideC6);


function showC7() {
    var divc7 = document.querySelector(".comsec7");
    divc7.style.display = "flex";
}
function hideC7() {
    var divc7 = document.querySelector(".comsec7");
    divc7.style.display = "none";
}
document.querySelector(".comc7").addEventListener("click", showC7);
document.querySelector(".comsecclose7").addEventListener("click", hideC7);


function showC8() {
    var divc8 = document.querySelector(".comsec8");
    divc8.style.display = "flex";
}
function hideC8() {
    var divc8 = document.querySelector(".comsec8");
    divc8.style.display = "none";
}
document.querySelector(".comc8").addEventListener("click", showC8);
document.querySelector(".comsecclose8").addEventListener("click", hideC8);


function showC9() {
    var divc9 = document.querySelector(".comsec9");
    divc9.style.display = "flex";
}
function hideC9() {
    var divc9 = document.querySelector(".comsec9");
    divc9.style.display = "none";
}
document.querySelector(".comc9").addEventListener("click", showC9);
document.querySelector(".comsecclose9").addEventListener("click", hideC9);


function showC10() {
    var divc10 = document.querySelector(".comsec10");
    divc10.style.display = "flex";
}
function hideC10() {
    var divc10 = document.querySelector(".comsec10");
    divc10.style.display = "none";
}
document.querySelector(".comc10").addEventListener("click", showC10);
document.querySelector(".comsecclose10").addEventListener("click", hideC10);


function showC11() {
    var divc11 = document.querySelector(".comsec11");
    divc11.style.display = "flex";
}
function hideC11() {
    var divc11 = document.querySelector(".comsec11");
    divc11.style.display = "none";
}
document.querySelector(".comc11").addEventListener("click", showC11);
document.querySelector(".comsecclose11").addEventListener("click", hideC11);


function showC12() {
    var divc12 = document.querySelector(".comsec12");
    divc12.style.display = "flex";
}
function hideC12() {
    var divc12 = document.querySelector(".comsec12");
    divc12.style.display = "none";
}
document.querySelector(".comc12").addEventListener("click", showC12);
document.querySelector(".comsecclose12").addEventListener("click", hideC12);


function showC13() {
    var divc13 = document.querySelector(".comsec13");
    divc13.style.display = "flex";
}
function hideC13() {
    var divc13 = document.querySelector(".comsec13");
    divc13.style.display = "none";
}
document.querySelector(".comc13").addEventListener("click", showC13);
document.querySelector(".comsecclose13").addEventListener("click", hideC13);


function showC14() {
    var divc14 = document.querySelector(".comsec14");
    divc14.style.display = "flex";
}
function hideC14() {
    var divc14 = document.querySelector(".comsec14");
    divc14.style.display = "none";
}
document.querySelector(".comc14").addEventListener("click", showC14);
document.querySelector(".comsecclose14").addEventListener("click", hideC14);


function showC15() {
    var divc15 = document.querySelector(".comsec15");
    divc15.style.display = "flex";
}
function hideC15() {
    var divc15 = document.querySelector(".comsec15");
    divc15.style.display = "none";
}
document.querySelector(".comc15").addEventListener("click", showC15);
document.querySelector(".comsecclose15").addEventListener("click", hideC15);


function showC16() {
    var divc16 = document.querySelector(".comsec16");
    divc16.style.display = "flex";
}
function hideC16() {
    var divc16 = document.querySelector(".comsec16");
    divc16.style.display = "none";
}
document.querySelector(".comc16").addEventListener("click", showC16);
document.querySelector(".comsecclose16").addEventListener("click", hideC16);


function showC17() {
    var divc17 = document.querySelector(".comsec17");
    divc17.style.display = "flex";
}
function hideC17() {
    var divc17 = document.querySelector(".comsec17");
    divc17.style.display = "none";
}
document.querySelector(".comc17").addEventListener("click", showC17);
document.querySelector(".comsecclose17").addEventListener("click", hideC17);


function showC18() {
    var divc18 = document.querySelector(".comsec18");
    divc18.style.display = "flex";
}
function hideC18() {
    var divc18 = document.querySelector(".comsec18");
    divc18.style.display = "none";
}
document.querySelector(".comc18").addEventListener("click", showC18);
document.querySelector(".comsecclose18").addEventListener("click", hideC18);


function showC19() {
    var divc19 = document.querySelector(".comsec19");
    divc19.style.display = "flex";
}
function hideC19() {
    var divc19 = document.querySelector(".comsec19");
    divc19.style.display = "none";
}
document.querySelector(".comc19").addEventListener("click", showC19);
document.querySelector(".comsecclose19").addEventListener("click", hideC19);


function showC20() {
    var divc20 = document.querySelector(".comsec20");
    divc20.style.display = "flex";
}
function hideC20() {
    var divc20 = document.querySelector(".comsec20");
    divc20.style.display = "none";
}
document.querySelector(".comc20").addEventListener("click", showC20);
document.querySelector(".comsecclose20").addEventListener("click", hideC20);

// Comment submit function
const nameInputc1 = document.getElementById("namec1");
const emailInputc1 = document.getElementById("emailc1");
const commentInputc1 = document.getElementById("commentc1");
const submitButtonc1 = document.getElementById("subc1");
const replyContainerc1 = document.getElementById("repc1");

function handleFormSubmitc1() {
    const namec1 = nameInputc1.value;
    const emailc1 = emailInputc1.value;
    const commentc1 = commentInputc1.value;

    if (namec1 === "" || emailc1 === "" || commentc1 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc1 = document.createElement("div");
        replyDivc1.classList.add("replyc1");
        const nameParagraphc1 = document.createElement("p");
        nameParagraphc1.textContent = namec1;
        const emailParagraphc1 = document.createElement("p");
        emailParagraphc1.textContent = emailc1;
        const commentParagraphc1 = document.createElement("p");
        commentParagraphc1.textContent = commentc1;

        replyDivc1.appendChild(nameParagraphc1);
        replyDivc1.appendChild(emailParagraphc1);

        const starRatingContainerc1 = document.createElement("div");
        starRatingContainerc1.classList.add("starc1");
        const starRatingc1 = document.querySelectorAll(
            ".starc1 a.fa-solid.fa-star"
        );
        starRatingc1.forEach((starsc1) => {
            const clonedStarc1 = starsc1.cloneNode(true);
            starRatingContainerc1.appendChild(clonedStarc1);
        });
        replyDivc1.appendChild(starRatingContainerc1);
        replyDivc1.appendChild(commentParagraphc1);
        replyContainerc1.appendChild(replyDivc1);

        const hrElementc1 = document.createElement("hr");
        replyContainerc1.appendChild(hrElementc1);
        starsc1.forEach((starc1) => {
            starc1.classList.remove("active");
        });

        nameInputc1.value = "";
        emailInputc1.value = "";
        commentInputc1.value = "";
    }
}
submitButtonc1.addEventListener("click", handleFormSubmitc1);


const nameInputc2 = document.getElementById("namec2");
const emailInputc2 = document.getElementById("emailc2");
const commentInputc2 = document.getElementById("commentc2");
const submitButtonc2 = document.getElementById("subc2");
const replyContainerc2 = document.getElementById("repc2");

function handleFormSubmitc2() {
    const namec2 = nameInputc2.value;
    const emailc2 = emailInputc2.value;
    const commentc2 = commentInputc2.value;

    if (namec2 === "" || emailc2 === "" || commentc2 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc2 = document.createElement("div");
        replyDivc2.classList.add("replyc2");
        const nameParagraphc2 = document.createElement("p");
        nameParagraphc2.textContent = namec2;
        const emailParagraphc2 = document.createElement("p");
        emailParagraphc2.textContent = emailc2;
        const commentParagraphc2 = document.createElement("p");
        commentParagraphc2.textContent = commentc2;

        replyDivc2.appendChild(nameParagraphc2);
        replyDivc2.appendChild(emailParagraphc2);

        const starRatingContainerc2 = document.createElement("div");
        starRatingContainerc2.classList.add("starc2");
        const starRatingc2 = document.querySelectorAll(
            ".starc2 a.fa-solid.fa-star"
        );
        starRatingc2.forEach((starsc2) => {
            const clonedStarc2 = starsc2.cloneNode(true);
            starRatingContainerc2.appendChild(clonedStarc2);
        });
        replyDivc2.appendChild(starRatingContainerc2);
        replyDivc2.appendChild(commentParagraphc2);
        replyContainerc2.appendChild(replyDivc2);

        const hrElementc2 = document.createElement("hr");
        replyContainerc2.appendChild(hrElementc2);
        starsc2.forEach((starc2) => {
            starc2.classList.remove("active");
        });

        nameInputc2.value = "";
        emailInputc2.value = "";
        commentInputc2.value = "";
    }
}
submitButtonc2.addEventListener("click", handleFormSubmitc2);


const nameInputc3 = document.getElementById("namec3");
const emailInputc3 = document.getElementById("emailc3");
const commentInputc3 = document.getElementById("commentc3");
const submitButtonc3 = document.getElementById("subc3");
const replyContainerc3 = document.getElementById("repc3");

function handleFormSubmitc3() {
    const namec3 = nameInputc3.value;
    const emailc3 = emailInputc3.value;
    const commentc3 = commentInputc3.value;

    if (namec3 === "" || emailc3 === "" || commentc3 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc3 = document.createElement("div");
        replyDivc3.classList.add("replyc3");
        const nameParagraphc3 = document.createElement("p");
        nameParagraphc3.textContent = namec3;
        const emailParagraphc3 = document.createElement("p");
        emailParagraphc3.textContent = emailc3;
        const commentParagraphc3 = document.createElement("p");
        commentParagraphc3.textContent = commentc3;

        replyDivc3.appendChild(nameParagraphc3);
        replyDivc3.appendChild(emailParagraphc3);

        const starRatingContainerc3 = document.createElement("div");
        starRatingContainerc3.classList.add("starc3");
        const starRatingc3 = document.querySelectorAll(
            ".starc3 a.fa-solid.fa-star"
        );
        starRatingc3.forEach((starsc3) => {
            const clonedStarc3 = starsc3.cloneNode(true);
            starRatingContainerc3.appendChild(clonedStarc3);
        });
        replyDivc3.appendChild(starRatingContainerc3);
        replyDivc3.appendChild(commentParagraphc3);
        replyContainerc3.appendChild(replyDivc3);

        const hrElementc3 = document.createElement("hr");
        replyContainerc3.appendChild(hrElementc3);
        starsc3.forEach((starc3) => {
            starc3.classList.remove("active");
        });

        nameInputc3.value = "";
        emailInputc3.value = "";
        commentInputc3.value = "";
    }
}
submitButtonc3.addEventListener("click", handleFormSubmitc3);


const nameInputc4 = document.getElementById("namec4");
const emailInputc4 = document.getElementById("emailc4");
const commentInputc4 = document.getElementById("commentc4");
const submitButtonc4 = document.getElementById("subc4");
const replyContainerc4 = document.getElementById("repc4");

function handleFormSubmitc4() {
    const namec4 = nameInputc4.value;
    const emailc4 = emailInputc4.value;
    const commentc4 = commentInputc4.value;

    if (namec4 === "" || emailc4 === "" || commentc4 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc4 = document.createElement("div");
        replyDivc4.classList.add("replyc4");
        const nameParagraphc4 = document.createElement("p");
        nameParagraphc4.textContent = namec4;
        const emailParagraphc4 = document.createElement("p");
        emailParagraphc4.textContent = emailc4;
        const commentParagraphc4 = document.createElement("p");
        commentParagraphc4.textContent = commentc4;

        replyDivc4.appendChild(nameParagraphc4);
        replyDivc4.appendChild(emailParagraphc4);

        const starRatingContainerc4 = document.createElement("div");
        starRatingContainerc4.classList.add("starc4");
        const starRatingc4 = document.querySelectorAll(
            ".starc4 a.fa-solid.fa-star"
        );
        starRatingc4.forEach((starsc4) => {
            const clonedStarc4 = starsc4.cloneNode(true);
            starRatingContainerc4.appendChild(clonedStarc4);
        });
        replyDivc4.appendChild(starRatingContainerc4);
        replyDivc4.appendChild(commentParagraphc4);
        replyContainerc4.appendChild(replyDivc4);

        const hrElementc4 = document.createElement("hr");
        replyContainerc4.appendChild(hrElementc4);
        starsc4.forEach((starc4) => {
            starc4.classList.remove("active");
        });

        nameInputc4.value = "";
        emailInputc4.value = "";
        commentInputc4.value = "";
    }
}
submitButtonc4.addEventListener("click", handleFormSubmitc4);


const nameInputc5 = document.getElementById("namec5");
const emailInputc5 = document.getElementById("emailc5");
const commentInputc5 = document.getElementById("commentc5");
const submitButtonc5 = document.getElementById("subc5");
const replyContainerc5 = document.getElementById("repc5");

function handleFormSubmitc5() {
    const namec5 = nameInputc5.value;
    const emailc5 = emailInputc5.value;
    const commentc5 = commentInputc5.value;

    if (namec5 === "" || emailc5 === "" || commentc5 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc5 = document.createElement("div");
        replyDivc5.classList.add("replyc5");
        const nameParagraphc5 = document.createElement("p");
        nameParagraphc5.textContent = namec5;
        const emailParagraphc5 = document.createElement("p");
        emailParagraphc5.textContent = emailc5;
        const commentParagraphc5 = document.createElement("p");
        commentParagraphc5.textContent = commentc5;

        replyDivc5.appendChild(nameParagraphc5);
        replyDivc5.appendChild(emailParagraphc5);

        const starRatingContainerc5 = document.createElement("div");
        starRatingContainerc5.classList.add("starc5");
        const starRatingc5 = document.querySelectorAll(
            ".starc5 a.fa-solid.fa-star"
        );
        starRatingc5.forEach((starsc5) => {
            const clonedStarc5 = starsc5.cloneNode(true);
            starRatingContainerc5.appendChild(clonedStarc5);
        });
        replyDivc5.appendChild(starRatingContainerc5);
        replyDivc5.appendChild(commentParagraphc5);
        replyContainerc5.appendChild(replyDivc5);

        const hrElementc5 = document.createElement("hr");
        replyContainerc5.appendChild(hrElementc5);
        starsc5.forEach((starc5) => {
            starc5.classList.remove("active");
        });

        nameInputc5.value = "";
        emailInputc5.value = "";
        commentInputc5.value = "";
    }
}
submitButtonc5.addEventListener("click", handleFormSubmitc5);


const nameInputc6 = document.getElementById("namec6");
const emailInputc6 = document.getElementById("emailc6");
const commentInputc6 = document.getElementById("commentc6");
const submitButtonc6 = document.getElementById("subc6");
const replyContainerc6 = document.getElementById("repc6");

function handleFormSubmitc6() {
    const namec6 = nameInputc6.value;
    const emailc6 = emailInputc6.value;
    const commentc6 = commentInputc6.value;

    if (namec6 === "" || emailc6 === "" || commentc6 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc6 = document.createElement("div");
        replyDivc6.classList.add("replyc6");
        const nameParagraphc6 = document.createElement("p");
        nameParagraphc6.textContent = namec6;
        const emailParagraphc6 = document.createElement("p");
        emailParagraphc6.textContent = emailc6;
        const commentParagraphc6 = document.createElement("p");
        commentParagraphc6.textContent = commentc6;

        replyDivc6.appendChild(nameParagraphc6);
        replyDivc6.appendChild(emailParagraphc6);

        const starRatingContainerc6 = document.createElement("div");
        starRatingContainerc6.classList.add("starc6");
        const starRatingc6 = document.querySelectorAll(
            ".starc6 a.fa-solid.fa-star"
        );
        starRatingc6.forEach((starsc6) => {
            const clonedStarc6 = starsc6.cloneNode(true);
            starRatingContainerc6.appendChild(clonedStarc6);
        });
        replyDivc6.appendChild(starRatingContainerc6);
        replyDivc6.appendChild(commentParagraphc6);
        replyContainerc6.appendChild(replyDivc6);

        const hrElementc6 = document.createElement("hr");
        replyContainerc6.appendChild(hrElementc6);
        starsc6.forEach((starc6) => {
            starc6.classList.remove("active");
        });

        nameInputc6.value = "";
        emailInputc6.value = "";
        commentInputc6.value = "";
    }
}
submitButtonc6.addEventListener("click", handleFormSubmitc6);


const nameInputc7 = document.getElementById("namec7");
const emailInputc7 = document.getElementById("emailc7");
const commentInputc7 = document.getElementById("commentc7");
const submitButtonc7 = document.getElementById("subc7");
const replyContainerc7 = document.getElementById("repc7");

function handleFormSubmitc7() {
    const namec7 = nameInputc7.value;
    const emailc7 = emailInputc7.value;
    const commentc7 = commentInputc7.value;

    if (namec7 === "" || emailc7 === "" || commentc7 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc7 = document.createElement("div");
        replyDivc7.classList.add("replyc7");
        const nameParagraphc7 = document.createElement("p");
        nameParagraphc7.textContent = namec7;
        const emailParagraphc7 = document.createElement("p");
        emailParagraphc7.textContent = emailc7;
        const commentParagraphc7 = document.createElement("p");
        commentParagraphc7.textContent = commentc7;

        replyDivc7.appendChild(nameParagraphc7);
        replyDivc7.appendChild(emailParagraphc7);

        const starRatingContainerc7 = document.createElement("div");
        starRatingContainerc7.classList.add("starc7");
        const starRatingc7 = document.querySelectorAll(
            ".starc7 a.fa-solid.fa-star"
        );
        starRatingc7.forEach((starsc7) => {
            const clonedStarc7 = starsc7.cloneNode(true);
            starRatingContainerc7.appendChild(clonedStarc7);
        });
        replyDivc7.appendChild(starRatingContainerc7);
        replyDivc7.appendChild(commentParagraphc7);
        replyContainerc7.appendChild(replyDivc7);

        const hrElementc7 = document.createElement("hr");
        replyContainerc7.appendChild(hrElementc7);
        starsc7.forEach((starc7) => {
            starc7.classList.remove("active");
        });

        nameInputc7.value = "";
        emailInputc7.value = "";
        commentInputc7.value = "";
    }
}
submitButtonc7.addEventListener("click", handleFormSubmitc7);


const nameInputc8 = document.getElementById("namec8");
const emailInputc8 = document.getElementById("emailc8");
const commentInputc8 = document.getElementById("commentc8");
const submitButtonc8 = document.getElementById("subc8");
const replyContainerc8 = document.getElementById("repc8");

function handleFormSubmitc8() {
    const namec8 = nameInputc8.value;
    const emailc8 = emailInputc8.value;
    const commentc8 = commentInputc8.value;

    if (namec8 === "" || emailc8 === "" || commentc8 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc8 = document.createElement("div");
        replyDivc8.classList.add("replyc8");
        const nameParagraphc8 = document.createElement("p");
        nameParagraphc8.textContent = namec8;
        const emailParagraphc8 = document.createElement("p");
        emailParagraphc8.textContent = emailc8;
        const commentParagraphc8 = document.createElement("p");
        commentParagraphc8.textContent = commentc8;

        replyDivc8.appendChild(nameParagraphc8);
        replyDivc8.appendChild(emailParagraphc8);

        const starRatingContainerc8 = document.createElement("div");
        starRatingContainerc8.classList.add("starc8");
        const starRatingc8 = document.querySelectorAll(
            ".starc8 a.fa-solid.fa-star"
        );
        starRatingc8.forEach((starsc8) => {
            const clonedStarc8 = starsc8.cloneNode(true);
            starRatingContainerc8.appendChild(clonedStarc8);
        });
        replyDivc8.appendChild(starRatingContainerc8);
        replyDivc8.appendChild(commentParagraphc8);
        replyContainerc8.appendChild(replyDivc8);

        const hrElementc8 = document.createElement("hr");
        replyContainerc8.appendChild(hrElementc8);
        starsc8.forEach((starc8) => {
            starc8.classList.remove("active");
        });

        nameInputc8.value = "";
        emailInputc8.value = "";
        commentInputc8.value = "";
    }
}
submitButtonc8.addEventListener("click", handleFormSubmitc8);


const nameInputc9 = document.getElementById("namec9");
const emailInputc9 = document.getElementById("emailc9");
const commentInputc9 = document.getElementById("commentc9");
const submitButtonc9 = document.getElementById("subc9");
const replyContainerc9 = document.getElementById("repc9");

function handleFormSubmitc9() {
    const namec9 = nameInputc9.value;
    const emailc9 = emailInputc9.value;
    const commentc9 = commentInputc9.value;

    if (namec9 === "" || emailc9 === "" || commentc9 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc9 = document.createElement("div");
        replyDivc9.classList.add("replyc9");
        const nameParagraphc9 = document.createElement("p");
        nameParagraphc9.textContent = namec9;
        const emailParagraphc9 = document.createElement("p");
        emailParagraphc9.textContent = emailc9;
        const commentParagraphc9 = document.createElement("p");
        commentParagraphc9.textContent = commentc9;

        replyDivc9.appendChild(nameParagraphc9);
        replyDivc9.appendChild(emailParagraphc9);

        const starRatingContainerc9 = document.createElement("div");
        starRatingContainerc9.classList.add("starc9");
        const starRatingc9 = document.querySelectorAll(
            ".starc9 a.fa-solid.fa-star"
        );
        starRatingc9.forEach((starsc9) => {
            const clonedStarc9 = starsc9.cloneNode(true);
            starRatingContainerc9.appendChild(clonedStarc9);
        });
        replyDivc9.appendChild(starRatingContainerc9);
        replyDivc9.appendChild(commentParagraphc9);
        replyContainerc9.appendChild(replyDivc9);

        const hrElementc9 = document.createElement("hr");
        replyContainerc9.appendChild(hrElementc9);
        starsc1.forEach((starc9) => {
            starc9.classList.remove("active");
        });

        nameInputc9.value = "";
        emailInputc9.value = "";
        commentInputc9.value = "";
    }
}
submitButtonc9.addEventListener("click", handleFormSubmitc9);


const nameInputc10 = document.getElementById("namec10");
const emailInputc10 = document.getElementById("emailc10");
const commentInputc10 = document.getElementById("commentc10");
const submitButtonc10 = document.getElementById("subc10");
const replyContainerc10 = document.getElementById("repc10");

function handleFormSubmitc10() {
    const namec10 = nameInputc10.value;
    const emailc10 = emailInputc10.value;
    const commentc10 = commentInputc10.value;

    if (namec10 === "" || emailc10 === "" || commentc10 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc10 = document.createElement("div");
        replyDivc10.classList.add("replyc10");
        const nameParagraphc10 = document.createElement("p");
        nameParagraphc10.textContent = namec10;
        const emailParagraphc10 = document.createElement("p");
        emailParagraphc10.textContent = emailc10;
        const commentParagraphc10 = document.createElement("p");
        commentParagraphc10.textContent = commentc10;

        replyDivc10.appendChild(nameParagraphc10);
        replyDivc10.appendChild(emailParagraphc10);

        const starRatingContainerc10 = document.createElement("div");
        starRatingContainerc10.classList.add("starc10");
        const starRatingc10 = document.querySelectorAll(
            ".starc10 a.fa-solid.fa-star"
        );
        starRatingc10.forEach((starsc10) => {
            const clonedStarc10 = starsc10.cloneNode(true);
            starRatingContainerc10.appendChild(clonedStarc10);
        });
        replyDivc10.appendChild(starRatingContainerc10);
        replyDivc10.appendChild(commentParagraphc10);
        replyContainerc10.appendChild(replyDivc10);

        const hrElementc10 = document.createElement("hr");
        replyContainerc10.appendChild(hrElementc10);
        starsc10.forEach((starc10) => {
            starc10.classList.remove("active");
        });

        nameInputc10.value = "";
        emailInputc10.value = "";
        commentInputc10.value = "";
    }
}
submitButtonc10.addEventListener("click", handleFormSubmitc10);


const nameInputc11 = document.getElementById("namec11");
const emailInputc11 = document.getElementById("emailc11");
const commentInputc11 = document.getElementById("commentc11");
const submitButtonc11 = document.getElementById("subc11");
const replyContainerc11 = document.getElementById("repc11");

function handleFormSubmitc11() {
    const namec11 = nameInputc11.value;
    const emailc11 = emailInputc11.value;
    const commentc11 = commentInputc11.value;

    if (namec11 === "" || emailc11 === "" || commentc11 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc11 = document.createElement("div");
        replyDivc11.classList.add("replyc1");
        const nameParagraphc11 = document.createElement("p");
        nameParagraphc11.textContent = namec11;
        const emailParagraphc11 = document.createElement("p");
        emailParagraphc11.textContent = emailc11;
        const commentParagraphc11 = document.createElement("p");
        commentParagraphc11.textContent = commentc11;

        replyDivc11.appendChild(nameParagraphc11);
        replyDivc11.appendChild(emailParagraphc11);

        const starRatingContainerc11 = document.createElement("div");
        starRatingContainerc11.classList.add("starc11");
        const starRatingc11 = document.querySelectorAll(
            ".starc11 a.fa-solid.fa-star"
        );
        starRatingc11.forEach((starsc11) => {
            const clonedStarc11 = starsc11.cloneNode(true);
            starRatingContainerc11.appendChild(clonedStarc11);
        });
        replyDivc11.appendChild(starRatingContainerc11);
        replyDivc11.appendChild(commentParagraphc11);
        replyContainerc11.appendChild(replyDivc11);

        const hrElementc11 = document.createElement("hr");
        replyContainerc11.appendChild(hrElementc11);
        starsc11.forEach((starc11) => {
            starc11.classList.remove("active");
        });

        nameInputc11.value = "";
        emailInputc11.value = "";
        commentInputc11.value = "";
    }
}
submitButtonc11.addEventListener("click", handleFormSubmitc11);


const nameInputc12 = document.getElementById("namec12");
const emailInputc12 = document.getElementById("emailc12");
const commentInputc12 = document.getElementById("commentc12");
const submitButtonc12 = document.getElementById("subc12");
const replyContainerc12 = document.getElementById("repc12");

function handleFormSubmitc12() {
    const namec12 = nameInputc12.value;
    const emailc12 = emailInputc12.value;
    const commentc12 = commentInputc12.value;

    if (namec12 === "" || emailc12 === "" || commentc12 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc12 = document.createElement("div");
        replyDivc12.classList.add("replyc12");
        const nameParagraphc12 = document.createElement("p");
        nameParagraphc12.textContent = namec12;
        const emailParagraphc12 = document.createElement("p");
        emailParagraphc12.textContent = emailc12;
        const commentParagraphc12 = document.createElement("p");
        commentParagraphc12.textContent = commentc12;

        replyDivc12.appendChild(nameParagraphc12);
        replyDivc12.appendChild(emailParagraphc12);

        const starRatingContainerc12 = document.createElement("div");
        starRatingContainerc12.classList.add("starc12");
        const starRatingc12 = document.querySelectorAll(
            ".starc12 a.fa-solid.fa-star"
        );
        starRatingc12.forEach((starsc12) => {
            const clonedStarc12 = starsc12.cloneNode(true);
            starRatingContainerc12.appendChild(clonedStarc12);
        });
        replyDivc12.appendChild(starRatingContainerc12);
        replyDivc12.appendChild(commentParagraphc12);
        replyContainerc12.appendChild(replyDivc12);

        const hrElementc12 = document.createElement("hr");
        replyContainerc12.appendChild(hrElementc12);
        starsc12.forEach((starc12) => {
            starc12.classList.remove("active");
        });

        nameInputc12.value = "";
        emailInputc12.value = "";
        commentInputc12.value = "";
    }
}
submitButtonc12.addEventListener("click", handleFormSubmitc12);


const nameInputc13 = document.getElementById("namec13");
const emailInputc13 = document.getElementById("emailc13");
const commentInputc13 = document.getElementById("commentc13");
const submitButtonc13 = document.getElementById("subc13");
const replyContainerc13 = document.getElementById("repc13");

function handleFormSubmitc13() {
    const namec13 = nameInputc13.value;
    const emailc13 = emailInputc13.value;
    const commentc13 = commentInputc13.value;

    if (namec13 === "" || emailc13 === "" || commentc13 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc13 = document.createElement("div");
        replyDivc13.classList.add("replyc13");
        const nameParagraphc13 = document.createElement("p");
        nameParagraphc13.textContent = namec13;
        const emailParagraphc13 = document.createElement("p");
        emailParagraphc13.textContent = emailc13;
        const commentParagraphc13 = document.createElement("p");
        commentParagraphc13.textContent = commentc13;

        replyDivc13.appendChild(nameParagraphc13);
        replyDivc13.appendChild(emailParagraphc13);

        const starRatingContainerc13 = document.createElement("div");
        starRatingContainerc13.classList.add("starc13");
        const starRatingc13 = document.querySelectorAll(
            ".starc13 a.fa-solid.fa-star"
        );
        starRatingc13.forEach((starsc13) => {
            const clonedStarc13 = starsc13.cloneNode(true);
            starRatingContainerc13.appendChild(clonedStarc13);
        });
        replyDivc13.appendChild(starRatingContainerc13);
        replyDivc13.appendChild(commentParagraphc13);
        replyContainerc13.appendChild(replyDivc13);

        const hrElementc13 = document.createElement("hr");
        replyContainerc13.appendChild(hrElementc13);
        starsc13.forEach((starc13) => {
            starc13.classList.remove("active");
        });

        nameInputc13.value = "";
        emailInputc13.value = "";
        commentInputc13.value = "";
    }
}
submitButtonc13.addEventListener("click", handleFormSubmitc13);


const nameInputc14 = document.getElementById("namec14");
const emailInputc14 = document.getElementById("emailc14");
const commentInputc14 = document.getElementById("commentc14");
const submitButtonc14 = document.getElementById("subc14");
const replyContainerc14 = document.getElementById("repc14");

function handleFormSubmitc14() {
    const namec14 = nameInputc14.value;
    const emailc14 = emailInputc14.value;
    const commentc14 = commentInputc14.value;

    if (namec14 === "" || emailc14 === "" || commentc14 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc14 = document.createElement("div");
        replyDivc14.classList.add("replyc14");
        const nameParagraphc14 = document.createElement("p");
        nameParagraphc14.textContent = namec14;
        const emailParagraphc14 = document.createElement("p");
        emailParagraphc14.textContent = emailc14;
        const commentParagraphc14 = document.createElement("p");
        commentParagraphc14.textContent = commentc14;

        replyDivc14.appendChild(nameParagraphc14);
        replyDivc14.appendChild(emailParagraphc14);

        const starRatingContainerc14 = document.createElement("div");
        starRatingContainerc14.classList.add("starc14");
        const starRatingc14 = document.querySelectorAll(
            ".starc14 a.fa-solid.fa-star"
        );
        starRatingc14.forEach((starsc14) => {
            const clonedStarc14 = starsc14.cloneNode(true);
            starRatingContainerc14.appendChild(clonedStarc14);
        });
        replyDivc14.appendChild(starRatingContainerc14);
        replyDivc14.appendChild(commentParagraphc14);
        replyContainerc14.appendChild(replyDivc14);

        const hrElementc14 = document.createElement("hr");
        replyContainerc14.appendChild(hrElementc14);
        starsc14.forEach((starc14) => {
            starc14.classList.remove("active");
        });

        nameInputc14.value = "";
        emailInputc14.value = "";
        commentInputc14.value = "";
    }
}
submitButtonc14.addEventListener("click", handleFormSubmitc14);


const nameInputc15 = document.getElementById("namec15");
const emailInputc15 = document.getElementById("emailc15");
const commentInputc15 = document.getElementById("commentc15");
const submitButtonc15 = document.getElementById("subc15");
const replyContainerc15 = document.getElementById("repc15");

function handleFormSubmitc15() {
    const namec15 = nameInputc15.value;
    const emailc15 = emailInputc15.value;
    const commentc15 = commentInputc15.value;

    if (namec15 === "" || emailc15 === "" || commentc15 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc15 = document.createElement("div");
        replyDivc15.classList.add("replyc15");
        const nameParagraphc15 = document.createElement("p");
        nameParagraphc15.textContent = namec15;
        const emailParagraphc15 = document.createElement("p");
        emailParagraphc15.textContent = emailc15;
        const commentParagraphc15 = document.createElement("p");
        commentParagraphc15.textContent = commentc15;

        replyDivc15.appendChild(nameParagraphc15);
        replyDivc15.appendChild(emailParagraphc15);

        const starRatingContainerc15 = document.createElement("div");
        starRatingContainerc15.classList.add("starc15");
        const starRatingc15 = document.querySelectorAll(
            ".starc15 a.fa-solid.fa-star"
        );
        starRatingc15.forEach((starsc15) => {
            const clonedStarc15 = starsc15.cloneNode(true);
            starRatingContainerc15.appendChild(clonedStarc15);
        });
        replyDivc15.appendChild(starRatingContainerc15);
        replyDivc15.appendChild(commentParagraphc15);
        replyContainerc15.appendChild(replyDivc15);

        const hrElementc15 = document.createElement("hr");
        replyContainerc15.appendChild(hrElementc15);
        starsc15.forEach((starc15) => {
            starc15.classList.remove("active");
        });

        nameInputc15.value = "";
        emailInputc15.value = "";
        commentInputc15.value = "";
    }
}
submitButtonc15.addEventListener("click", handleFormSubmitc15);


const nameInputc16 = document.getElementById("namec16");
const emailInputc16 = document.getElementById("emailc16");
const commentInputc16 = document.getElementById("commentc16");
const submitButtonc16 = document.getElementById("subc16");
const replyContainerc16 = document.getElementById("repc16");

function handleFormSubmitc16() {
    const namec16 = nameInputc16.value;
    const emailc16 = emailInputc16.value;
    const commentc16 = commentInputc16.value;

    if (namec16 === "" || emailc16 === "" || commentc16 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc16 = document.createElement("div");
        replyDivc16.classList.add("replyc16");
        const nameParagraphc16 = document.createElement("p");
        nameParagraphc16.textContent = namec16;
        const emailParagraphc16 = document.createElement("p");
        emailParagraphc16.textContent = emailc16;
        const commentParagraphc16 = document.createElement("p");
        commentParagraphc16.textContent = commentc16;

        replyDivc16.appendChild(nameParagraphc16);
        replyDivc16.appendChild(emailParagraphc16);

        const starRatingContainerc16 = document.createElement("div");
        starRatingContainerc16.classList.add("starc16");
        const starRatingc16 = document.querySelectorAll(
            ".starc16 a.fa-solid.fa-star"
        );
        starRatingc16.forEach((starsc16) => {
            const clonedStarc16 = starsc16.cloneNode(true);
            starRatingContainerc16.appendChild(clonedStarc16);
        });
        replyDivc16.appendChild(starRatingContainerc16);
        replyDivc16.appendChild(commentParagraphc16);
        replyContainerc16.appendChild(replyDivc16);

        const hrElementc16 = document.createElement("hr");
        replyContainerc16.appendChild(hrElementc16);
        starsc16.forEach((starc16) => {
            starc16.classList.remove("active");
        });

        nameInputc16.value = "";
        emailInputc16.value = "";
        commentInputc16.value = "";
    }
}
submitButtonc16.addEventListener("click", handleFormSubmitc16);


const nameInputc17 = document.getElementById("namec17");
const emailInputc17 = document.getElementById("emailc17");
const commentInputc17 = document.getElementById("commentc17");
const submitButtonc17 = document.getElementById("subc17");
const replyContainerc17 = document.getElementById("repc17");

function handleFormSubmitc17() {
    const namec17 = nameInputc17.value;
    const emailc17 = emailInputc17.value;
    const commentc17 = commentInputc17.value;

    if (namec17 === "" || emailc17 === "" || commentc17 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc17 = document.createElement("div");
        replyDivc17.classList.add("replyc17");
        const nameParagraphc17 = document.createElement("p");
        nameParagraphc17.textContent = namec17;
        const emailParagraphc17 = document.createElement("p");
        emailParagraphc17.textContent = emailc17;
        const commentParagraphc17 = document.createElement("p");
        commentParagraphc17.textContent = commentc17;

        replyDivc17.appendChild(nameParagraphc17);
        replyDivc17.appendChild(emailParagraphc17);

        const starRatingContainerc17 = document.createElement("div");
        starRatingContainerc17.classList.add("starc17");
        const starRatingc17 = document.querySelectorAll(
            ".starc17 a.fa-solid.fa-star"
        );
        starRatingc17.forEach((starsc17) => {
            const clonedStarc17 = starsc17.cloneNode(true);
            starRatingContainerc17.appendChild(clonedStarc17);
        });
        replyDivc17.appendChild(starRatingContainerc17);
        replyDivc17.appendChild(commentParagraphc17);
        replyContainerc17.appendChild(replyDivc17);

        const hrElementc17 = document.createElement("hr");
        replyContainerc17.appendChild(hrElementc17);
        starsc17.forEach((starc17) => {
            starc17.classList.remove("active");
        });

        nameInputc17.value = "";
        emailInputc17.value = "";
        commentInputc17.value = "";
    }
}
submitButtonc17.addEventListener("click", handleFormSubmitc17);


const nameInputc18 = document.getElementById("namec18");
const emailInputc18 = document.getElementById("emailc18");
const commentInputc18 = document.getElementById("commentc18");
const submitButtonc18 = document.getElementById("subc18");
const replyContainerc18 = document.getElementById("repc18");

function handleFormSubmitc18() {
    const namec18 = nameInputc18.value;
    const emailc18 = emailInputc18.value;
    const commentc18 = commentInputc18.value;

    if (namec18 === "" || emailc18 === "" || commentc18 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc18 = document.createElement("div");
        replyDivc18.classList.add("replyc18");
        const nameParagraphc18 = document.createElement("p");
        nameParagraphc18.textContent = namec18;
        const emailParagraphc18 = document.createElement("p");
        emailParagraphc18.textContent = emailc18;
        const commentParagraphc18 = document.createElement("p");
        commentParagraphc18.textContent = commentc18;

        replyDivc18.appendChild(nameParagraphc18);
        replyDivc18.appendChild(emailParagraphc18);

        const starRatingContainerc18 = document.createElement("div");
        starRatingContainerc18.classList.add("starc18");
        const starRatingc18 = document.querySelectorAll(
            ".starc18 a.fa-solid.fa-star"
        );
        starRatingc18.forEach((starsc18) => {
            const clonedStarc18 = starsc18.cloneNode(true);
            starRatingContainerc18.appendChild(clonedStarc18);
        });
        replyDivc18.appendChild(starRatingContainerc18);
        replyDivc18.appendChild(commentParagraphc18);
        replyContainerc18.appendChild(replyDivc18);

        const hrElementc18 = document.createElement("hr");
        replyContainerc18.appendChild(hrElementc18);
        starsc18.forEach((starc18) => {
            starc18.classList.remove("active");
        });

        nameInputc18.value = "";
        emailInputc18.value = "";
        commentInputc18.value = "";
    }
}
submitButtonc18.addEventListener("click", handleFormSubmitc18);


const nameInputc19 = document.getElementById("namec19");
const emailInputc19 = document.getElementById("emailc19");
const commentInputc19 = document.getElementById("commentc19");
const submitButtonc19 = document.getElementById("subc19");
const replyContainerc19 = document.getElementById("repc19");

function handleFormSubmitc19() {
    const namec19 = nameInputc19.value;
    const emailc19 = emailInputc19.value;
    const commentc19 = commentInputc19.value;

    if (namec19 === "" || emailc19 === "" || commentc19 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc19 = document.createElement("div");
        replyDivc19.classList.add("replyc19");
        const nameParagraphc19 = document.createElement("p");
        nameParagraphc19.textContent = namec19;
        const emailParagraphc19 = document.createElement("p");
        emailParagraphc19.textContent = emailc19;
        const commentParagraphc19 = document.createElement("p");
        commentParagraphc19.textContent = commentc19;

        replyDivc19.appendChild(nameParagraphc19);
        replyDivc19.appendChild(emailParagraphc19);

        const starRatingContainerc19 = document.createElement("div");
        starRatingContainerc19.classList.add("starc19");
        const starRatingc19 = document.querySelectorAll(
            ".starc19 a.fa-solid.fa-star"
        );
        starRatingc19.forEach((starsc19) => {
            const clonedStarc19 = starsc19.cloneNode(true);
            starRatingContainerc19.appendChild(clonedStarc19);
        });
        replyDivc19.appendChild(starRatingContainerc19);
        replyDivc19.appendChild(commentParagraphc19);
        replyContainerc19.appendChild(replyDivc19);

        const hrElementc19 = document.createElement("hr");
        replyContainerc19.appendChild(hrElementc19);
        starsc19.forEach((starc19) => {
            starc19.classList.remove("active");
        });

        nameInputc19.value = "";
        emailInputc19.value = "";
        commentInputc19.value = "";
    }
}
submitButtonc19.addEventListener("click", handleFormSubmitc19);


const nameInputc20 = document.getElementById("namec20");
const emailInputc20 = document.getElementById("emailc20");
const commentInputc20 = document.getElementById("commentc20");
const submitButtonc20 = document.getElementById("subc20");
const replyContainerc20 = document.getElementById("repc20");

function handleFormSubmitc20() {
    const namec20 = nameInputc20.value;
    const emailc20 = emailInputc20.value;
    const commentc20 = commentInputc20.value;

    if (namec20 === "" || emailc20 === "" || commentc20 === "") {
        alert("Please input the required information.");
    } else {
        const replyDivc20 = document.createElement("div");
        replyDivc20.classList.add("replyc20");
        const nameParagraphc20 = document.createElement("p");
        nameParagraphc20.textContent = namec20;
        const emailParagraphc20 = document.createElement("p");
        emailParagraphc20.textContent = emailc20;
        const commentParagraphc20 = document.createElement("p");
        commentParagraphc20.textContent = commentc20;
        0
        replyDivc20.appendChild(nameParagraphc20);
        replyDivc20.appendChild(emailParagraphc20);

        const starRatingContainerc20 = document.createElement("div");
        starRatingContainerc20.classList.add("starc20");
        const starRatingc20 = document.querySelectorAll(
            ".starc20 a.fa-solid.fa-star"
        );
        starRatingc20.forEach((starsc20) => {
            const clonedStarc20 = starsc20.cloneNode(true);
            starRatingContainerc20.appendChild(clonedStarc20);
        });
        replyDivc20.appendChild(starRatingContainerc20);
        replyDivc20.appendChild(commentParagraphc20);
        replyContainerc20.appendChild(replyDivc20);

        const hrElementc20 = document.createElement("hr");
        replyContainerc20.appendChild(hrElementc20);
        starsc20.forEach((starc20) => {
            starc20.classList.remove("active");
        });

        nameInputc20.value = "";
        emailInputc20.value = "";
        commentInputc20.value = "";
    }
}
submitButtonc20.addEventListener("click", handleFormSubmitc20);


// Star Rating Function
const starsc1 = document.querySelectorAll(".starc1 a");
starsc1.forEach((starc1, index1) => {
    starc1.addEventListener("click", () => {
        starsc1.forEach((starc1, index2) => {
            if (index1 >= index2) {
                starc1.classList.add("active");
            } else {
                starc1.classList.remove("active");
            }
        });
    });
});

const starsc2 = document.querySelectorAll(".starc2 a");
starsc2.forEach((starc2, index1) => {
    starc2.addEventListener("click", () => {
        starsc2.forEach((starc2, index2) => {
            if (index1 >= index2) {
                starc2.classList.add("active");
            } else {
                starc2.classList.remove("active");
            }
        });
    });
});

const starsc3 = document.querySelectorAll(".starc3 a");
starsc3.forEach((starc3, index1) => {
    starc3.addEventListener("click", () => {
        starsc3.forEach((starc3, index2) => {
            if (index1 >= index2) {
                starc3.classList.add("active");
            } else {
                starc3.classList.remove("active");
            }
        });
    });
});

const starsc4 = document.querySelectorAll(".starc4 a");
starsc4.forEach((starc4, index1) => {
    starc4.addEventListener("click", () => {
        starsc4.forEach((starc4, index2) => {
            if (index1 >= index2) {
                starc4.classList.add("active");
            } else {
                starc4.classList.remove("active");
            }
        });
    });
});

const starsc5 = document.querySelectorAll(".starc5 a");
starsc5.forEach((starc5, index1) => {
    starc5.addEventListener("click", () => {
        starsc5.forEach((starc5, index2) => {
            if (index1 >= index2) {
                starc5.classList.add("active");
            } else {
                starc5.classList.remove("active");
            }
        });
    });
});

const starsc6 = document.querySelectorAll(".starc6 a");
starsc6.forEach((starc6, index1) => {
    starc6.addEventListener("click", () => {
        starsc6.forEach((starc6, index2) => {
            if (index1 >= index2) {
                starc6.classList.add("active");
            } else {
                starc6.classList.remove("active");
            }
        });
    });
});
const starsc7 = document.querySelectorAll(".starc7 a");
starsc7.forEach((starc7, index1) => {
    starc7.addEventListener("click", () => {
        starsc7.forEach((starc7, index2) => {
            if (index1 >= index2) {
                starc7.classList.add("active");
            } else {
                starc7.classList.remove("active");
            }
        });
    });
});
const starsc8 = document.querySelectorAll(".starc8 a");
starsc8.forEach((starc8, index1) => {
    starc8.addEventListener("click", () => {
        starsc8.forEach((starc8, index2) => {
            if (index1 >= index2) {
                starc8.classList.add("active");
            } else {
                starc8.classList.remove("active");
            }
        });
    });
});
const starsc9 = document.querySelectorAll(".starc9 a");
starsc9.forEach((starc9, index1) => {
    starc9.addEventListener("click", () => {
        starsc9.forEach((starc9, index2) => {
            if (index1 >= index2) {
                starc9.classList.add("active");
            } else {
                starc9.classList.remove("active");
            }
        });
    });
});
const starsc10 = document.querySelectorAll(".starc10 a");
starsc10.forEach((starc10, index1) => {
    starc10.addEventListener("click", () => {
        starsc10.forEach((starc10, index2) => {
            if (index1 >= index2) {
                starc10.classList.add("active");
            } else {
                starc10.classList.remove("active");
            }
        });
    });
});
const starsc11 = document.querySelectorAll(".starc11 a");
starsc11.forEach((starc11, index1) => {
    starc11.addEventListener("click", () => {
        starsc11.forEach((starc11, index2) => {
            if (index1 >= index2) {
                starc11.classList.add("active");
            } else {
                starc11.classList.remove("active");
            }
        });
    });
});
const starsc12 = document.querySelectorAll(".starc12 a");
starsc12.forEach((starc12, index1) => {
    starc12.addEventListener("click", () => {
        starsc12.forEach((starc12, index2) => {
            if (index1 >= index2) {
                starc12.classList.add("active");
            } else {
                starc12.classList.remove("active");
            }
        });
    });
});
const starsc13 = document.querySelectorAll(".starc13 a");
starsc13.forEach((starc13, index1) => {
    starc13.addEventListener("click", () => {
        starsc13.forEach((starc13, index2) => {
            if (index1 >= index2) {
                starc13.classList.add("active");
            } else {
                starc13.classList.remove("active");
            }
        });
    });
});
const starsc14 = document.querySelectorAll(".starc14 a");
starsc14.forEach((starc14, index1) => {
    starc14.addEventListener("click", () => {
        starsc14.forEach((starc14, index2) => {
            if (index1 >= index2) {
                starc14.classList.add("active");
            } else {
                starc14.classList.remove("active");
            }
        });
    });
});
const starsc15 = document.querySelectorAll(".starc15 a");
starsc15.forEach((starc15, index1) => {
    starc15.addEventListener("click", () => {
        starsc15.forEach((starc15, index2) => {
            if (index1 >= index2) {
                starc15.classList.add("active");
            } else {
                starc15.classList.remove("active");
            }
        });
    });
});
const starsc16 = document.querySelectorAll(".starc16 a");
starsc16.forEach((starc16, index1) => {
    starc16.addEventListener("click", () => {
        starsc16.forEach((starc16, index2) => {
            if (index1 >= index2) {
                starc16.classList.add("active");
            } else {
                starc16.classList.remove("active");
            }
        });
    });
});
const starsc17 = document.querySelectorAll(".starc17 a");
starsc17.forEach((starc17, index1) => {
    starc17.addEventListener("click", () => {
        starsc17.forEach((starc17, index2) => {
            if (index1 >= index2) {
                starc17.classList.add("active");
            } else {
                starc17.classList.remove("active");
            }
        });
    });
});
const starsc18 = document.querySelectorAll(".starc18 a");
starsc18.forEach((starc18, index1) => {
    starc18.addEventListener("click", () => {
        starsc18.forEach((starc18, index2) => {
            if (index1 >= index2) {
                starc18.classList.add("active");
            } else {
                starc18.classList.remove("active");
            }
        });
    });
});
const starsc19 = document.querySelectorAll(".starc19 a");
starsc19.forEach((starc19, index1) => {
    starc19.addEventListener("click", () => {
        starsc19.forEach((starc19, index2) => {
            if (index1 >= index2) {
                starc19.classList.add("active");
            } else {
                starc19.classList.remove("active");
            }
        });
    });
});
const starsc20 = document.querySelectorAll(".starc20 a");
starsc20.forEach((starc20, index1) => {
    starc20.addEventListener("click", () => {
        starsc20.forEach((starc20, index2) => {
            if (index1 >= index2) {
                starc20.classList.add("active");
            } else {
                starc20.classList.remove("active");
            }
        });
    });
});




// Open Bookin
function openbookinc1() {
    var bookindiv1 = document.getElementById("bookinc1");
    bookindiv1.style.display = "flex";
}
function closebookinc1() {
    var bookindiv1 = document.getElementById("bookinc1");
    bookindiv1.style.display = "none";
}
document.querySelector("#closebutc1").addEventListener("click", closebookinc1);
document.querySelector("#bookinbutc1").addEventListener("click", openbookinc1);


function openbookinc2() {
    var bookindiv2 = document.getElementById("bookinc2");
    bookindiv2.style.display = "flex";
}
function closebookinc2() {
    var bookindiv2 = document.getElementById("bookinc2");
    bookindiv2.style.display = "none";
}
document.querySelector("#closebutc2").addEventListener("click", closebookinc2);
document.querySelector("#bookinbutc2").addEventListener("click", openbookinc2);


function openbookinc3() {
    var bookindiv3 = document.getElementById("bookinc3");
    bookindiv3.style.display = "flex";
}
function closebookinc3() {
    var bookindiv3 = document.getElementById("bookinc3");
    bookindiv3.style.display = "none";
}
document.querySelector("#closebutc3").addEventListener("click", closebookinc3);
document.querySelector("#bookinbutc3").addEventListener("click", openbookinc3);


function openbookinc4() {
    var bookindiv4 = document.getElementById("bookinc4");
    bookindiv4.style.display = "flex";
}
function closebookinc4() {
    var bookindiv4 = document.getElementById("bookinc4");
    bookindiv4.style.display = "none";
}
document.querySelector("#closebutc4").addEventListener("click", closebookinc4);
document.querySelector("#bookinbutc4").addEventListener("click", openbookinc4);


function openbookinc5() {
    var bookindiv5 = document.getElementById("bookinc5");
    bookindiv5.style.display = "flex";
}
function closebookinc5() {
    var bookindiv5 = document.getElementById("bookinc5");
    bookindiv5.style.display = "none";
}
document.querySelector("#closebutc5").addEventListener("click", closebookinc5);
document.querySelector("#bookinbutc5").addEventListener("click", openbookinc5);


function openbookinc6() {
    var bookindiv6 = document.getElementById("bookinc6");
    bookindiv6.style.display = "flex";
}
function closebookinc6() {
    var bookindiv6 = document.getElementById("bookinc6");
    bookindiv6.style.display = "none";
}
document.querySelector("#closebutc6").addEventListener("click", closebookinc6);
document.querySelector("#bookinbutc6").addEventListener("click", openbookinc6);


function openbookinc7() {
    var bookindiv7 = document.getElementById("bookinc7");
    bookindiv7.style.display = "flex";
}
function closebookinc7() {
    var bookindiv7 = document.getElementById("bookinc7");
    bookindiv7.style.display = "none";
}
document.querySelector("#closebutc7").addEventListener("click", closebookinc7);
document.querySelector("#bookinbutc7").addEventListener("click", openbookinc7);


function openbookinc8() {
    var bookindiv8 = document.getElementById("bookinc8");
    bookindiv8.style.display = "flex";
}
function closebookinc8() {
    var bookindiv8 = document.getElementById("bookinc8");
    bookindiv8.style.display = "none";
}
document.querySelector("#closebutc8").addEventListener("click", closebookinc8);
document.querySelector("#bookinbutc8").addEventListener("click", openbookinc8);


function openbookinc9() {
    var bookindiv9 = document.getElementById("bookinc9");
    bookindiv9.style.display = "flex";
}
function closebookinc9() {
    var bookindiv9 = document.getElementById("bookinc9");
    bookindiv9.style.display = "none";
}
document.querySelector("#closebutc9").addEventListener("click", closebookinc9);
document.querySelector("#bookinbutc9").addEventListener("click", openbookinc9);


function openbookinc10() {
    var bookindiv10 = document.getElementById("bookinc10");
    bookindiv10.style.display = "flex";
}
function closebookinc10() {
    var bookindiv10 = document.getElementById("bookinc10");
    bookindiv10.style.display = "none";
}
document.querySelector("#closebutc10").addEventListener("click", closebookinc10);
document.querySelector("#bookinbutc10").addEventListener("click", openbookinc10);


function openbookinc11() {
    var bookindiv11 = document.getElementById("bookinc11");
    bookindiv11.style.display = "flex";
}
function closebookinc11() {
    var bookindiv11 = document.getElementById("bookinc11");
    bookindiv11.style.display = "none";
}
document.querySelector("#closebutc11").addEventListener("click", closebookinc11);
document.querySelector("#bookinbutc11").addEventListener("click", openbookinc11);


function openbookinc12() {
    var bookindiv12 = document.getElementById("bookinc12");
    bookindiv12.style.display = "flex";
}
function closebookinc12() {
    var bookindiv12 = document.getElementById("bookinc12");
    bookindiv12.style.display = "none";
}
document.querySelector("#closebutc12").addEventListener("click", closebookinc12);
document.querySelector("#bookinbutc12").addEventListener("click", openbookinc12);


function openbookinc13() {
    var bookindiv13 = document.getElementById("bookinc13");
    bookindiv13.style.display = "flex";
}
function closebookinc13() {
    var bookindiv13 = document.getElementById("bookinc13");
    bookindiv13.style.display = "none";
}
document.querySelector("#closebutc13").addEventListener("click", closebookinc13);
document.querySelector("#bookinbutc13").addEventListener("click", openbookinc13);


function openbookinc14() {
    var bookindiv14 = document.getElementById("bookinc14");
    bookindiv14.style.display = "flex";
}
function closebookinc14() {
    var bookindiv14 = document.getElementById("bookinc14");
    bookindiv14.style.display = "none";
}
document.querySelector("#closebutc14").addEventListener("click", closebookinc14);
document.querySelector("#bookinbutc14").addEventListener("click", openbookinc14);


function openbookinc15() {
    var bookindiv15 = document.getElementById("bookinc15");
    bookindiv15.style.display = "flex";
}
function closebookinc15() {
    var bookindiv15 = document.getElementById("bookinc15");
    bookindiv15.style.display = "none";
}
document.querySelector("#closebutc15").addEventListener("click", closebookinc15);
document.querySelector("#bookinbutc15").addEventListener("click", openbookinc15);


function openbookinc16() {
    var bookindiv16 = document.getElementById("bookinc16");
    bookindiv16.style.display = "flex";
}
function closebookinc16() {
    var bookindiv16 = document.getElementById("bookinc16");
    bookindiv16.style.display = "none";
}
document.querySelector("#closebutc16").addEventListener("click", closebookinc16);
document.querySelector("#bookinbutc16").addEventListener("click", openbookinc16);


function openbookinc17() {
    var bookindiv17 = document.getElementById("bookinc17");
    bookindiv17.style.display = "flex";
}
function closebookinc17() {
    var bookindiv17 = document.getElementById("bookinc17");
    bookindiv17.style.display = "none";
}
document.querySelector("#closebutc17").addEventListener("click", closebookinc17);
document.querySelector("#bookinbutc17").addEventListener("click", openbookinc17);


function openbookinc18() {
    var bookindiv18 = document.getElementById("bookinc18");
    bookindiv18.style.display = "flex";
}
function closebookinc18() {
    var bookindiv18 = document.getElementById("bookinc18");
    bookindiv18.style.display = "none";
}
document.querySelector("#closebutc18").addEventListener("click", closebookinc18);
document.querySelector("#bookinbutc18").addEventListener("click", openbookinc18);


function openbookinc19() {
    var bookindiv19 = document.getElementById("bookinc19");
    bookindiv19.style.display = "flex";
}
function closebookinc19() {
    var bookindiv19 = document.getElementById("bookinc19");
    bookindiv19.style.display = "none";
}
document.querySelector("#closebutc19").addEventListener("click", closebookinc19);
document.querySelector("#bookinbutc19").addEventListener("click", openbookinc19);


function openbookinc20() {
    var bookindiv20 = document.getElementById("bookinc20");
    bookindiv20.style.display = "flex";
}
function closebookinc20() {
    var bookindiv20 = document.getElementById("bookinc20");
    bookindiv20.style.display = "none";
}
document.querySelector("#closebutc20").addEventListener("click", closebookinc20);
document.querySelector("#bookinbutc20").addEventListener("click", openbookinc20);

// Open Details
function opendetails1() {
    var details1 = document.querySelector(".dtresdetailsc1");
    details1.style.display = "block";
}
function closedetailsc1() {
    var details1 = document.querySelector(".dtresdetailsc1");
    details1.style.display = "none";
}
document.getElementById("seedetailsc1").addEventListener("click", opendetails1);
document.getElementById("okc1").addEventListener("click", closedetailsc1);


function opendetails2() {
    var details2 = document.querySelector(".dtresdetailsc2");
    details2.style.display = "block";
}
function closedetailsc2() {
    var details2 = document.querySelector(".dtresdetailsc2");
    details2.style.display = "none";
}
document.getElementById("seedetailsc2").addEventListener("click", opendetails2);
document.getElementById("okc2").addEventListener("click", closedetailsc2);


function opendetails3() {
    var details3 = document.querySelector(".dtresdetailsc3");
    details3.style.display = "block";
}
function closedetailsc3() {
    var details3 = document.querySelector(".dtresdetailsc3");
    details3.style.display = "none";
}
document.getElementById("seedetailsc3").addEventListener("click", opendetails3);
document.getElementById("okc3").addEventListener("click", closedetailsc3);


function opendetails4() {
    var details4 = document.querySelector(".dtresdetailsc4");
    details4.style.display = "block";
}
function closedetailsc4() {
    var details4 = document.querySelector(".dtresdetailsc4");
    details4.style.display = "none";
}
document.getElementById("seedetailsc4").addEventListener("click", opendetails4);
document.getElementById("okc4").addEventListener("click", closedetailsc4);


function opendetails5() {
    var details5 = document.querySelector(".dtresdetailsc5");
    details5.style.display = "block";
}
function closedetailsc5() {
    var details5 = document.querySelector(".dtresdetailsc5");
    details5.style.display = "none";
}
document.getElementById("seedetailsc5").addEventListener("click", opendetails5);
document.getElementById("okc5").addEventListener("click", closedetailsc5);


function opendetails6() {
    var details6 = document.querySelector(".dtresdetailsc6");
    details6.style.display = "block";
}
function closedetailsc6() {
    var details6 = document.querySelector(".dtresdetailsc6");
    details6.style.display = "none";
}
document.getElementById("seedetailsc6").addEventListener("click", opendetails6);
document.getElementById("okc6").addEventListener("click", closedetailsc6);


function opendetails7() {
    var details7 = document.querySelector(".dtresdetailsc7");
    details7.style.display = "block";
}
function closedetailsc7() {
    var details7 = document.querySelector(".dtresdetailsc7");
    details7.style.display = "none";
}
document.getElementById("seedetailsc7").addEventListener("click", opendetails7);
document.getElementById("okc7").addEventListener("click", closedetailsc7);


function opendetails8() {
    var details8 = document.querySelector(".dtresdetailsc8");
    details8.style.display = "block";
}
function closedetailsc8() {
    var details8 = document.querySelector(".dtresdetailsc8");
    details8.style.display = "none";
}
document.getElementById("seedetailsc8").addEventListener("click", opendetails8);
document.getElementById("okc8").addEventListener("click", closedetailsc8);


function opendetails9() {
    var details9 = document.querySelector(".dtresdetailsc9");
    details9.style.display = "block";
}
function closedetailsc9() {
    var details9 = document.querySelector(".dtresdetailsc9");
    details9.style.display = "none";
}
document.getElementById("seedetailsc9").addEventListener("click", opendetails9);
document.getElementById("okc9").addEventListener("click", closedetailsc9);


function opendetails10() {
    var details10 = document.querySelector(".dtresdetailsc10");
    details10.style.display = "block";
}
function closedetailsc10() {
    var details10 = document.querySelector(".dtresdetailsc10");
    details10.style.display = "none";
}
document.getElementById("seedetailsc10").addEventListener("click", opendetails10);
document.getElementById("okc10").addEventListener("click", closedetailsc10);


function opendetails11() {
    var details11 = document.querySelector(".dtresdetailsc11");
    details11.style.display = "block";
}
function closedetailsc11() {
    var details11 = document.querySelector(".dtresdetailsc11");
    details11.style.display = "none";
}
document.getElementById("seedetailsc11").addEventListener("click", opendetails11);
document.getElementById("okc11").addEventListener("click", closedetailsc11);


function opendetails12() {
    var details12 = document.querySelector(".dtresdetailsc12");
    details12.style.display = "block";
}
function closedetailsc12() {
    var details12 = document.querySelector(".dtresdetailsc12");
    details12.style.display = "none";
}
document.getElementById("seedetailsc12").addEventListener("click", opendetails12);
document.getElementById("okc12").addEventListener("click", closedetailsc12);


function opendetails12() {
    var details12 = document.querySelector(".dtresdetailsc12");
    details12.style.display = "block";
}
function closedetailsc12() {
    var details12 = document.querySelector(".dtresdetailsc12");
    details12.style.display = "none";
}
document.getElementById("seedetailsc12").addEventListener("click", opendetails12);
document.getElementById("okc12").addEventListener("click", closedetailsc12);


function opendetails13() {
    var details13 = document.querySelector(".dtresdetailsc13");
    details13.style.display = "block";
}
function closedetailsc13() {
    var details13 = document.querySelector(".dtresdetailsc13");
    details13.style.display = "none";
}
document.getElementById("seedetailsc13").addEventListener("click", opendetails13);
document.getElementById("okc13").addEventListener("click", closedetailsc13);


function opendetails14() {
    var details14 = document.querySelector(".dtresdetailsc14");
    details14.style.display = "block";
}
function closedetailsc14() {
    var details14 = document.querySelector(".dtresdetailsc14");
    details14.style.display = "none";
}
document.getElementById("seedetailsc14").addEventListener("click", opendetails14);
document.getElementById("okc14").addEventListener("click", closedetailsc14);


function opendetails15() {
    var details15 = document.querySelector(".dtresdetailsc15");
    details15.style.display = "block";
}
function closedetailsc15() {
    var details15 = document.querySelector(".dtresdetailsc15");
    details15.style.display = "none";
}
document.getElementById("seedetailsc15").addEventListener("click", opendetails15);
document.getElementById("okc15").addEventListener("click", closedetailsc15);


function opendetails16() {
    var details16 = document.querySelector(".dtresdetailsc16");
    details16.style.display = "block";
}
function closedetailsc16() {
    var details16 = document.querySelector(".dtresdetailsc16");
    details16.style.display = "none";
}
document.getElementById("seedetailsc16").addEventListener("click", opendetails16);
document.getElementById("okc16").addEventListener("click", closedetailsc16);


function opendetails17() {
    var details17 = document.querySelector(".dtresdetailsc17");
    details17.style.display = "block";
}
function closedetailsc17() {
    var details17 = document.querySelector(".dtresdetailsc17");
    details17.style.display = "none";
}
document.getElementById("seedetailsc17").addEventListener("click", opendetails17);
document.getElementById("okc17").addEventListener("click", closedetailsc17);


function opendetails18() {
    var details18 = document.querySelector(".dtresdetailsc18");
    details18.style.display = "block";
}
function closedetailsc18() {
    var details18 = document.querySelector(".dtresdetailsc18");
    details18.style.display = "none";
}
document.getElementById("seedetailsc18").addEventListener("click", opendetails18);
document.getElementById("okc18").addEventListener("click", closedetailsc18);


function opendetails19() {
    var details19 = document.querySelector(".dtresdetailsc19");
    details19.style.display = "block";
}
function closedetailsc19() {
    var details19 = document.querySelector(".dtresdetailsc19");
    details19.style.display = "none";
}
document.getElementById("seedetailsc19").addEventListener("click", opendetails19);
document.getElementById("okc19").addEventListener("click", closedetailsc19);


function opendetails20() {
    var details20 = document.querySelector(".dtresdetailsc20");
    details20.style.display = "block";
}
function closedetailsc20() {
    var details20 = document.querySelector(".dtresdetailsc20");
    details20.style.display = "none";
}
document.getElementById("seedetailsc20").addEventListener("click", opendetails20);
document.getElementById("okc20").addEventListener("click", closedetailsc20);



// Open profits
function openprofit() {
    var profitdiv = document.getElementById("profitbox");
    profitdiv.style.display = "block";
}
function closeprofit() {
    var profitdiv = document.getElementById("profitbox");
    profitdiv.style.display = "none";
}
document.getElementById("profit").addEventListener("click", openprofit);
document.querySelector(".closeprofit").addEventListener("click", closeprofit);


// Booking Confirmation
const nameInputcc1 = document.querySelector('.dtnamec1');
const contactInputc1 = document.querySelector('.dtcontactc1');
const checkInInputc1 = document.querySelector('.dtcheckinc1');
const checkOutInputc1 = document.querySelector('.dtcheckoutc1');
const confirmButtonc1 = document.querySelector('.dtconfirmc1');
const resDetailsc1 = document.querySelector('.dtresdetailsc1');
const bookindetailsc1 = document.querySelector('.detailsc1');
const cor1 = document.getElementById("cor1");
const buttonc1 = document.getElementById('bookinbutc1');

confirmButtonc1.addEventListener('click', function () {
    const namecc1 = nameInputcc1.value;
    const contactc1 = contactInputc1.value;
    const checkInc1 = checkInInputc1.value;
    const checkOutc1 = checkOutInputc1.value;
    const pElementsc1 = resDetailsc1.getElementsByTagName('p');

    if (namecc1 === '' || contactc1 === '') {
        alert('Please input the required information');
    } else {
        pElementsc1[0].textContent = `Name: ${namecc1}`;
        pElementsc1[1].textContent = `Contact: ${contactc1}`;
        pElementsc1[2].textContent = `Check-in: ${checkInc1}`;
        pElementsc1[3].textContent = `Check-out: ${checkOutc1}`;

        bookindetailsc1.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc1.checked = true;
        buttonc1.style.backgroundColor = 'blue';
        buttonc1.textContent = 'Reserved';
        buttonc1.style.fontSize = '1.5rem';
        cor1.innerHTML = 200;
        buttonc1.disabled = true;
    }
});

checkboxc1.addEventListener('click', () => {
    if (checkboxc1.checked === true) {
        buttonc1.style.backgroundColor = 'blue';
        buttonc1.textContent = 'Reserved';
        buttonc1.style.fontSize = '1.5rem';
        cor1.innerHTML = 200;
    } else {
        buttonc1.style.backgroundColor = '#fcce50';
        buttonc1.textContent = 'Book now';
        buttonc1.style.fontSize = "1rem";
        buttonc1.disabled = false;
        cor1.innerHTML = "--";
    }
});




const nameInputcc2 = document.querySelector('.dtnamec2');
const contactInputc2 = document.querySelector('.dtcontactc2');
const checkInInputc2 = document.querySelector('.dtcheckinc2');
const checkOutInputc2 = document.querySelector('.dtcheckoutc2');
const confirmButtonc2 = document.querySelector('.dtconfirmc2');
const resDetailsc2 = document.querySelector('.dtresdetailsc2');
const bookindetailsc2 = document.querySelector('.detailsc2');
const cor2 = document.getElementById("cor2");
const buttonc2 = document.getElementById('bookinbutc2');

confirmButtonc2.addEventListener('click', function () {
    const namec2 = nameInputcc2.value;
    const contactc2 = contactInputc2.value;
    const checkInc2 = checkInInputc2.value;
    const checkOutc2 = checkOutInputc2.value;
    const pElementsc2 = resDetailsc2.getElementsByTagName('p');

    if (namec2 === '' || contactc2 === '') {
        alert('Please input the required information');
    } else {
        pElementsc2[0].textContent = `Name: ${namec2}`;
        pElementsc2[1].textContent = `Contact: ${contactc2}`;
        pElementsc2[2].textContent = `Check-in: ${checkInc2}`;
        pElementsc2[3].textContent = `Check-out: ${checkOutc2}`;

        bookindetailsc2.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc2.checked = true;
        buttonc2.style.backgroundColor = 'blue';
        buttonc2.textContent = 'Reserved';
        buttonc2.style.fontSize = '1.5rem';
        cor2.innerHTML = 400;
        buttonc2.disabled = true;
    }
});

checkboxc2.addEventListener('click', () => {
    if (checkboxc2.checked === true) {
        buttonc2.style.backgroundColor = 'blue';
        buttonc2.textContent = 'Reserved';
        buttonc2.style.fontSize = '1.5rem';
        cor2.innerHTML = 400;
    } else {
        buttonc2.style.backgroundColor = '#fcce50';
        buttonc2.textContent = 'Book now';
        buttonc2.style.fontSize = "1rem";
        buttonc2.disabled = false;
        cor2.innerHTML = "--";
    }
});


const nameInputcc3 = document.querySelector('.dtnamec3');
const contactInputc3 = document.querySelector('.dtcontactc3');
const checkInInputc3 = document.querySelector('.dtcheckinc3');
const checkOutInputc3 = document.querySelector('.dtcheckoutc3');
const confirmButtonc3 = document.querySelector('.dtconfirmc3');
const resDetailsc3 = document.querySelector('.dtresdetailsc3');
const bookindetailsc3 = document.querySelector('.detailsc3');
const cor3 = document.getElementById("cor3");
const buttonc3 = document.getElementById('bookinbutc3');

confirmButtonc3.addEventListener('click', function () {
    const namec3 = nameInputcc3.value;
    const contactc3 = contactInputc3.value;
    const checkInc3 = checkInInputc3.value;
    const checkOutc3 = checkOutInputc3.value;
    const pElementsc3 = resDetailsc3.getElementsByTagName('p');

    if (namec3 === '' || contactc3 === '') {
        alert('Please input the required information');
    } else {
        pElementsc3[0].textContent = `Name: ${namec3}`;
        pElementsc3[1].textContent = `Contact: ${contactc3}`;
        pElementsc3[2].textContent = `Check-in: ${checkInc3}`;
        pElementsc3[3].textContent = `Check-out: ${checkOutc3}`;

        bookindetailsc3.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc3.checked = true;
        buttonc3.style.backgroundColor = 'blue';
        buttonc3.textContent = 'Reserved';
        buttonc3.style.fontSize = '1.5rem';
        cor3.innerHTML = 400;
        buttonc3.disabled = true;
    }
});

checkboxc3.addEventListener('click', () => {
    if (checkboxc3.checked === true) {
        buttonc3.style.backgroundColor = 'blue';
        buttonc3.textContent = 'Reserved';
        buttonc3.style.fontSize = '1.5rem';
        cor3.innerHTML = 400;
    } else {
        buttonc3.style.backgroundColor = '#fcce50';
        buttonc3.textContent = 'Book now';
        buttonc3.style.fontSize = "1rem";
        buttonc3.disabled = false;
        cor3.innerHTML = "--";
    }
});

const nameInputcc4 = document.querySelector('.dtnamec4');
const contactInputc4 = document.querySelector('.dtcontactc4');
const checkInInputc4 = document.querySelector('.dtcheckinc4');
const checkOutInputc4 = document.querySelector('.dtcheckoutc4');
const confirmButtonc4 = document.querySelector('.dtconfirmc4');
const resDetailsc4 = document.querySelector('.dtresdetailsc4');
const bookindetailsc4 = document.querySelector('.detailsc4');
const cor4 = document.getElementById("cor4");
const buttonc4 = document.getElementById('bookinbutc4');

confirmButtonc4.addEventListener('click', function () {
    const namec4 = nameInputcc4.value;
    const contactc4 = contactInputc4.value;
    const checkInc4 = checkInInputc4.value;
    const checkOutc4 = checkOutInputc4.value;
    const pElementsc4 = resDetailsc4.getElementsByTagName('p');

    if (namec4 === '' || contactc4 === '') {
        alert('Please input the required information');
    } else {
        pElementsc4[0].textContent = `Name: ${namec4}`;
        pElementsc4[1].textContent = `Contact: ${contactc4}`;
        pElementsc4[2].textContent = `Check-in: ${checkInc4}`;
        pElementsc4[3].textContent = `Check-out: ${checkOutc4}`;

        bookindetailsc4.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc4.checked = true;
        buttonc4.style.backgroundColor = 'blue';
        buttonc4.textContent = 'Reserved';
        buttonc4.style.fontSize = '1.5rem';
        cor4.innerHTML = 500;
        buttonc4.disabled = true;
    }
});

checkboxc4.addEventListener('click', () => {
    if (checkboxc4.checked === true) {
        buttonc4.style.backgroundColor = 'blue';
        buttonc4.textContent = 'Reserved';
        buttonc4.style.fontSize = '1.5rem';
        cor4.innerHTML = 500;
    } else {
        buttonc4.style.backgroundColor = '#fcce50';
        buttonc4.textContent = 'Book now';
        buttonc4.style.fontSize = "1rem";
        buttonc4.disabled = false;
        cor4.innerHTML = "--";
    }
});


const nameInputcc5 = document.querySelector('.dtnamec5');
const contactInputc5 = document.querySelector('.dtcontactc5');
const checkInInputc5 = document.querySelector('.dtcheckinc5');
const checkOutInputc5 = document.querySelector('.dtcheckoutc5');
const confirmButtonc5 = document.querySelector('.dtconfirmc5');
const resDetailsc5 = document.querySelector('.dtresdetailsc5');
const bookindetailsc5 = document.querySelector('.detailsc5');
const cor5 = document.getElementById("cor5");
const buttonc5 = document.getElementById('bookinbutc5');

confirmButtonc5.addEventListener('click', function () {
    const namec5 = nameInputcc5.value;
    const contactc5 = contactInputc5.value;
    const checkInc5 = checkInInputc5.value;
    const checkOutc5 = checkOutInputc5.value;
    const pElementsc5 = resDetailsc5.getElementsByTagName('p');

    if (namec5 === '' || contactc5 === '') {
        alert('Please input the required information');
    } else {
        pElementsc5[0].textContent = `Name: ${namec5}`;
        pElementsc5[1].textContent = `Contact: ${contactc5}`;
        pElementsc5[2].textContent = `Check-in: ${checkInc5}`;
        pElementsc5[3].textContent = `Check-out: ${checkOutc5}`;

        bookindetailsc5.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc5.checked = true;
        buttonc5.style.backgroundColor = 'blue';
        buttonc5.textContent = 'Reserved';
        buttonc5.style.fontSize = '1.5rem';
        cor5.innerHTML = 1000;
        buttonc5.disabled = true;
    }
});

checkboxc5.addEventListener('click', () => {
    if (checkboxc5.checked === true) {
        buttonc5.style.backgroundColor = 'blue';
        buttonc5.textContent = 'Reserved';
        buttonc5.style.fontSize = '1.5rem';
        cor5.innerHTML = 1000;
    } else {
        buttonc5.style.backgroundColor = '#fcce50';
        buttonc5.textContent = 'Book now';
        buttonc5.style.fontSize = "1rem";
        buttonc5.disabled = false;
        cor5.innerHTML = "--";
    }
});


const nameInputcc6 = document.querySelector('.dtnamec6');
const contactInputc6 = document.querySelector('.dtcontactc6');
const checkInInputc6 = document.querySelector('.dtcheckinc6');
const checkOutInputc6 = document.querySelector('.dtcheckoutc6');
const confirmButtonc6 = document.querySelector('.dtconfirmc6');
const resDetailsc6 = document.querySelector('.dtresdetailsc6');
const bookindetailsc6 = document.querySelector('.detailsc6');
const cor6 = document.getElementById("cor6");
const buttonc6 = document.getElementById('bookinbutc6');

confirmButtonc6.addEventListener('click', function () {
    const namec6 = nameInputcc6.value;
    const contactc6 = contactInputc6.value;
    const checkInc6 = checkInInputc6.value;
    const checkOutc6 = checkOutInputc6.value;
    const pElementsc6 = resDetailsc6.getElementsByTagName('p');

    if (namec6 === '' || contactc6 === '') {
        alert('Please input the required information');
    } else {
        pElementsc6[0].textContent = `Name: ${namec6}`;
        pElementsc6[1].textContent = `Contact: ${contactc6}`;
        pElementsc6[2].textContent = `Check-in: ${checkInc6}`;
        pElementsc6[3].textContent = `Check-out: ${checkOutc6}`;

        bookindetailsc6.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc6.checked = true;
        buttonc6.style.backgroundColor = 'blue';
        buttonc6.textContent = 'Reserved';
        buttonc6.style.fontSize = '1.5rem';
        cor6.innerHTML = 700;
        buttonc6.disabled = true;
    }
});

checkboxc6.addEventListener('click', () => {
    if (checkboxc6.checked === true) {
        buttonc6.style.backgroundColor = 'blue';
        buttonc6.textContent = 'Reserved';
        buttonc6.style.fontSize = '1.5rem';
        cor6.innerHTML = 700;
    } else {
        buttonc6.style.backgroundColor = '#fcce50';
        buttonc6.textContent = 'Book now';
        buttonc6.style.fontSize = "1rem";
        buttonc6.disabled = false;
        cor6.innerHTML = "--";
    }
});

const nameInputcc7 = document.querySelector('.dtnamec7');
const contactInputc7 = document.querySelector('.dtcontactc7');
const checkInInputc7 = document.querySelector('.dtcheckinc7');
const checkOutInputc7 = document.querySelector('.dtcheckoutc7');
const confirmButtonc7 = document.querySelector('.dtconfirmc7');
const resDetailsc7 = document.querySelector('.dtresdetailsc7');
const bookindetailsc7 = document.querySelector('.detailsc7');
const cor7 = document.getElementById("cor7");
const buttonc7 = document.getElementById('bookinbutc7');

confirmButtonc7.addEventListener('click', function () {
    const namec7 = nameInputcc7.value;
    const contactc7 = contactInputc7.value;
    const checkInc7 = checkInInputc7.value;
    const checkOutc7 = checkOutInputc7.value;
    const pElementsc7 = resDetailsc7.getElementsByTagName('p');

    if (namec7 === '' || contactc7 === '') {
        alert('Please input the required information');
    } else {
        pElementsc7[0].textContent = `Name: ${namec7}`;
        pElementsc7[1].textContent = `Contact: ${contactc7}`;
        pElementsc7[2].textContent = `Check-in: ${checkInc7}`;
        pElementsc7[3].textContent = `Check-out: ${checkOutc7}`;

        bookindetailsc7.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc7.checked = true;
        buttonc7.style.backgroundColor = 'blue';
        buttonc7.textContent = 'Reserved';
        buttonc7.style.fontSize = '1.5rem';
        cor7.innerHTML = 1500;
        buttonc7.disabled = true;
    }
});

checkboxc7.addEventListener('click', () => {
    if (checkboxc7.checked === true) {
        buttonc7.style.backgroundColor = 'blue';
        buttonc7.textContent = 'Reserved';
        buttonc7.style.fontSize = '1.5rem';
        cor7.innerHTML = 1500;
    } else {
        buttonc7.style.backgroundColor = '#fcce50';
        buttonc7.textContent = 'Book now';
        buttonc7.style.fontSize = "1rem";
        buttonc7.disabled = false;
        cor7.innerHTML = "--";
    }
});

const nameInputcc8 = document.querySelector('.dtnamec8');
const contactInputc8 = document.querySelector('.dtcontactc8');
const checkInInputc8 = document.querySelector('.dtcheckinc8');
const checkOutInputc8 = document.querySelector('.dtcheckoutc8');
const confirmButtonc8 = document.querySelector('.dtconfirmc8');
const resDetailsc8 = document.querySelector('.dtresdetailsc8');
const bookindetailsc8 = document.querySelector('.detailsc8');
const cor8 = document.getElementById("cor8");
const buttonc8 = document.getElementById('bookinbutc8');

confirmButtonc8.addEventListener('click', function () {
    const namec8 = nameInputcc8.value;
    const contactc8 = contactInputc8.value;
    const checkInc8 = checkInInputc8.value;
    const checkOutc8 = checkOutInputc8.value;
    const pElementsc8 = resDetailsc8.getElementsByTagName('p');

    if (namec8 === '' || contactc8 === '') {
        alert('Please input the required information');
    } else {
        pElementsc8[0].textContent = `Name: ${namec8}`;
        pElementsc8[1].textContent = `Contact: ${contactc8}`;
        pElementsc8[2].textContent = `Check-in: ${checkInc8}`;
        pElementsc8[3].textContent = `Check-out: ${checkOutc8}`;

        bookindetailsc8.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc8.checked = true;
        buttonc8.style.backgroundColor = 'blue';
        buttonc8.textContent = 'Reserved';
        buttonc8.style.fontSize = '1.5rem';
        cor8.innerHTML = 1800;
        buttonc8.disabled = true;
    }
});

checkboxc8.addEventListener('click', () => {
    if (checkboxc8.checked === true) {
        buttonc8.style.backgroundColor = 'blue';
        buttonc8.textContent = 'Reserved';
        buttonc8.style.fontSize = '1.5rem';
        cor8.innerHTML = 1800;
    } else {
        buttonc8.style.backgroundColor = '#fcce50';
        buttonc8.textContent = 'Book now';
        buttonc8.style.fontSize = "1rem";
        buttonc8.disabled = false;
        cor8.innerHTML = "--";
    }
});

const nameInputcc9 = document.querySelector('.dtnamec9');
const contactInputc9 = document.querySelector('.dtcontactc9');
const checkInInputc9 = document.querySelector('.dtcheckinc9');
const checkOutInputc9 = document.querySelector('.dtcheckoutc9');
const confirmButtonc9 = document.querySelector('.dtconfirmc9');
const resDetailsc9 = document.querySelector('.dtresdetailsc9');
const bookindetailsc9 = document.querySelector('.detailsc9');
const cor9 = document.getElementById("cor9");
const buttonc9 = document.getElementById('bookinbutc9');

confirmButtonc9.addEventListener('click', function () {
    const namec9 = nameInputcc9.value;
    const contactc9 = contactInputc9.value;
    const checkInc9 = checkInInputc9.value;
    const checkOutc9 = checkOutInputc9.value;
    const pElementsc9 = resDetailsc9.getElementsByTagName('p');

    if (namec9 === '' || contactc9 === '') {
        alert('Please input the required information');
    } else {
        pElementsc9[0].textContent = `Name: ${namec9}`;
        pElementsc9[1].textContent = `Contact: ${contactc9}`;
        pElementsc9[2].textContent = `Check-in: ${checkInc9}`;
        pElementsc9[3].textContent = `Check-out: ${checkOutc9}`;

        bookindetailsc9.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc9.checked = true;
        buttonc9.style.backgroundColor = 'blue';
        buttonc9.textContent = 'Reserved';
        buttonc9.style.fontSize = '1.5rem';
        cor9.innerHTML = 500;
        buttonc9.disabled = true;
    }
});

checkboxc9.addEventListener('click', () => {
    if (checkboxc9.checked === true) {
        buttonc9.style.backgroundColor = 'blue';
        buttonc9.textContent = 'Reserved';
        buttonc9.style.fontSize = '1.5rem';
        cor9.innerHTML = 500;
    } else {
        buttonc9.style.backgroundColor = '#fcce50';
        buttonc9.textContent = 'Book now';
        buttonc9.style.fontSize = "1rem";
        buttonc9.disabled = false;
        cor9.innerHTML = "--";
    }
});


const nameInputcc10 = document.querySelector('.dtnamec10');
const contactInputc10 = document.querySelector('.dtcontactc10');
const checkInInputc10 = document.querySelector('.dtcheckinc10');
const checkOutInputc10 = document.querySelector('.dtcheckoutc10');
const confirmButtonc10 = document.querySelector('.dtconfirmc10');
const resDetailsc10 = document.querySelector('.dtresdetailsc10');
const bookindetailsc10 = document.querySelector('.detailsc10');
const cor10 = document.getElementById("cor10");
const buttonc10 = document.getElementById('bookinbutc10');

confirmButtonc10.addEventListener('click', function () {
    const namec10 = nameInputcc10.value;
    const contactc10 = contactInputc10.value;
    const checkInc10 = checkInInputc10.value;
    const checkOutc10 = checkOutInputc10.value;
    const pElementsc10 = resDetailsc10.getElementsByTagName('p');

    if (namec10 === '' || contactc10 === '') {
        alert('Please input the required information');
    } else {
        pElementsc10[0].textContent = `Name: ${namec10}`;
        pElementsc10[1].textContent = `Contact: ${contactc10}`;
        pElementsc10[2].textContent = `Check-in: ${checkInc10}`;
        pElementsc10[3].textContent = `Check-out: ${checkOutc10}`;

        bookindetailsc10.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc10.checked = true;
        buttonc10.style.backgroundColor = 'blue';
        buttonc10.textContent = 'Reserved';
        buttonc10.style.fontSize = '1.5rem';
        cor10.innerHTML = 600;
        buttonc10.disabled = true;
    }
});

checkboxc10.addEventListener('click', () => {
    if (checkboxc10.checked === true) {
        buttonc10.style.backgroundColor = 'blue';
        buttonc10.textContent = 'Reserved';
        buttonc10.style.fontSize = '1.5rem';
        cor10.innerHTML = 600;
    } else {
        buttonc10.style.backgroundColor = '#fcce50';
        buttonc10.textContent = 'Book now';
        buttonc10.style.fontSize = "1rem";
        buttonc10.disabled = false;
        cor10.innerHTML = "--";
    }
});


const nameInputcc11 = document.querySelector('.dtnamec11');
const contactInputc11 = document.querySelector('.dtcontactc11');
const checkInInputc11 = document.querySelector('.dtcheckinc11');
const checkOutInputc11 = document.querySelector('.dtcheckoutc11');
const confirmButtonc11 = document.querySelector('.dtconfirmc11');
const resDetailsc11 = document.querySelector('.dtresdetailsc11');
const bookindetailsc11 = document.querySelector('.detailsc11');
const cor11 = document.getElementById("cor11");
const buttonc11 = document.getElementById('bookinbutc11');

confirmButtonc11.addEventListener('click', function () {
    const namec11 = nameInputcc11.value;
    const contactc11 = contactInputc11.value;
    const checkInc11 = checkInInputc11.value;
    const checkOutc11 = checkOutInputc11.value;
    const pElementsc11 = resDetailsc11.getElementsByTagName('p');

    if (namec11 === '' || contactc11 === '') {
        alert('Please input the required information');
    } else {
        pElementsc11[0].textContent = `Name: ${namec11}`;
        pElementsc11[1].textContent = `Contact: ${contactc11}`;
        pElementsc11[2].textContent = `Check-in: ${checkInc11}`;
        pElementsc11[3].textContent = `Check-out: ${checkOutc11}`;

        bookindetailsc11.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc11.checked = true;
        buttonc11.style.backgroundColor = 'blue';
        buttonc11.textContent = 'Reserved';
        buttonc11.style.fontSize = '1.5rem';
        cor11.innerHTML = 700;
        buttonc11.disabled = true;
    }
});

checkboxc11.addEventListener('click', () => {
    if (checkboxc11.checked === true) {
        buttonc11.style.backgroundColor = 'blue';
        buttonc11.textContent = 'Reserved';
        buttonc11.style.fontSize = '1.5rem';
        cor11.innerHTML = 700;
    } else {
        buttonc11.style.backgroundColor = '#fcce50';
        buttonc11.textContent = 'Book now';
        buttonc11.style.fontSize = "1rem";
        buttonc11.disabled = false;
        cor11.innerHTML = "--";
    }
});

const nameInputcc12 = document.querySelector('.dtnamec12');
const contactInputc12 = document.querySelector('.dtcontactc12');
const checkInInputc12 = document.querySelector('.dtcheckinc12');
const checkOutInputc12 = document.querySelector('.dtcheckoutc12');
const confirmButtonc12 = document.querySelector('.dtconfirmc12');
const resDetailsc12 = document.querySelector('.dtresdetailsc12');
const bookindetailsc12 = document.querySelector('.detailsc12');
const cor12 = document.getElementById("cor12");
const buttonc12 = document.getElementById('bookinbutc12');

confirmButtonc12.addEventListener('click', function () {
    const namec12 = nameInputcc12.value;
    const contactc12 = contactInputc12.value;
    const checkInc12 = checkInInputc12.value;
    const checkOutc12 = checkOutInputc12.value;
    const pElementsc12 = resDetailsc12.getElementsByTagName('p');

    if (namec12 === '' || contactc12 === '') {
        alert('Please input the required information');
    } else {
        pElementsc12[0].textContent = `Name: ${namec12}`;
        pElementsc12[1].textContent = `Contact: ${contactc12}`;
        pElementsc12[2].textContent = `Check-in: ${checkInc12}`;
        pElementsc12[3].textContent = `Check-out: ${checkOutc12}`;

        bookindetailsc12.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc12.checked = true;
        buttonc12.style.backgroundColor = 'blue';
        buttonc12.textContent = 'Reserved';
        buttonc12.style.fontSize = '1.5rem';
        cor12.innerHTML = 800;
        buttonc12.disabled = true;
    }
});

checkboxc12.addEventListener('click', () => {
    if (checkboxc12.checked === true) {
        buttonc12.style.backgroundColor = 'blue';
        buttonc12.textContent = 'Reserved';
        buttonc12.style.fontSize = '1.5rem';
        cor12.innerHTML = 800;
    } else {
        buttonc12.style.backgroundColor = '#fcce50';
        buttonc12.textContent = 'Book now';
        buttonc12.style.fontSize = "1rem";
        buttonc12.disabled = false;
        cor12.innerHTML = "--";
    }
});

const nameInputcc13 = document.querySelector('.dtnamec13');
const contactInputc13 = document.querySelector('.dtcontactc13');
const checkInInputc13 = document.querySelector('.dtcheckinc13');
const checkOutInputc13 = document.querySelector('.dtcheckoutc13');
const confirmButtonc13 = document.querySelector('.dtconfirmc13');
const resDetailsc13 = document.querySelector('.dtresdetailsc13');
const bookindetailsc13 = document.querySelector('.detailsc13');
const cor13 = document.getElementById("cor13");
const buttonc13 = document.getElementById('bookinbutc13');

confirmButtonc13.addEventListener('click', function () {
    const namec13 = nameInputcc13.value;
    const contactc13 = contactInputc13.value;
    const checkInc13 = checkInInputc13.value;
    const checkOutc13 = checkOutInputc13.value;
    const pElementsc13 = resDetailsc13.getElementsByTagName('p');

    if (namec13 === '' || contactc13 === '') {
        alert('Please input the required information');
    } else {
        pElementsc13[0].textContent = `Name: ${namec13}`;
        pElementsc13[1].textContent = `Contact: ${contactc13}`;
        pElementsc13[2].textContent = `Check-in: ${checkInc13}`;
        pElementsc13[3].textContent = `Check-out: ${checkOutc13}`;

        bookindetailsc13.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc13.checked = true;
        buttonc13.style.backgroundColor = 'blue';
        buttonc13.textContent = 'Reserved';
        buttonc13.style.fontSize = '1.5rem';
        cor13.innerHTML = 2500;
        buttonc13.disabled = true;
    }
});

checkboxc13.addEventListener('click', () => {
    if (checkboxc13.checked === true) {
        buttonc13.style.backgroundColor = 'blue';
        buttonc13.textContent = 'Reserved';
        buttonc13.style.fontSize = '1.5rem';
        cor13.innerHTML = 2500;
    } else {
        buttonc13.style.backgroundColor = '#fcce50';
        buttonc13.textContent = 'Book now';
        buttonc13.style.fontSize = "1rem";
        buttonc13.disabled = false;
        cor13.innerHTML = "--";
    }
});


const nameInputcc14 = document.querySelector('.dtnamec14');
const contactInputc14 = document.querySelector('.dtcontactc14');
const checkInInputc14 = document.querySelector('.dtcheckinc14');
const checkOutInputc14 = document.querySelector('.dtcheckoutc14');
const confirmButtonc14 = document.querySelector('.dtconfirmc14');
const resDetailsc14 = document.querySelector('.dtresdetailsc14');
const bookindetailsc14 = document.querySelector('.detailsc14');
const cor14 = document.getElementById("cor14");
const buttonc14 = document.getElementById('bookinbutc14');

confirmButtonc14.addEventListener('click', function () {
    const namec14 = nameInputcc14.value;
    const contactc14 = contactInputc14.value;
    const checkInc14 = checkInInputc14.value;
    const checkOutc14 = checkOutInputc14.value;
    const pElementsc14 = resDetailsc14.getElementsByTagName('p');

    if (namec14 === '' || contactc14 === '') {
        alert('Please input the required information');
    } else {
        pElementsc14[0].textContent = `Name: ${namec14}`;
        pElementsc14[1].textContent = `Contact: ${contactc14}`;
        pElementsc14[2].textContent = `Check-in: ${checkInc14}`;
        pElementsc14[3].textContent = `Check-out: ${checkOutc14}`;

        bookindetailsc14.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc14.checked = true;
        buttonc14.style.backgroundColor = 'blue';
        buttonc14.textContent = 'Reserved';
        buttonc14.style.fontSize = '1.5rem';
        cor14.innerHTML = 2500;
        buttonc14.disabled = true;
    }
});

checkboxc14.addEventListener('click', () => {
    if (checkboxc14.checked === true) {
        buttonc14.style.backgroundColor = 'blue';
        buttonc14.textContent = 'Reserved';
        buttonc14.style.fontSize = '1.5rem';
        cor14.innerHTML = 2500;
    } else {
        buttonc14.style.backgroundColor = '#fcce50';
        buttonc14.textContent = 'Book now';
        buttonc14.style.fontSize = "1rem";
        buttonc14.disabled = false;
        cor14.innerHTML = "--";
    }
});

const nameInputcc15 = document.querySelector('.dtnamec15');
const contactInputc15 = document.querySelector('.dtcontactc15');
const checkInInputc15 = document.querySelector('.dtcheckinc15');
const checkOutInputc15 = document.querySelector('.dtcheckoutc15');
const confirmButtonc15 = document.querySelector('.dtconfirmc15');
const resDetailsc15 = document.querySelector('.dtresdetailsc15');
const bookindetailsc15 = document.querySelector('.detailsc15');
const cor15 = document.getElementById("cor15");
const buttonc15 = document.getElementById('bookinbutc15');

confirmButtonc15.addEventListener('click', function () {
    const namec15 = nameInputcc15.value;
    const contactc15 = contactInputc15.value;
    const checkInc15 = checkInInputc15.value;
    const checkOutc15 = checkOutInputc15.value;
    const pElementsc15 = resDetailsc15.getElementsByTagName('p');

    if (namec15 === '' || contactc15 === '') {
        alert('Please input the required information');
    } else {
        pElementsc15[0].textContent = `Name: ${namec15}`;
        pElementsc15[1].textContent = `Contact: ${contactc15}`;
        pElementsc15[2].textContent = `Check-in: ${checkInc15}`;
        pElementsc15[3].textContent = `Check-out: ${checkOutc15}`;

        bookindetailsc15.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc15.checked = true;
        buttonc15.style.backgroundColor = 'blue';
        buttonc15.textContent = 'Reserved';
        buttonc15.style.fontSize = '1.5rem';
        cor15.innerHTML = 3000;
        buttonc15.disabled = true;
    }
});

checkboxc15.addEventListener('click', () => {
    if (checkboxc15.checked === true) {
        buttonc15.style.backgroundColor = 'blue';
        buttonc15.textContent = 'Reserved';
        buttonc15.style.fontSize = '1.5rem';
        cor15.innerHTML = 3000;
    } else {
        buttonc15.style.backgroundColor = '#fcce50';
        buttonc15.textContent = 'Book now';
        buttonc15.style.fontSize = "1rem";
        buttonc15.disabled = false;
        cor15.innerHTML = "--";
    }
});


const nameInputcc16 = document.querySelector('.dtnamec16');
const contactInputc16 = document.querySelector('.dtcontactc16');
const checkInInputc16 = document.querySelector('.dtcheckinc16');
const checkOutInputc16 = document.querySelector('.dtcheckoutc16');
const confirmButtonc16 = document.querySelector('.dtconfirmc16');
const resDetailsc16 = document.querySelector('.dtresdetailsc16');
const bookindetailsc16 = document.querySelector('.detailsc16');
const cor16 = document.getElementById("cor16");
const buttonc16 = document.getElementById('bookinbutc16');

confirmButtonc16.addEventListener('click', function () {
    const namec16 = nameInputcc16.value;
    const contactc16 = contactInputc16.value;
    const checkInc16 = checkInInputc16.value;
    const checkOutc16 = checkOutInputc16.value;
    const pElementsc16 = resDetailsc16.getElementsByTagName('p');

    if (namec16 === '' || contactc16 === '') {
        alert('Please input the required information');
    } else {
        pElementsc16[0].textContent = `Name: ${namec16}`;
        pElementsc16[1].textContent = `Contact: ${contactc16}`;
        pElementsc16[2].textContent = `Check-in: ${checkInc16}`;
        pElementsc16[3].textContent = `Check-out: ${checkOutc16}`;

        bookindetailsc16.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc16.checked = true;
        buttonc16.style.backgroundColor = 'blue';
        buttonc16.textContent = 'Reserved';
        buttonc16.style.fontSize = '1.5rem';
        cor16.innerHTML = 3000;
        buttonc16.disabled = true;
    }
});

checkboxc16.addEventListener('click', () => {
    if (checkboxc16.checked === true) {
        buttonc16.style.backgroundColor = 'blue';
        buttonc16.textContent = 'Reserved';
        buttonc16.style.fontSize = '1.5rem';
        cor16.innerHTML = 3000;
    } else {
        buttonc16.style.backgroundColor = '#fcce50';
        buttonc16.textContent = 'Book now';
        buttonc16.style.fontSize = "1rem";
        buttonc16.disabled = false;
        cor16.innerHTML = "--";
    }
});

const nameInputcc17 = document.querySelector('.dtnamec17');
const contactInputc17 = document.querySelector('.dtcontactc17');
const checkInInputc17 = document.querySelector('.dtcheckinc17');
const checkOutInputc17 = document.querySelector('.dtcheckoutc17');
const confirmButtonc17 = document.querySelector('.dtconfirmc17');
const resDetailsc17 = document.querySelector('.dtresdetailsc17');
const bookindetailsc17 = document.querySelector('.detailsc17');
const cor17 = document.getElementById("cor17");
const buttonc17 = document.getElementById('bookinbutc17');

confirmButtonc17.addEventListener('click', function () {
    const namec17 = nameInputcc17.value;
    const contactc17 = contactInputc17.value;
    const checkInc17 = checkInInputc17.value;
    const checkOutc17 = checkOutInputc17.value;
    const pElementsc17 = resDetailsc17.getElementsByTagName('p');

    if (namec17 === '' || contactc17 === '') {
        alert('Please input the required information');
    } else {
        pElementsc17[0].textContent = `Name: ${namec17}`;
        pElementsc17[1].textContent = `Contact: ${contactc17}`;
        pElementsc17[2].textContent = `Check-in: ${checkInc17}`;
        pElementsc17[3].textContent = `Check-out: ${checkOutc17}`;

        bookindetailsc17.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc17.checked = true;
        buttonc17.style.backgroundColor = 'blue';
        buttonc17.textContent = 'Reserved';
        buttonc17.style.fontSize = '1.5rem';
        cor17.innerHTML = 3500;
        buttonc17.disabled = true;
    }
});

checkboxc17.addEventListener('click', () => {
    if (checkboxc17.checked === true) {
        buttonc17.style.backgroundColor = 'blue';
        buttonc17.textContent = 'Reserved';
        buttonc17.style.fontSize = '1.5rem';
        cor17.innerHTML = 3500;
    } else {
        buttonc17.style.backgroundColor = '#fcce50';
        buttonc17.textContent = 'Book now';
        buttonc17.style.fontSize = "1rem";
        buttonc17.disabled = false;
        cor17.innerHTML = "--";
    }
});

const nameInputcc18 = document.querySelector('.dtnamec18');
const contactInputc18 = document.querySelector('.dtcontactc18');
const checkInInputc18 = document.querySelector('.dtcheckinc18');
const checkOutInputc18 = document.querySelector('.dtcheckoutc18');
const confirmButtonc18 = document.querySelector('.dtconfirmc18');
const resDetailsc18 = document.querySelector('.dtresdetailsc18');
const bookindetailsc18 = document.querySelector('.detailsc18');
const cor18 = document.getElementById("cor18");
const buttonc18 = document.getElementById('bookinbutc18');

confirmButtonc18.addEventListener('click', function () {
    const namec18 = nameInputcc18.value;
    const contactc18 = contactInputc18.value;
    const checkInc18 = checkInInputc18.value;
    const checkOutc18 = checkOutInputc18.value;
    const pElementsc18 = resDetailsc18.getElementsByTagName('p');

    if (namec18 === '' || contactc18 === '') {
        alert('Please input the required information');
    } else {
        pElementsc18[0].textContent = `Name: ${namec18}`;
        pElementsc18[1].textContent = `Contact: ${contactc18}`;
        pElementsc18[2].textContent = `Check-in: ${checkInc18}`;
        pElementsc18[3].textContent = `Check-out: ${checkOutc18}`;

        bookindetailsc18.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc18.checked = true;
        buttonc18.style.backgroundColor = 'blue';
        buttonc18.textContent = 'Reserved';
        buttonc18.style.fontSize = '1.5rem';
        cor18.innerHTML = 6500;
        buttonc18.disabled = true;
    }
});

checkboxc18.addEventListener('click', () => {
    if (checkboxc18.checked === true) {
        buttonc18.style.backgroundColor = 'blue';
        buttonc18.textContent = 'Reserved';
        buttonc18.style.fontSize = '1.5rem';
        cor18.innerHTML = 6500;
    } else {
        buttonc18.style.backgroundColor = '#fcce50';
        buttonc18.textContent = 'Book now';
        buttonc18.style.fontSize = "1rem";
        buttonc18.disabled = false;
        cor18.innerHTML = "--";
    }
});

const nameInputcc19 = document.querySelector('.dtnamec19');
const contactInputc19 = document.querySelector('.dtcontactc19');
const checkInInputc19 = document.querySelector('.dtcheckinc19');
const checkOutInputc19 = document.querySelector('.dtcheckoutc19');
const confirmButtonc19 = document.querySelector('.dtconfirmc19');
const resDetailsc19 = document.querySelector('.dtresdetailsc19');
const bookindetailsc19 = document.querySelector('.detailsc19');
const cor19 = document.getElementById("cor19");
const buttonc19 = document.getElementById('bookinbutc19');

confirmButtonc19.addEventListener('click', function () {
    const namec19 = nameInputcc19.value;
    const contactc19 = contactInputc19.value;
    const checkInc19 = checkInInputc19.value;
    const checkOutc19 = checkOutInputc19.value;
    const pElementsc19 = resDetailsc19.getElementsByTagName('p');

    if (namec19 === '' || contactc19 === '') {
        alert('Please input the required information');
    } else {
        pElementsc19[0].textContent = `Name: ${namec19}`;
        pElementsc19[1].textContent = `Contact: ${contactc19}`;
        pElementsc19[2].textContent = `Check-in: ${checkInc19}`;
        pElementsc19[3].textContent = `Check-out: ${checkOutc19}`;

        bookindetailsc19.style.display = 'none';
        alert('Successfully reserved!');
        checkboxc19.checked = true;
        buttonc19.style.backgroundColor = 'blue';
        buttonc19.textContent = 'Reserved';
        buttonc19.style.fontSize = '1.5rem';
        cor19.innerHTML = 6500;
        buttonc19.disabled = true;
    }
});

checkboxc19.addEventListener('click', () => {
    if (checkboxc19.checked === true) {
        buttonc19.style.backgroundColor = 'blue';
        buttonc19.textContent = 'Reserved';
        buttonc19.style.fontSize = '1.5rem';
        cor19.innerHTML = 6500;
    } else {
        buttonc19.style.backgroundColor = '#fcce50';
        buttonc19.textContent = 'Book now';
        buttonc19.style.fontSize = "1rem";
        buttonc19.disabled = false;
        cor19.innerHTML = "--";
    }
});

const nameInputcc20 = document.querySelector('.dtnamec20');
const contactInputc20 = document.querySelector('.dtcontactc20');
const checkInInputc20 = document.querySelector('.dtcheckinc20');
const checkOutInputc20 = document.querySelector('.dtcheckoutc20');
const confirmButtonc20 = document.querySelector('.dtconfirmc20');
const resDetailsc20 = document.querySelector('.dtresdetailsc20');
const bookindetailsc20 = document.querySelector('.detailsc20');
const cor20 = document.getElementById("cor20");
const buttonc20 = document.getElementById('bookinbutc20');

confirmButtonc20.addEventListener('click', function () {
    const namec20 = nameInputcc20.value;
    const contactc20 = contactInputc20.value;
    const checkInc20 = checkInInputc20.value;
    const checkOutc20 = checkOutInputc20.value;
    const pElementsc20 = resDetailsc20.getElementsByTagName('p');

    if (namec20=== '' || contactc20 === '') {
        alert('Please input the required information');
    } else {
    pElementsc20[0].textContent = `Name: ${namec20}`;
    pElementsc20[1].textContent = `Contact: ${contactc20}`;
    pElementsc20[2].textContent = `Check-in: ${checkInc20}`;
    pElementsc20[3].textContent = `Check-out: ${checkOutc20}`;

    bookindetailsc20.style.display = 'none';
    alert('Successfully reserved!');
    checkboxc20.checked = true;
    buttonc20.style.backgroundColor = 'blue';
    buttonc20.textContent = 'Reserved';
    buttonc20.style.fontSize = '1.5rem';
    cor20.innerHTML = 14000;
    buttonc20.disabled = true;
    }
});

checkboxc20.addEventListener('click', () => {
    if (checkboxc20.checked === true) {
        buttonc20.style.backgroundColor = 'blue';
        buttonc20.textContent = 'Reserved';
        buttonc20.style.fontSize = '1.5rem';
        cor20.innerHTML = 14000;
    } else {
        buttonc20.style.backgroundColor = '#fcce50';
        buttonc20.textContent = 'Book now';
        buttonc20.style.fontSize = "1rem";
        buttonc20.disabled = false;
        cor20.innerHTML = "--";
    }
});



// Get all cor elements
const corElements = document.querySelectorAll("[id^='cor']");
// Function to calculate the sum of cor values
function calculateTotal() {
    let total = 0;
    // Loop through all cor elements
    for (const corElement of corElements) {
        const corValue = parseInt(corElement.innerHTML);

        // Check if the cor value is a number
        if (!isNaN(corValue)) {
            total += corValue;
        }
    }
    // Display the total value
    totalvalue.textContent = total.toString();
}
// Add event listeners to cor elements
corElements.forEach((corElement) => {
    corElement.addEventListener("DOMSubtreeModified", calculateTotal);
});
// Calculate the initial total when the page loads
calculateTotal();