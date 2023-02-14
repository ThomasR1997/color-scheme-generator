import { useState } from "react";
import { ColorDiv } from "../../components/StyledComponents";

// https://www.thecolorapi.com
// https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6

export const LandingPage = () => {
  const { color, setColor } = useState();
  const { mode, setMode } = useState();

  const options = [
    { name: "Monochrome", value: "monochrome" },
    { name: "Monochrome-dark", value: "monochrome-dark" },
    { name: "Monochrome-light", value: "monochrome-light" },
    { name: "Analogic", value: "analogic" },
    { name: "Complement", value: "complement" },
    { name: "Analogic-complement", value: "analogic-complement" },
    { name: "Triad", value: "triad" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
    setMode((mode) => (mode = e.target.value));
  };

  const clickHandler = () => {};

  return (
    <div>
      <div>
        <input type="color" />

        <select onChange={(e) => setMode((mode) => (mode = e.target.value))}>
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
      <ColorDiv></ColorDiv>
      <div></div>
    </div>
  );
};
