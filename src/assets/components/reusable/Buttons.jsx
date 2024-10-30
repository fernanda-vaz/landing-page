import styled from "styled-components";
import { devices } from "./MediaQueries";

export const MyButtonTransparent = styled.button`
  font-family: "Rubik", sans-serif;
  border: 1px solid #F9F9F9;
  box-shadow: 0 24px 35px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(prop) => prop.color || "#F2F2F0"};
  padding: 18px 30px;
  border-radius: 4px;
  gap: 12px;
  width: ${(prop) => prop.width || "250px"};
  height: 78px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: ${(prop) => prop.fontSize || "24px"};
  background-color: transparent;
  transition: transform 0.5s;
  border-radius: 7px;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }

  @media only screen and (${devices.lg}) {
    font-size: ${(prop) => prop.fontSizeLg || "20px"};
  }

  @media only screen and (${devices.md}) {
    font-size: ${(prop) => prop.fontSizeMd || "18px"};
  }
`;

export const MyButtonBlue = styled.button`
  font-family: "Rubik", sans-serif;
  box-shadow: 0 24px 35px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(prop) => prop.color || "#F2F2F0"};
  border: none;
  padding: 18px 30px;
  border-radius: 4px;
  gap: 12px;
  width: ${(prop) => prop.width || "250px"};
  height: 78px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: ${(prop) => prop.fontSize || "24px"};
  background-color: #4452FE;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }

  @media only screen and (${devices.lg}) {
    font-size: ${(prop) => prop.fontSizeLg || "20px"};
  }

  @media only screen and (${devices.md}) {
    font-size: ${(prop) => prop.fontSizeMd || "18px"};
  }
`;
