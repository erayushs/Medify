import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import detox from "../../../assets/detox.png";
import doctor from "../../../assets/newDr.png";

const Blogs = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
                  <Box component="img" src={detox} width={1} />
                  <Box p={2}>
                    <Typography
                      color="#77829D"
                      fontWeight={500}
                      mb={1}
                      fontSize={{ xs: 12, md: 16 }}
                    >
                      Medical | March 31, 2022
                    </Typography>
                    <Typography
                      component="h3"
                      color="#1B3C74"
                      fontSize={{ xs: 14, md: 18 }}
                      fontWeight={500}
                      lineHeight={1.2}
                      mb={2}
                    >
                      6 Tips To Protect Your Mental Health When You're Sick
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        component="img"
                        src={doctor}
                        height={32}
                        width={32}
                      />
                      <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Blogs;
