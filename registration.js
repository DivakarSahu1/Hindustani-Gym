function showForm() {
  document.getElementById("welcome-video").style.display = "none";
  document.getElementById("registration-form").style.display = "block";
}

function nextStep(step) {
  var currentStep = document.querySelector(".step.active");
  currentStep.classList.remove("active");
  document.getElementById("step" + step).classList.add("active");
}

function sendOTP() {
  if (validateStep2()) {
    document.getElementById("otp-popup").style.display = "block";
  } else {
    alert("Please fill in all the fields correctly.");
  }
}

function verifyOTP() {
  var otp = document.getElementById("otp").value;
  if (otp === "123456") {
    // Simulated OTP
    alert("OTP verified successfully.");
    nextStep(4);
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

function verifyPopupOTP() {
  var popupOtp = document.getElementById("popup-otp").value;
  if (popupOtp === "123456") {
    // Simulated OTP
    document.getElementById("otp-popup").style.display = "none";
    nextStep(4);
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

function submitForm() {
  if (validateForm()) {
    document.getElementById("success-popup").style.display = "block";
  } else {
    alert("Please fill in all the fields correctly.");
  }
}

function closePopup() {
  document.getElementById("otp-popup").style.display = "none";
}

function closeSuccessPopup() {
  document.getElementById("success-popup").style.display = "none";
}

function goHome() {
  document.getElementById("success-popup").style.display = "none";
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("welcome-video").style.display = "block";
}

function validateStep2() {
  var contact = document.getElementById("contact").value;
  var countryCode = document.getElementById("country-code").value;

  return contact && countryCode;
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var countryCode = document.getElementById("country-code").value;
  var contact = document.getElementById("contact").value;
  var goals = document.getElementById("goals").value;
  var plan = document.getElementById("plan").value;

  return (
    name && email && dob && gender && countryCode && contact && goals && plan
  );
}
