const getImage = (imageName) => {
  switch (imageName) {
    case "Poppin Soda":
      return require("../assets/images/poppinSoda.png");
    case "Style Stage":
      return require("../assets/images/styleStage.png");
    case "BYUI Rebuild":
      return require("../assets/images/BYUIHomePage.png");
    case "Weather App":
      return require("../assets/images/weatherForecast.png");
    case "Chess":
      return require("../assets/images/chessPic.png");
    case "Orbit Simulator":
      return require("../assets/images/orbitPic.png");
    case "Php Motors":
      return require("../assets/images/phpMotorsHome.png");
    case "C# ATM":
      return require("../assets/images/cSharpATM.png");
    default:
      return require("../assets/images/blank.png");
  }
};

export default getImage;
