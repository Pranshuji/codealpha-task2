const captchaText = document.getElementById("captchaText");
const captcha = document.getElementById("captcha");
const captchaInput = document.getElementById("captchaInput");
const loginButton = document.getElementById("loginButton");

function generateCaptcha() {
    const captchaValue = Math.floor(Math.random() * 9000) + 1000;
    captcha.textContent = captchaValue;
}

generateCaptcha();

loginButton.addEventListener("click", () => {
    const enteredCaptcha = captchaInput.value;
    const generatedCaptcha = captcha.textContent;

    if (enteredCaptcha === generatedCaptcha) {
        alert("CAPTCHA solved! You are logged in.");
    } else {
        alert("CAPTCHA verification failed. Please try again.");
        generateCaptcha();
        captchaInput.value = "";
    }
});
