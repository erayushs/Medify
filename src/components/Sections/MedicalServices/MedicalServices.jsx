import { Box, Typography, Stack } from "@mui/material";
import doctorIcon from "../../../assets/Doctor.png";
import pharmacyIcon from "../../../assets/Drugstore.png";
import hospitalIcon from "../../../assets/Hospital.png";
import capsuleIcon from "../../../assets/Capsule.png";
import ambulanceIcon from "../../../assets/Ambulance.png";

export default function HeroServices() {
  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>

      {/* Services */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 1, md: 2 },
          flexWrap: "wrap",
        }}
      >
        {/* Doctors */}
        <Stack
          spacing={2}
          alignItems="center"
          bgcolor={"#FAFBFE"}
          p={3}
          borderRadius={2}
          sx={{ width: { xs: "100%", md: "18%" } }}
        >
          <Box component="img" src={doctorIcon} height={60} width={60} />
          <Typography color="#ABB6C7" fontSize={18} fontWeight={400}>
            Doctors
          </Typography>
        </Stack>

        {/* Labs */}
        <Stack
          spacing={2}
          alignItems="center"
          bgcolor={"#FAFBFE"}
          p={3}
          borderRadius={2}
          sx={{ width: { xs: "100%", md: "18%" } }}
        >
          <Box component="img" src={pharmacyIcon} height={60} width={60} />
          <Typography color="#ABB6C7" fontSize={18} fontWeight={400}>
            Labs
          </Typography>
        </Stack>

        {/* Hospitals */}
        <Stack
          spacing={2}
          alignItems="center"
          bgcolor={"rgba(42,167,255,0.08)"}
          p={3}
          borderRadius={2}
          border={"1px solid #2AA7FF"}
          sx={{ width: { xs: "100%", md: "18%" } }}
        >
          <Box component="img" src={hospitalIcon} height={60} width={60} />
          <Typography color="primary.main" fontSize={18} fontWeight={600}>
            Hospitals
          </Typography>
        </Stack>

        {/* Medical Store */}
        <Stack
          spacing={2}
          alignItems="center"
          bgcolor={"#FAFBFE"}
          p={3}
          borderRadius={2}
          sx={{ width: { xs: "100%", md: "18%" } }}
        >
          <Box component="img" src={capsuleIcon} height={60} width={60} />
          <Typography color="#ABB6C7" fontSize={18} fontWeight={400}>
            Medical Store
          </Typography>
        </Stack>

        {/* Ambulance */}
        <Stack
          spacing={2}
          alignItems="center"
          bgcolor={"#FAFBFE"}
          p={3}
          borderRadius={2}
          sx={{ width: { xs: "100%", md: "18%" } }}
        >
          <Box component="img" src={ambulanceIcon} height={60} width={60} />
          <Typography color="#ABB6C7" fontSize={18} fontWeight={400}>
            Ambulance
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
