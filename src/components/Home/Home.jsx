import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import SearchHospital from "../SearchHospital/SearchHospital";
import MedicalServices from "../Sections/MedicalServices/MedicalServices";
import Offers from "../Sections/Offers/Offers";
import Specialization from "../Sections/Specialization/Specialization";
import Specialists from "../Sections/Specialists/Specialists";
import PatientCaring from "../Sections/PatientCaring/PatientCaring";
import Blogs from "../Sections/Blogs/Blogs";
import OurFamilies from "../Sections/OurFamilies/OurFamilies";
import FAQs from "../Sections/FAQs/FAQs";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          width: "100%",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <HeroSection />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <MedicalServices />
          </Stack>
        </Container>
      </Box>

      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </>
  );
};

export default Home;
