import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import login from "../images/login.jpg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const LoginMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1%;
  background: white;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const LoginSubDivLeft = styled.div`
flex: 2;
box-shadow: inset 0 0 20px #000000
border: 2px solid black;
padding:20px;
margin: 10px;
`;
const LoginSubDivRight = styled.div`
  flex: 3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
`;
const Label = styled.label`
  display: block;
  color: black;
  font-weight: bold;
  padding: 9px 0px;
  font-size: 15px;
`;
const SubDiv = styled.div`
  margin: 10%;
`;
const InputField = styled.input`
  width: 100%;
  padding: 8px 6px;

  font-size: 13px;
`;
const InputFieldBox = styled.div`
  margin: 2px 0px;
`;
const Login = styled.h2`
  text-align: center;
  font-size: 28px;
`;
const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`;
const InfoDiv = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
`;
const LoginButton = styled.button`
  width: 70%;
  background: blue;
  color: white;
  padding: 10px 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: white;
  box-shadow: none;
`;
const InfoDivButton = styled.div`
  display: flex;
  justify-content: center;
`;
const RegisterInfo = styled.span`
  display: block;
  text-align: center;
`;
const InfoDivChild = styled.span`
  color: #737b86;
  display: flex;
  align-items: center;
`;
const InfoDivChildF = styled.span`
  color: #737b86;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const PasswordDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  alignitems: center;
`;
const PasswordInput = styled.input`
  width: 100%;
  padding: 8px 6px;
  fontsize: 13px;
`;
const PasswordSpan = styled.span`
  position: absolute;
  right: 0;
  margin: 10px 14px 10px 10px;
`;
export default function LoginP() {
  const [allInfo, setAllInfo] = useState({
    loginId: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const handleTogglePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const HandleChange = function (e) {
    var names = e.target.name;
    var values = e.target.value;
    console.log(values);
    setAllInfo({ ...allInfo, [names]: values });
  };

  return (
    <LoginMainDiv>
      <LoginSubDivLeft>
        <Image src={login}></Image>
      </LoginSubDivLeft>
      <LoginSubDivRight>
        <form style={{ margin: "10% 15%" }}>
          <Login>Login</Login>
          <InputFieldBox>
            <Label>LoginId</Label>
            <div style={{ width: "100%", display: "flex" }}>
              <InputField
                type="text"
                placeholder="Enter Your ID"
                id="loginId"
                name="loginId"
                value={allInfo.loginId}
                onChange={HandleChange}
              />
            </div>
          </InputFieldBox>
          <InputFieldBox>
            <Label>Password</Label>
            <PasswordDiv>
              <PasswordInput
                id="password"
                value={allInfo.password}
                placeholder="Password"
                name="password"
                type={passwordType === "text" ? "text" : "password"}
                onChange={HandleChange}
              ></PasswordInput>
              <PasswordSpan>
                {passwordType == "text" ? (
                  <AiOutlineEye onClick={handleTogglePasswordType} />
                ) : (
                  <AiOutlineEyeInvisible onClick={handleTogglePasswordType} />
                )}
              </PasswordSpan>
            </PasswordDiv>{" "}
          </InputFieldBox>
          <InfoDiv>
            <InfoDivChildF>
              <span style={{ display: "flex", alignItems: "center" }}>
                <CheckBox type="checkbox" id="rememberMe"></CheckBox>
                <span>Remember Me</span>
              </span>
              <a href="#" style={{ color: "#F78719" }}>
                Change Password
              </a>
            </InfoDivChildF>
          </InfoDiv>
          <InfoDiv>
            <InfoDivChild>
              <CheckBox type="checkbox" id="rememberMe"></CheckBox>
              <span>
                Agree to
                <a href="#" style={{ color: "#F78719" }}>
                  Terms & Conditions
                </a>
              </span>
            </InfoDivChild>
          </InfoDiv>
          <InfoDivButton>
            <LoginButton type="submit">Login</LoginButton>
          </InfoDivButton>
          <RegisterInfo>
            Don't have an account?
            <a style={{ color: "#F78719" }}>Register Here</a>
          </RegisterInfo>
        </form>
      </LoginSubDivRight>
    </LoginMainDiv>
  );
}
