export default function TemperatureInput({
  type,
  temperature,
  onTemperatureChange,
}) {
  const scaleName = {
    c: "Celsius",
    f: "Fahrenheit",
  };
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };
  return (
    <>
      <fieldset>
        <legend>Enter temperature in {scaleName[type]}</legend>
        <input value={temperature} onChange={(e) => handleChange(e)}></input>
      </fieldset>
    </>
  );
}
