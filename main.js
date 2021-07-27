// NAVLIST TOGGLE
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

const rmv =  document.getElementById('rmv');

document.onclick = function(e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        toggle.classList.remove('active'); 
        sidebar.classList.remove('active');
        rmv.classList.remove('active');
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active'); 
    sidebar.classList.toggle('active');
    rmv.classList.toggle('active');
}

// BACK-TO-TOP REVEAL
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('#back-to-top')
    scroll.classList.toggle("active" , window.scrollY > 500)
})

// SMOOTH SCROLL
const makeNavLinkSmooth = () => {
    const navLinks = document.querySelectorAll('.nav-link');

    for(let n in navLinks){
        if(navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                .scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }
}

// SCROLL SPY
const spyScrolling = () => {
    const sections = document.querySelectorAll('.content');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for(let s in sections){
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition){
                const id = sections[s].id;
                document.querySelector('.navbar_link--active').classList.remove('navbar_link--active');

                document.querySelector(`a[href*=${id}]`).parentNode.classList.add('navbar_link--active');
            }
        }
    }
}

// function call for makeNavLinkSmooth
makeNavLinkSmooth();

// function call for spy scroll
spyScrolling();













// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");
// const messageInput = document.querySelector("textarea[name='message']");
// () => isValidEmail(emailInput.value);
// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, messageInput];





// let isFormValid = false;
// let isValidationOn = false;

// const validateInputs = () => {
//     console.log("we are here");
//     if (!isValidationOn) return;
  
//     isFormValid = true;
//     inputFields.forEach((input) => {
//       input.classList.remove("invalid");
//       input.nextElementSibling.classList.add("hidden");
  
//       if (!input.isValid()) {
//         input.classList.add("invalid");
//         isFormValid = false;
//         input
// // // const thanks = document.querySelector(".thanks");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = 