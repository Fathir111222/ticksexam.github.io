$(document).ready(function() {
    var slideIndex = 0;
    var interval = setInterval(moveToNextSlide, 3000); // Set the interval for automatic movement (in milliseconds)
  
    function moveToNextSlide() {
      slideIndex++;
      showSlide();
    }
  
    function moveToPrevSlide() {
      slideIndex--;
      showSlide();
    }
  
    function showSlide() {
      var slides = $('.slides img');
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      slides.hide();
      slides.eq(slideIndex).show();
    }
  
    $('.next').click(function() {
      clearInterval(interval); // Stop the automatic movement
      moveToNextSlide();
    });
  
    $('.prev').click(function() {
      clearInterval(interval); // Stop the automatic movement
      moveToPrevSlide();
      
    });
  });


  // Countdown
 
  var penampungtimer = document.getElementById('countdown');
  var tanggalakhir = new Date("June 19, 2023 00:00:00").getTime();
  var countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = tanggalakhir - now;
    var jam = Math.floor((timeRemaining % (3000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    jam = padNumber(jam);
    menit = padNumber(menit);
    detik = padNumber(detik);

  // show
    penampungtimer.innerHTML = jam + ":" + menit + ":" + detik;

    // Menghentikan countdown jika sudah berakhir
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Countdown selesai!";
    }
  }, 1000);

  function padNumber(number) {
    return (number < 10 ? "0" : "") + number;
  }


  // Validasi Register
  function validasiData(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var phonenumber = document.getElementById("phone")
    var gender = document.getElementById("gender");
    var cb = document.getElementById("terms");
  
  const selectedOption = gender.value;
  const phoneNum = phonenumber.value.trim();


    if(!email.value.endsWith("@gmail.com")){
      alert= ("Email must ends with @gmail.com!");
    }else if(!AlphaNumeric(password.value)){
      alert("Password must be alpha numeric!")
    }else if(phoneNum === ''){
      alert("Phone number must not be empty!")
    }else if(selectedOption !== "male" && selectedOption !== "female"){
      alert("Gender must be Male or Female")
    }else if(!cb.checked){
      alert("Terms & Conditions must be agreed!")
    }else{
      alert("Data successfully uploaded")
      window.location.href = "home.html";
    }
  }
    
  function AlphaNumeric(password){
    var Alpha = false;
    var Numeric = false;
  
    for(let i = 0; i < password.length; i++){
      if(isNaN(password[i])){
        Alpha = true;
      }else{
        Numeric = true;
      }
      if(Alpha && Numeric){
        return true;
      }
    }
    return false;
  }


  // Loadmore

function munculUpcoming(){
  var tiket = document.getElementById("hidekonten1");
  var loadmore2 = document.getElementById("loadmore");

  loadmore2.addEventListener("click",function(){
    tiket.style.display = "block";
    loadmore2.style.display = "none";
  });
}
  



  
  