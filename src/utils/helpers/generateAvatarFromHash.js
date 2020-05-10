import tinycolor from "tinycolor2";

const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default (hash) => {
  const [r, g, b] = hash
    .slice(15, -14)
    .substring(0, 3)
    .split("")
    .map((item) => getCorrectIndex(item.charCodeAt(0)));
  console.log(r, g, b);
  return {
    color: tinycolor({ r, g, b }).lighten(30).saturate(10).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(25).saturate(55).toHexString(),
  };
};
