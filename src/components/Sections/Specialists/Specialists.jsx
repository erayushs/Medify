import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img2 from "../../../assets/dr_ahmad.png";
import img3 from "../../../assets/dr_heena.png";
import img4 from "../../../assets/dr_ankur.png";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Specialists = () => {
  const specialist_data = [img2, img3, img4, img2, img3, img4];

  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialist
      </Typography>

      <Box sx={{ position: "relative" }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 4,
            },
          }}
          style={{ paddingBottom: "50px" }}
        >
          {specialist_data.map((doc, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={doc}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Specialists;
