const otp = document.querySelector(".btn");
const generatedOtp = document.querySelector("#generatedOtp");

function genOtp() {
  let min = 100000;
  let max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

otp.addEventListener("click", () => {
  if (otp != null) {
    let generated_otp = genOtp();
    console.log(generated_otp);
    generatedOtp.innerHTML = generated_otp;
  }
});
