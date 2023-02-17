import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";

// Centering app
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// App container
export const AppDiv = styled.div`
  margin-top: 3em;
  width: fit-content;
`;

// Color selection
export const ColorSelectDiv = styled.div`
  padding: 2em;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Color picking input
export const StyledInput = styled.input`
  height: 3.5em;
  cursor: pointer;
`;

// Select for color mode
export const StyledSelect = styled.select`
  padding: 1em;
  margin: 0 2em;
  width: 25em;
  background-color: white;
  border-radius: 5px;
  border: grey solid 1px;
  cursor: pointer;
  font-family: "Inter" sans-serif;
`;

export const StyledButton = styled.button`
  padding: 1em;
  background-color: white;
  border: solid gray 1px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Inter" sans-serif;
`;

// Color pallets
export const StyledDiv = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

// Color and hex container
export const OuterColorDiv = styled.div`
  cursor: pointer;
`;

// Color div
export const ColorDiv = styled.div`
  width: 8.1em;
  height: 25em;
`;

// Div for hex value
export const HexDiv = styled.div`
  background-color: white;
  padding: 0.5em;
  font-family: "Inter" sans-serif;
`;

// Copied to clipboard notification div
export const MessageDiv = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 5px;
  margin: 1em auto;
  padding: 1em;
  width: fit-content;
`;

// Copied message
export const StyledMessage = styled.p`
  margin: 0 1em;
`;

// Checkmark icon
export const CheckedIcon = styled(FcCheckmark)``;
