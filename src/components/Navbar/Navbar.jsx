import {
  Container,
  Stack,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        py={2}
      >
        <Link to="/">
          <img src={logo} alt="Logo" height={27} />
        </Link>

        <Stack
          className={[styles.navlinks, burger && styles.active]}
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems={{ xs: "flex-start", md: "center" }}
          pt={{ xs: 12, md: 1 }}
          pb={{ xs: 4, md: 1 }}
          px={{ xs: 4, md: 0 }}
        >
          <Link>Find Doctors</Link>
          <Link to="/search">Hospitals</Link>
          <Link>Medicines</Link>
          <Link>Surgeries</Link>
          <Link>Software for Provider</Link>
          <Link>Facilities</Link>
          <Link to="/my-bookings">
            <Button variant="contained" disableElevation>
              My Bookings
            </Button>
          </Link>

          {isMobile && (
            <IconButton
              onClick={() => setBurger(false)}
              sx={{
                position: "absolute",
                top: 0,
                right: 32,
                color: "#fff",
              }}
            >
              <Close />
            </IconButton>
          )}
        </Stack>

        {isMobile && (
          <IconButton onClick={() => setBurger(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
