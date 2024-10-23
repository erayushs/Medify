import { Box, Container } from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import offer1 from "../../../assets/offer_img_1.png";
import offer2 from "../../../assets/offer_img_2.png";
import "./Offers.css";

const Offers = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ paddingBottom: "40px" }}
        >
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer2} />
          </SwiperSlide>
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer2} />
          </SwiperSlide>
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box className="offerImg" component={"img"} src={offer2} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Offers;
