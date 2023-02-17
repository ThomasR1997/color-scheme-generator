import { useEffect, useState } from "react";
import {
  AppDiv,
  CheckedIcon,
  ColorDiv,
  ColorSelectDiv,
  FlexBox,
  HexDiv,
  MessageDiv,
  OuterColorDiv,
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledMessage,
  StyledSelect,
} from "../../components/StyledComponents";

export const LandingPage = () => {
  // State for color
  const [color, setColor] = useState("000000");

  // State for color mode
  const [mode, setMode] = useState("monochrome");

  // State for color api
  const [data, setData] = useState();

  // Get api
  const fetchApi = async () => {
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`
    );

    setData(await response.json());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Options for select tag
  const options = [
    { name: "Monochrome", value: "monochrome" },
    { name: "Monochrome-dark", value: "monochrome-dark" },
    { name: "Monochrome-light", value: "monochrome-light" },
    { name: "Analogic", value: "analogic" },
    { name: "Complement", value: "complement" },
    { name: "Analogic-complement", value: "analogic-complement" },
    { name: "Triad", value: "triad" },
  ];

  // Handler for get color scheme button
  const clickHandler = () => {
    fetchApi();
  };

  // Copies hex value to clipboard
  const copyHex = (e) => {
    navigator.clipboard.writeText(e);

    // Timed copy to clipboard message
    document.getElementById("timedMsg").style.display = "flex";

    setTimeout(() => {
      document.getElementById("timedMsg").style.display = "none";
    }, "1000");
  };

  return (
    <FlexBox>
      <AppDiv>
        <ColorSelectDiv>
          <StyledInput
            type="color"
            onChange={(e) => setColor(e.target.value.slice(1))}
          />

          <StyledSelect onChange={(e) => setMode(e.target.value)}>
            {options.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </StyledSelect>

          <StyledButton onClick={() => clickHandler()}>
            Get color scheme
          </StyledButton>
        </ColorSelectDiv>

        <StyledDiv>
          {data &&
            data.colors.map((item, index) => {
              return (
                <OuterColorDiv
                  onClick={() => copyHex(item.hex.value)}
                  key={index}
                >
                  <ColorDiv
                    style={{ backgroundColor: `${item.hex.value}` }}
                  ></ColorDiv>
                  <HexDiv>
                    <p>{item.hex.value}</p>
                  </HexDiv>
                </OuterColorDiv>
              );
            })}
        </StyledDiv>
        <MessageDiv id="timedMsg">
          <StyledMessage>Copied to clipboard!</StyledMessage>

          <CheckedIcon />
        </MessageDiv>
      </AppDiv>
    </FlexBox>
  );
};
