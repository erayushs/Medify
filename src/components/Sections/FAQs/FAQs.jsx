import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import banner from "../../../assets/faq_banner.jpg";
import CustomizedAccordions from "../../Accordion/Accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Our medical center offers personalized care, ensuring that every family member receives tailored treatments in a compassionate environment. We combine cutting-edge technology with a patient-first approach to deliver high-quality care.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "We focus on building long-term relationships with our patients through consistent, reliable care. Our team of experienced specialists work together to provide comprehensive solutions, making us a trusted healthcare provider.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "With decades of experience, our senior care services are designed to provide comfort, dignity, and specialized medical attention. We understand the unique needs of seniors and prioritize their well-being through compassionate care.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "For emergency appointments, you can reach us 24/7 through our emergency hotline or online booking system. Our quick-response team ensures that you receive immediate attention when it matters most.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box src={banner} component="img" width={1} height="auto" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box maxWidth={450}>
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default FAQs;
