import { useEffect, useState } from "react";
import { ColorDiv, HexDiv, StyledDiv } from "../../components/StyledComponents";

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
  }, [color, mode]);

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

  console.log(color);
  console.log(mode);

  if (data) {
    console.log(data.colors[0].hex.value);

    data.colors.map((e) => {
      return console.log(e.hex.value);
    });
  }

  return (
    <div>
      <div>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value.slice(1))}
        />

        <select onChange={(e) => setMode(e.target.value)}>
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>

        <button onClick={() => clickHandler()}>Get color scheme</button>
      </div>

      <StyledDiv>
        {data &&
          data.colors.map((item, index) => {
            return (
              <div key={index}>
                <ColorDiv
                  style={{ backgroundColor: `${item.hex.value}` }}
                ></ColorDiv>
                <HexDiv>
                  <p>{item.hex.value}</p>
                </HexDiv>
              </div>
            );
          })}
      </StyledDiv>
    </div>
  );
};
