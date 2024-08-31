var type = new Typed('.text', {
    strings: ["Web Developer", "Front-End Developer", "App Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});



document.addEventListener('DOMContentLoaded', function () {

    let about = document.querySelector('.about-section');
    let resume = document.querySelector('.resume-section');
    let portfolio = document.querySelector('.portfolio-section');
    let contact = document.querySelector('.Contact-section');

    let aboutbtn = document.querySelector('.navbar-about');
    let resumebtn = document.querySelector('.navbar-resume');
    let portbtn = document.querySelector('.navbar-portfolio');
    let contactbtn = document.querySelector('.navbar-contact');



    aboutbtn.style.color = "#ffdb70";

    resumebtn.addEventListener('click', function () {
        resumebtn.style.color = "#ffdb70";
        aboutbtn.style.color = "#d6d6d6";
        contactbtn.style.color = "#d6d6d6";
        portbtn.style.color = "#d6d6d6";
        about.style.display = "none";
        portfolio.style.display = "none";
        contact.style.display = "none";
        resume.style.display = "block";
    });

    aboutbtn.addEventListener('click', function () {
        resumebtn.style.color = "#d6d6d6";
        portbtn.style.color = "#d6d6d6";
        contactbtn.style.color = "#d6d6d6";
        aboutbtn.style.color = "#ffdb70";
        resume.style.display = "none";
        portfolio.style.display = "none";
        contact.style.display = "none";
        about.style.display = "block";
    });

    portbtn.addEventListener('click', function () {
        resumebtn.style.color = "#d6d6d6";
        aboutbtn.style.color = "#d6d6d6";
        contactbtn.style.color = "#d6d6d6";
        portbtn.style.color = "#ffdb70";
        resume.style.display = "none";
        about.style.display = "none";
        contact.style.display = "none";
        portfolio.style.display = "block";
    });

    contactbtn.addEventListener('click', function () {
        resumebtn.style.color = "#d6d6d6";
        aboutbtn.style.color = "#d6d6d6";
        portbtn.style.color = "#d6d6d6";
        contactbtn.style.color = "#ffdb70";
        resume.style.display = "none";
        about.style.display = "none";
        portfolio.style.display = "none";
        contact.style.display = "block";
    });


    let portall = document.querySelector('.portbtn-all');
    let portweb = document.querySelector('.portbtn-web');
    let portapp = document.querySelector('.portbtn-app');

    let allproject = document.querySelector('.project-items');
    let webproject = document.querySelector('.project-items-web');
    let approject = document.getElementById('video');
    let hhhh = document.querySelector('.project-list');


    portall.style.color = "#ffdb70";

    portall.addEventListener('click', function () {
        webproject.style.display = "block";
        allproject.style.display = "block";
        portall.style.color = "#ffdb70";
        portweb.style.color = "#d6d6d6";
        portapp.style.color = "#d6d6d6";
        hhhh.style.display = "";
        approject.style.display = "none";
    });

    portweb.addEventListener('click', function () {
        allproject.style.display = "none";
        approject.style.display = "none";
        portweb.style.color = "#ffdb70";
        portall.style.color = "#d6d6d6";
        portapp.style.color = "#d6d6d6";
        hhhh.style.display = "";
        webproject.style.display = "block";
    });
    portapp.addEventListener('click', function () {
        hhhh.style.display = "none";
        portapp.style.color = "#ffdb70";
        portweb.style.color = "#d6d6d6";
        portall.style.color = "#d6d6d6";
        approject.style.display = "block";
    });






    $(function () {
        $('.portbtn1').click(function () {
            e1 = $('.project-items');
            e1.addClass('animate');
            e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function (e) {
                    e1.removeClass('animate');
                });
        });
    });


});



const fullname = document.querySelector('.fullname');
const email = document.querySelector('.form-email');
const mess = document.querySelector('.message');


function sendemail() {

    const bodymessage = `Name: ${fullname.value} <br>
    Email: ${email.value} <br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "2702ccdb-6519-43a5-a59f-72ba10c2608f",
        To: 'kumawatsachin0987@gmail.com',
        From: 'kumawatsachin0987@gmail.com',
        Subject: "V Card Mail",
        Body: bodymessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message send successfully!",
                    icon: "success",
                    background: "linear-gradient(to bottom right, rgb(64, 64, 64) 3%, rgb(48, 48, 48) 97%)",
                    color: "#d6d6d6",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
    );
}



$(document).ready(function () {
    function checkMediaQuery() {
        if (window.matchMedia('(max-width: 1100px)').matches) {
            $('.ulist1').slideUp();
            $('.singleline').slideUp();
            $('.social-link').slideUp();
        } else {
            $('.ulist1').slideDown();
            $('.singleline').slideDown();
            $('.social-link').slideDown();
        }
    }

    checkMediaQuery();

    $(window).resize(function () {
        checkMediaQuery();
    });




    $('.showbutton').click(function () {
        $('.ulist1').toggle(700);
        $('.singleline').toggle(700);
        $('.social-link').toggle(700);
    })
});


