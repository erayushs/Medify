import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dentistry from "../../../assets/dentistry.png";
import primary_care from "../../../assets/primary_care.png";
import cardiology from "../../../assets/cardiology.png";
import mri_resonance from "../../../assets/mri_resonance.png";
import blood_test from "../../../assets/blood_test.png";
import piscologist from "../../../assets/piscologist.png";
import laboratory from "../../../assets/laboratory.png";
import x_ray from "../../../assets/x-ray.png";

const Specialization = () => {
  const data = [
    dentistry,
    primary_care,
    cardiology,
    mri_resonance,
    blood_test,
    piscologist,
    laboratory,
    x_ray,
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialization
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item}>
              <Stack
                spacing={2}
                alignItems="center"
                bgcolor={"#FFFFFF"}
                p={3}
                borderRadius={2}
                boxShadow={true ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
                height={180}
                width={270}
              >
                <Box component="img" src={item} height={136} width={121} />
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialization;
