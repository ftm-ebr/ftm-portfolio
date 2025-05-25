const themeToggleIcon = document.getElementById('theme-toggle-icon');
const body = document.body;
themeToggleIcon.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  if (newTheme === 'dark') {
    themeToggleIcon.classList.remove('fa-moon');
    themeToggleIcon.classList.add('fa-sun');
  } else {
    themeToggleIcon.classList.remove('fa-sun');
    themeToggleIcon.classList.add('fa-moon');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      themeToggleIcon.classList.remove('fa-moon');
      themeToggleIcon.classList.add('fa-sun');
    } else {
      themeToggleIcon.classList.remove('fa-sun');
      themeToggleIcon.classList.add('fa-moon');
    }
  } else {
    const defaultTheme = body.getAttribute('data-theme');
    if (defaultTheme === 'dark') {
      themeToggleIcon.classList.remove('fa-moon');
      themeToggleIcon.classList.add('fa-sun');
    }
  }
});


function showMenu() {
  var manu=document.getElementById("menu");
  if (menu.className=="header-menu"){
      menu.className +=" show"
  } else {
      menu.className="header-menu";
  }
}


const modal = document.getElementById("signupModal");
const closeBtn = document.getElementById("closeModal");
document.querySelectorAll(".openModal").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "ایمیل معتبر نیست.";
    isValid = false;
  }
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
    isValid = false;
  }
  if (isValid) {
    alert("ثبت‌نام با موفقیت انجام شد!");
    document.getElementById("signupForm").reset();
    modal.style.display = "none";
  }
});


const slides = document.querySelectorAll(".slide");
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    document.getElementById("next").addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  
    document.getElementById("prev").addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);  
    showSlide(current);


    const newsItems = document.querySelectorAll(".news-item");
const mainImage = document.getElementById("main-news-img");
const mainTitle = document.getElementById("main-news-title");
const mainDesc = document.getElementById("main-news-desc");
newsItems.forEach(item => {
  item.addEventListener("click", () => {
    newsItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").innerText;
    const desc = item.querySelector("p").innerText;
    mainImage.src = img;
    mainTitle.innerText = title;
    mainDesc.innerText = desc;
  });
});