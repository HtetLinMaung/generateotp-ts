const { generateOtp, verifyOtp } = require("./lib/index");

function prefixZero(str) {
  while (str.length < 6) {
    str = "0" + str;
  }
  return str;
}

const possible_otps = [];
for (let i = 0; i < 1000000; i++) {
  possible_otps.push(prefixZero(`${i}`));
}

const { token } = generateOtp(6, "2m");

let otp = "";
for (const possible_otp of possible_otps) {
  console.log(`Possible OTP: ${possible_otp}`);
  if (verifyOtp(possible_otp, token)) {
    otp = possible_otp;
    break;
  }
}

if (otp) {
  console.log(`Correct OTP: ${otp}`);
} else {
  console.log("Brute force failed");
}
