const monthlyRadio = document.getElementById('switchMonthly');
const yearlyRadio = document.getElementById('switchYearly');
var price2 = document.getElementById('price2');
var price3 = document.getElementById('price3');
var para2 = document.getElementById('para2');
var para3 = document.getElementById('para3');

monthlyRadio.addEventListener('change', function () {
    if (this.checked) {
        // User selected Monthly
        price2.innerHTML = '$19 <span>/mo</span>';
        price3.innerHTML = '$49 <span>/mo</span>';
        para2.innerHTML = 'Billed monthly';
        para3.innerHTML = 'Billed monthly';
    }
});

yearlyRadio.addEventListener('change', function () {
    if (this.checked) {
        // User selected Annually
        price2.innerHTML = '$15 <span>/mo</span>';
        price3.innerHTML = '$45 <span>/mo</span>';
        para2.innerHTML = 'Billed $180 yearly';
        para3.innerHTML = 'Billed $540 yearly';
    }
});

let question = document.querySelectorAll('.question');
question.forEach(item => item.addEventListener('click', function () {
    let ans = item.querySelector('p');
    console.log(ans);
    let horizontal = item.querySelector('.left').querySelector('.cross').querySelector('.horizontal');
    if (ans.style.display == 'block') {
        ans.style.display = 'none';
        horizontal.style.transform = "rotate(90deg)";
    }
    else {
        ans.style.display = 'block';
        horizontal.style.transform = "rotate(0deg)";
    }
}));




function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
