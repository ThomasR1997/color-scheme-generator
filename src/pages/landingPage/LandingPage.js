import { useEffect, useState } from "react";
import {
  AppDiv,
  ColorDiv,
  ColorSelectDiv,
  FlexBox,
  HexDiv,
  OuterColorDiv,
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledSelect,
} from "../../components/StyledComponents";

// https://www.thecolorapi.com
// https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6

export const LandingPage = () => {
  const [color, setColor] = useState("000000");
  const [mode, setMode] = useState("monochrome");
  const [data, setData] = useState();

  const fetchApi = async () => {
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`
    );

    setData(await response.json());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const options = [
    { name: "Monochrome", value: "monochrome" },
    { name: "Monochrome-dark", value: "monochrome-dark" },
    { name: "Monochrome-light", value: "monochrome-light" },
    { name: "Analogic", value: "analogic" },
    { name: "Complement", value: "complement" },
    { name: "Analogic-complement", value: "analogic-complement" },
    { name: "Triad", value: "triad" },
  ];

  const clickHandler = () => {
    fetchApi();
    console.log(data);
  };

  const copyHex = (e) => {
    navigator.clipboard.writeText(e);
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
      </AppDiv>
    </FlexBox>
  );
};
