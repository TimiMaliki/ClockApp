/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


/* TODAY'S TIME*/

setInterval(() => {

    // the current date from js Date method()
    const todate = new Date();

    // get the current hour , minutes and second from js get method
    let hours = todate.getHours();
    let minutes = todate.getMinutes();
    let seconds = todate.getSeconds();

    // to know if it's in the morning or afternoon
    const period = document.querySelector(".period")
    const formatSwitchBtn = document.querySelector(".format-switch-btn")

    
    if (hours >= 12) {
        period.innerText = "pm"
    } 
    else {
        period.innerText = "am"
    }

    // to change format 24hours or 12hours
    let formatValue = formatSwitchBtn.getAttribute("data-format");
    

    if (formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;
    }

    // An eventListener to toggle between a 24hours format or 12hhours format
    formatSwitchBtn.addEventListener("click", () => {
        formatSwitchBtn.classList.toggle("active");


        let formatValue = formatSwitchBtn.getAttribute("data-format");

        if (formatValue === "12") {
            formatSwitchBtn.setAttribute("data-format", "24");
            period.innerText = "pm"
        }
      
        else {
            formatSwitchBtn.setAttribute("data-format", "12");
        }


    })


    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    document.querySelector(".hours").innerText = hours
    document.querySelector(".minutes").innerText = minutes
    document.querySelector(".seconds").innerText = seconds

}, 1000)


/********************* STOP CLOCK  *************************/

const btnOne = document.querySelector(".btn-1")
const btnTwo = document.querySelector(".btn-2")
btnTwo.disabled = true
const holdValue = { timer:null, start: null, end: null }

function startTimer() {
    btnOne.disabled = true
    btnTwo.disabled = false

    const date = new Date();
    holdValue.start = date.getTime()
    displayTime() 

}

function endTimer() {
    btnOne.disabled = false
    btnTwo.disabled = true


    const date = new Date();
    holdValue.end = date.getTime()

    const totalTime = ((holdValue.end - holdValue.start) / 1000)

    if(holdValue.timer){
        clearInterval(holdValue.timer)
    }
}


function displayTime() {
    let mins, secs, millisec;

    holdValue.timer = setInterval(() => {
        const difference = new Date().getTime() - holdValue.start


        mins = parseInt(difference / 1000 / 60)
        mins = mins < 10 ? "0" + mins : mins

        secs = parseInt(difference / 1000)
        secs = secs < 10 ? "0" + secs : secs

        millisec = difference

        if(secs > 60)  secs %= 60
        
       

        if(millisec > 1000)   millisec %= 1000

        document.querySelector(".display").innerText = `${mins} : ${secs} : ${millisec}`
        // console.log(`${mins}:${secs}:${millisec}`)
    }, 10)
}
btnOne.addEventListener("click", startTimer)

btnTwo.addEventListener("click", endTimer)

























































