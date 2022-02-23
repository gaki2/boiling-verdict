import TemperatureInput from "../components/TemperatureInput";
import { useState, useEffect } from "react";
import { tryConvert, toCelsius, toFahrenheit } from "../convert";

export default function BoilingVerdict() {
  const [temperature, setTemperature] = useState({
    type: "c",
    value: "",
  });
  const [boiling, setBoiling] = useState(false);

  useEffect(() => {
    if (parseFloat(temperature.value) >= 100) {
      setBoiling(true);
    } else {
      setBoiling(false);
    }
  }, [temperature]);

  const handleCelsiusChange = (temperature) => {
    setTemperature({ type: "c", value: temperature });
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature({ type: "f", value: temperature });
  };

  const scale = temperature.type;
  const value = temperature.value;
  const celsius = scale === "c" ? value : tryConvert(value, toCelsius);
  const fahrenheit = scale === "f" ? value : tryConvert(value, toFahrenheit);
  const className = `wrapper ${boiling ? "boiling" : ""}`;
  return (
    <div className={className}>
      <TemperatureInput
        type={"c"}
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      ></TemperatureInput>
      <TemperatureInput
        type={"f"}
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      ></TemperatureInput>
    </div>
  );
}
