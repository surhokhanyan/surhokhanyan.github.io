//Pree Loader function
let loader = document.querySelector("#preeLoader");
loader.setAttribute("class", "animate__animated animate__fadeOut");
setTimeout(()=>{
    loader.style.display = "none";
}, 2000);

// Functional for website
var typed = new Typed(".auto-type", {
    strings: [" Suren Hokhanyan", " a Front-End", " Developer"],
    typeSpeed:70,
    backSpeed:70,
    loop:true
});
let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 0)
});
let home = document.querySelector("nav li:nth-child(1)");
let about = document.querySelector("nav li:nth-child(2)");
let projects = document.querySelector("nav li:nth-child(3)");
let resume = document.querySelector("nav li:nth-child(4)");
let contacts = document.querySelector("nav li:nth-child(5)");
let ulLi = document.querySelectorAll("nav ul li");

ulLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        ulLi.forEach(elem =>{
            elem.removeAttribute("class");
        })
        item.setAttribute("class", "active");
    })
});

let skills = document.querySelectorAll("#twoMainSkillsPercentsDivBigProgress span");
let lineOne = document.querySelector("#twoMainSkillsPercentsDivBigLine1");
let lineTwo = document.querySelector("#twoMainSkillsPercentsDivBigLine2");
let lineThree = document.querySelector("#twoMainSkillsPercentsDivBigLine3");
let lineFour = document.querySelector("#twoMainSkillsPercentsDivBigLine4");
let lineFive = document.querySelector("#twoMainSkillsPercentsDivBigLine5");
let lineSix = document.querySelector("#twoMainSkillsPercentsDivBigLine6");
let lineSeven = document.querySelector("#twoMainSkillsPercentsDivBigLine7");
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 710){
        skills.forEach(item =>{
            item.style.animation = "spanLoad 2s";
        })
        lineOne.style.animation = "loading 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineTwo.style.animation = "loading2 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineThree.style.animation = "loading3 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineFour.style.animation = "loading4 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineFive.style.animation = "loading5 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineSix.style.animation = "loading6 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineSeven.style.animation = "loading7 2s forwards cubic-bezier(0, 0, 0, 0)";
    }
    if (window.scrollY < 790){
        about.removeAttribute("class");
        home.setAttribute("class", "active");
    }else if(window.scrollY > 790 && window.scrollY < 1580){
        home.removeAttribute("class");
        projects.removeAttribute("class");
        about.setAttribute("class", "active");
    }else if(window.scrollY > 1580 && window.scrollY < 2720){
        about.removeAttribute("class");
        resume.removeAttribute("class");
        projects.setAttribute("class", "active");
    }else if(window.scrollY > 2720 && window.scrollY < 3600){
        projects.removeAttribute("class");
        contacts.removeAttribute("class");
        resume.setAttribute("class", "active");
    }else if(window.scrollY > 3600){
        resume.removeAttribute("class");
        contacts.setAttribute("class", "active");
    }
});

let all = document.querySelector("#threeMainSelect li:nth-child(1)");
let web = document.querySelector("#threeMainSelect li:nth-child(2)");
let mobile = document.querySelector("#threeMainSelect li:nth-child(3)");
let graphic = document.querySelector("#threeMainSelect li:nth-child(4)");
let personalAll = document.querySelectorAll("#threeMainSelect li");
let sectionThree = document.querySelector("#sectionThree");
let threeMain = document.querySelector("#threeMain");
let portfolio = document.querySelector("#threeMainPortfolio");
let portOne = document.querySelector("#threeMainPortfolioBig:nth-child(1)");
let portTwo = document.querySelector("#threeMainPortfolioSmall:nth-child(2)");
let portThree = document.querySelector("#threeMainPortfolioSmall:nth-child(3)");
let portFour = document.querySelector("#threeMainPortfolioBig:nth-child(4)");
let portFive = document.querySelector("#threeMainPortfolioBig:nth-child(5)");
let portSix = document.querySelector("#threeMainPortfolioSmall:nth-child(6)");

personalAll.forEach(item =>{
    item.addEventListener("click", ()=>{
        personalAll.forEach(elem =>{
            elem.removeAttribute("id");
        })
        item.setAttribute("id", "active");
    });
});
all.addEventListener("click", ()=>{
    portOne.removeAttribute("class");
    portTwo.removeAttribute("class");
    portThree.removeAttribute("class");
    portFour.removeAttribute("class");
    portFive.removeAttribute("class");
    portSix.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeIn");
    portTwo.setAttribute("class", "animate__animated animate__fadeIn");
    portThree.setAttribute("class", "animate__animated animate__fadeIn");
    portFour.setAttribute("class", "animate__animated animate__fadeIn");
    portFive.setAttribute("class", "animate__animated animate__fadeIn");
    portSix.setAttribute("class", "animate__animated animate__fadeIn");
    portOne.style.display = "flex";
    portTwo.style.display = "flex";
    portThree.style.display = "flex";
    portFour.style.display = "flex";
    portFive.style.display = "flex";
    portSix.style.display = "flex";
})
web.addEventListener("click", ()=>{
    portTwo.removeAttribute("class");
    portSix.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeOutUp");
    portThree.setAttribute("class", "animate__animated animate__fadeOutUp");
    portFour.setAttribute("class", "animate__animated animate__fadeOutUp");
    portFive.setAttribute("class", "animate__animated animate__fadeOutUp");
    setTimeout(()=>{
        portOne.style.display = "none";
        portTwo.style.display = "flex";
        portThree.style.display = "none";
        portFour.style.display = "none";
        portFive.style.display = "none";
        portSix.style.display = "flex";
    }, 500)
});
mobile.addEventListener("click", ()=>{
    portFour.removeAttribute("class");
    portFive.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeOutUp");
    portTwo.setAttribute("class", "animate__animated animate__fadeOutUp");
    portThree.setAttribute("class", "animate__animated animate__fadeOutUp");
    portSix.setAttribute("class", "animate__animated animate__fadeOutUp");
    setTimeout(()=>{
        portOne.style.display = "none";
        portTwo.style.display = "none";
        portThree.style.display = "none";
        portFour.style.display = "flex";
        portFive.style.display = "flex";
        portSix.style.display = "none";
    }, 500);
});
graphic.addEventListener("click", ()=>{
    portOne.removeAttribute("class");
    portThree.removeAttribute("class");
    portTwo.setAttribute("class", "animate__animated animate__fadeOut");
    portFour.setAttribute("class", "animate__animated animate__fadeOut");
    portFive.setAttribute("class", "animate__animated animate__fadeOut");
    portSix.setAttribute("class", "animate__animated animate__fadeOut");
    setTimeout(()=>{
        portOne.style.display = "flex";
        portTwo.style.display = "none";
        portThree.style.display = "flex";
        portFour.style.display = "none";
        portFive.style.display = "none";
        portSix.style.display = "none";
    },500)
})

// JavaScript for Here me and message button
let hereMe = document.querySelector("#hereMe");
let hereBtn = document.querySelector("#hereBtn");
let messageBtn = document.querySelector("#message");


hereBtn.addEventListener("click", ()=>{
    hereMe.style.display = "flex";
    hereMe.addEventListener("click", (e)=>{
        let hereMain = document.querySelector("#hereMain");
        if (!hereMain.contains(e.target)){
            hereMe.style.display = "none";
        }
    })
})
messageBtn.addEventListener("click", ()=>{
    hereMe.style.display = "flex";
    hereMe.addEventListener("click", (e)=>{
        let hereMain = document.querySelector("#hereMain");
        if (!hereMain.contains(e.target)){
            hereMe.style.display = "none";
        }
    })
})

// On click my portfolio

let portfolioBtn = document.querySelector("#portfolioBtn");
portfolioBtn.addEventListener("click", ()=>{
    window.scrollBy(0, 1580);
    home.removeAttribute("class");
    projects.setAttribute("class", "active");
})

// On click portfolios' projects

let tetrisGame = document.querySelector("#threeMainPortfolioBig:nth-child(1) #threeMainPortfolioDivs");
let akal = document.querySelector("#threeMainPortfolioSmall:nth-child(2) #threeMainPortfolioDivs");
let ticGame = document.querySelector("#threeMainPortfolioSmall:nth-child(3) #threeMainPortfolioDivs");
let windows = document.querySelector("#threeMainPortfolioBig:nth-child(4) #threeMainPortfolioDivs");
let todo = document.querySelector("#threeMainPortfolioBig:nth-child(5) #threeMainPortfolioDivs");
let registr = document.querySelector("#threeMainPortfolioSmall:nth-child(6) #threeMainPortfolioDivs");

tetrisGame.addEventListener("click", ()=>{
    window.open('https://github.com/surhokhanyan/Windows11-Tetris/tree/main/Tetris', '_blank');
});
akal.addEventListener("click", ()=>{
    window.open('https://www.akal.am/', '_blank');
});
ticGame.addEventListener("click", ()=>{
    window.open('https://github.com/surhokhanyan/tic-tac-toe-js-dom', '_blank');
});
windows.addEventListener("click", ()=>{
    window.open('https://github.com/surhokhanyan/Windows11-Tetris', '_blank');
});
todo.addEventListener("click", ()=>{
    window.open('https://github.com/surhokhanyan/Todo-list-wtih-deadline', '_blank');
});
registr.addEventListener("click", ()=>{
    window.open('https://github.com/surhokhanyan/RegEx', '_blank');
})