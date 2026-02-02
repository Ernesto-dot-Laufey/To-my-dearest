// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const pinkiepieImg = document.getElementById("letter-pinkiepie");
const buttons = document.getElementById("letter-buttons");
const readMeBtn = document.getElementById("read-me-btn");
const fullLetter = document.getElementById("full-letter");

// Open Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Run Away Button
noBtn.addEventListener("mouseover", () => {
    const isMobile = window.innerWidth <= 600;
    const min = isMobile ? 30 : 100; 
    const max = isMobile ? 80 : 250; 
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Grow Yes Button
let yesScale = 1;
yesBtn.style.transition = "transform 0.3s ease"; 
noBtn.addEventListener("click", () => {
    yesScale += 1.2; 
    yesBtn.style.transform = `scale(${yesScale})`;
});

// YES Clicked
yesBtn.addEventListener("click", () => {
    title.innerHTML = "YAAAYYY !! You just made me the <br>happiest person in the world !!";
    pinkiepieImg.src = "pinkie-pie-jumping.gif"; 
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    readMeBtn.style.display = "block";
    startFallingImages();
});

function startFallingImages() {
    setInterval(() => {
        const img = document.createElement("img");
        
       
        img.src = "pompompurin-falling.png"; 
        
        img.classList.add("falling-img");
        
       
        img.style.left = Math.random() * 100 + "vw";
        
       
        const size = Math.random() * 50 + 30;
        img.style.width = size + "px";
        
       
        img.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        document.body.appendChild(img);
        
        
        setTimeout(() => {
            img.remove();
        }, 5000);
        
    }, 200); 
}

// Open Letter
readMeBtn.addEventListener("click", () => {
    fullLetter.style.display = "flex";
    showPage1(); // Start at Page 1
});

function showPage1() {
    document.getElementById("letter-page-1").style.display = "block";
    document.getElementById("letter-page-2").style.display = "none";
    document.getElementById("letter-page-3").style.display = "none";
    document.getElementById("letter-page-4").style.display = "none";
}

function showPage2() {
    document.getElementById("letter-page-1").style.display = "none";
    document.getElementById("letter-page-2").style.display = "block";
    document.getElementById("letter-page-3").style.display = "none";
    document.getElementById("letter-page-4").style.display = "none";
}

function showPage3() {
    document.getElementById("letter-page-1").style.display = "none";
    document.getElementById("letter-page-2").style.display = "none";
    document.getElementById("letter-page-3").style.display = "block";
    document.getElementById("letter-page-4").style.display = "none";
}

function showPage4() {
    document.getElementById("letter-page-1").style.display = "none";
    document.getElementById("letter-page-2").style.display = "none";
    document.getElementById("letter-page-3").style.display = "none";
    document.getElementById("letter-page-4").style.display = "block";
}

function showPage5() {
    document.getElementById("letter-page-1").style.display = "none";
    document.getElementById("letter-page-2").style.display = "none";
    document.getElementById("letter-page-3").style.display = "none";
    document.getElementById("letter-page-4").style.display = "none";
    document.getElementById("letter-page-5").style.display = "block";
}

// --- EXPLOSION FUNCTION ---
function closeWithExplosion() {
    
    document.querySelector('.letter-window').style.opacity = '0';
    document.getElementById('full-letter').style.opacity = '0';

    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💗"; // You can use ❤️, 💖, or 🌸
        heart.classList.add("explosion-heart");
        
       
        const x = (Math.random() - 0.5) * window.innerWidth * 1.5; 
        const y = (Math.random() - 0.5) * window.innerHeight * 1.5; 
        const r = Math.random() * 360;

        
        heart.style.setProperty('--x', `${x}px`);
        heart.style.setProperty('--y', `${y}px`);
        heart.style.setProperty('--r', `${r}deg`);

        document.body.appendChild(heart);
    }

    
    setTimeout(() => {
        location.reload();
    }, 1500);
}