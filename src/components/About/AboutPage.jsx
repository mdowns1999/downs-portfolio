import classes from "./AboutPage.module.css";
import couplePhoto from "../../assets/images/couplePic.jpg";
import Paragraph from "../UI/Paragraph";
import Image from "../UI/Image";

const AboutPage = () => {
  return (
    <section className={classes.aboutBox}>
      <div>
        <h1>Personal life</h1>

        <Paragraph>
          I was born and raised in Rexburg, Idaho, and graduated from Madison
          High School in 2017. After high school, I served a two-year mission
          for the Church of Jesus Christ of Latter-day Saints. Upon returning, I
          attended Brigham Young University – Idaho (BYU-I), where I graduated
          in April 2024 with a bachelor&apos;s degree in Software Engineering.
          Outside of academics, I enjoy unwinding by reading various books or
          watching TV shows like Magnum PI and Hawaii 5-0. I also love spending
          time with my wife and friends, especially when we go dancing—Latin,
          ballroom, and country.
        </Paragraph>
      </div>
      <Image src={couplePhoto} alt="Mike and Jami Downs" />
    </section>
  );
};

export default AboutPage;
