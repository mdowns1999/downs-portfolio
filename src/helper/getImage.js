const getImage = (imageName) => {
  switch (imageName) {
    case "Poppin Soda":
      return require("../assets/images/poppinSoda.jpg");
    case "Style Stage":
      return require("../assets/images/styleStage.jpg");
    case "BYUI Rebuild":
      return require("../assets/images/BYUIHomePage.jpg");
    case "Weather App":
      return require("../assets/images/weatherForecast.jpg");
    case "Chess":
      return require("../assets/images/chessPic.jpg");
    case "Orbit Simulator":
      return require("../assets/images/orbitPic.jpg");
    case "PHP Motors":
      return require("../assets/images/phpMotorsHome.jpg");
    case "C# ATM":
      return require("../assets/images/cSharpAtm.jpg");
    default:
      return require("../assets/images/blank.png");
  }
};

export default getImage;
