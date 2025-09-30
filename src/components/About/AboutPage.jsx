import classes from "./AboutPage.module.css";
import couplePhoto from "../../assets/images/couplePic.jpg";
import Paragraph from "../UI/Paragraph";
import Image from "../UI/Image";

const AboutPage = () => {
  return (
  // <>
  //   <section className={classes.aboutBox}>
  //     <div>
  //       <h1>Personal life</h1>

  //       <Paragraph>
  //         I was born and raised in Rexburg, Idaho, and graduated from Madison
  //         High School in 2017. After high school, I served a two-year mission
  //         for the Church of Jesus Christ of Latter-day Saints. Upon returning, I
  //         attended Brigham Young University – Idaho (BYU-I), where I graduated
  //         in April 2024 with a bachelor&apos;s degree in Software Engineering.
  //         Outside of academics, I enjoy unwinding by reading various books or
  //         watching TV shows like Magnum PI and Hawaii 5-0. I also love spending
  //         time with my wife and friends, especially when we go dancing—Latin,
  //         ballroom, and country.
  //       </Paragraph>
  //     </div>
  //     <Image src={couplePhoto} alt="Mike and Jami Downs" />
  //   </section>
  // </>
      <div id="print-content">
        <h1>Page Break Test</h1>
        <div className={`page ${styles.section}`}>
          <p>This is the first section. It should appear on the first page.</p>
        </div>
        <div className={styles.pageBreak} />
        <div className={`page ${styles.section} ${styles.breakBefore}`}>
          <p>This section should start on a new page.</p>
        </div>
        <div className={styles.pageBreak} />
        <div className={`${styles.section} ${styles.breakAfter}`}>
          <p>This section should end with a page break after it.</p>
        </div>
        <div className='page-break' />
        <div className={`page ${styles.section}`}>
          <p>
            This section should follow the previous one, unless the break-after
            forced a new page.
          </p>
        </div>
         <div className='page-break' />
         <div className={`page ${styles.section}`}>
          <p>
            This section should follow the previous one, unless the break-after
            forced a new page.
          </p>
        </div>
      </div>
  );
};

export default AboutPage;
