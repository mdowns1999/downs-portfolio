// Import all images
import poppinSoda from "../assets/images/poppinSoda.jpg";
import styleStage from "../assets/images/styleStage.jpg";
import byuiRebuild from "../assets/images/BYUIHomePage.jpg";
import weatherApp from "../assets/images/weatherForecast.jpg";
import chess from "../assets/images/chessPic.jpg";
import orbitSimulator from "../assets/images/orbitPic.jpg";
import phpMotors from "../assets/images/phpMotorsHome.jpg";
import cSharpAtm from "../assets/images/cSharpAtm.jpg";
import blank from "../assets/images/blank.png";

// Create a mapping of image names to imported images
const imageMap = {
  "Poppin Soda": poppinSoda,
  "Style Stage": styleStage,
  "BYUI Rebuild": byuiRebuild,
  "Weather App": weatherApp,
  "Chess": chess,
  "Orbit Simulator": orbitSimulator,
  "PHP Motors": phpMotors,
  "C# ATM": cSharpAtm,
};

// Define the getImage function
const getImage = (imageName) => {
  return imageMap[imageName] || blank;
};

export default getImage;
