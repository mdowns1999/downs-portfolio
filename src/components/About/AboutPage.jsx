import Grid from '@mui/material/Grid';
import LayoutBand from '../UI/LayoutBand';
import Heading from '../UI/Heading';
import Separator from '../UI/Separator';
import Paragraph from '../UI/Paragraph';
import Image from '../UI/Image';
import couplePhoto from '../../assets/images/couplePic.jpg';

const photoStyle = { width: '80%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(47,126,200,0.12)' };

const AboutPage = () => {
  return (
    <LayoutBand spacing="lg">
      <Grid container spacing={6} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
          <Heading level="h1">Personal Life</Heading>
          <Separator size="xs" showLine />
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
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image src={couplePhoto} alt="Mike and Jami Downs" style={photoStyle} />
        </Grid>
      </Grid>
    </LayoutBand>
  );
};

export default AboutPage;
