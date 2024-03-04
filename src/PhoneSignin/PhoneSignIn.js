import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/Setup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Phone.css";
import { Button, TextField } from "@mui/material";

function PhoneSignIn() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const sendotp = async () => {
    try {
      if (!value || !document.getElementById("recaptcha").checked) {
        alert("Please enter a phone number and check the Recaptcha.");
        return;
      }
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, value, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyotp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="phonein">
      <div className="phone-content">
        <PhoneInput
          country={"us"}
          placeholder="Enter phone number"
          value={value}
          onChange={(value) => setValue("+" + value)}
        />

        <Button
          onClick={sendotp}
          sx={{ marginTop: "10px" }}
          variant="contained"
        >
          send otp
        </Button>
        <div style={{ marginTop: "10px" }} id="recaptcha"></div>
        <br />

        <TextField
          onChange={(e) => setOtp(e.target.value)}
          sx={{ marginTop: "10px", width: "300px" }}
          variant="outlined"
          size="small"
          label="Enter otp"
        />
        <br />
        <Button
          onClick={verifyotp}
          sx={{ marginTop: "10px" }}
          variant="contained"
          color="success"
        >
          Varify otp
        </Button>
      </div>
    </div>
  );
}

export default PhoneSignIn;
