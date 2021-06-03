const logInData = [
    {
        login: "Anton",
        password: '1234',
    },
    {
        login: 'Viktor',
        password: '1234',
    },
    {
        login: 'Vitalii',
        password: '1234',
    }
];




setTimeout(() => {
    document.querySelector(".loadinglayout").style.display = "none";
    console.log('its working');

}, 1000);


//////// SELECTORS //////////
let check = document.querySelector('.logInBTN');
let logInINP = document.querySelector('.logInForm');
let paswordINP = document.querySelector('.paswordForm');
let loginDiv = document.querySelector('.content');





/////
check.addEventListener("click", () => {


    logInData.forEach(el => {





        if (logInINP.value === el.login && paswordINP.value === el.password) {
            document.querySelector(".loadinglayout").style.display = "block";
            setTimeout(() => {
                document.querySelector(".loadinglayout").style.display = "none";
                console.log('its working');
                console.log('Welcome');
                document.body.innerHTML = `<h1> Welcome ${el.login} </h1>`;

            }, 2000);
        }
        else {
            console.log('Not found');
            document.querySelector(".log-in").innerHTML = "<h1> User not found </h1> <p> Try this info: <br> Login: Anton <br> Password: 1234"
        }
    });

})


