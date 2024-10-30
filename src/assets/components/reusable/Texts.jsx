import styled from "styled-components";
import { devices } from "./MediaQueries";

export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: ${prop => prop.fontSize || "56px"};
  color: ${prop => prop.color || "#F9F9F9"};
  text-align: ${(prop) => prop.textAlign || "center"};
  line-height: 1.4;
  font-weight: 500;
  padding: ${(prop) => prop.padding || "20px"};
  width: 80vw;
  max-width: ${prop => prop.maxWidth || '100%'};
  margin: ${(prop) => prop.margin || "0px"};
  font-family: "Rubik", sans-serif;

  @media only screen and (${devices.lg}) {
    font-size: ${(prop) => prop.fontSizeLg || "48px"};
    margin: ${(prop) => prop.marginLg || "0"};
  }

  @media only screen and (${devices.md}) {
    font-size: ${(prop) => prop.fontSizeMd || "36px"};
    margin: ${(prop) => prop.marginMd || "0"};
  }
`;

export const Subtitle = styled.h3`
  font-size: ${(prop) => prop.fontSize || "36px"};
  font-weight: ${(prop) => prop.fontWeight || "bold"};
  padding: ${(prop) => prop.padding || "20px"};
  color: ${(prop) => prop.color || "#F9F9F9"};
  text-align: ${(prop) => prop.textAlign || "center"};
  font-family: "Rubik", sans-serif;

  @media only screen and (${devices.lg}) {
    font-size: ${(prop) => prop.fontSizeLg || "32px"};
  }

  @media only screen and (${devices.md}) {
    font-size: ${(prop) => prop.fontSizeMd || "28px"};
  }
`;

export const Text = styled.p`
  font-size: ${(prop) => prop.fontSize || "20px"};
  font-weight: 400;
  color: ${(prop) => prop.color || "#F9F9F9"};
  text-align: ${(prop) => prop.textAlign || "center"};
  padding: ${(prop) => prop.padding || "20px"};
  margin: ${(prop) => prop.margin || "10px"};
  width: ${(prop) => prop.width || "90%"};
  font-family: "Rubik", sans-serif;
  line-height: 150%;
  letter-spacing: 0.05em;

  @media only screen and (${devices.lg}) {
    font-size: ${(prop) => prop.fontSizeLg || "16px"};
    margin: ${(prop) => prop.marginLg || "0"};
  }

  @media only screen and (${devices.md}) {
    font-size: ${(prop) => prop.fontSizeMd || "14px"};
    margin: ${(prop) => prop.marginMd || "0"};
  }
`;
