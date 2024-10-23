import { MenuItem, Select, Button, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchHospital = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const json = await response.json();
        setStates(json || []);
      } catch (error) {
        console.error("Error fetching states:", error);
        setStates([]);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await fetch(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        const json = await data.json();
        setCities(json || []);
      } catch (error) {
        console.log("Error in fetching city:", error);
        setCities([]);
      }
    };

    if (formData.state !== "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="">
          State
        </MenuItem>
        {states.length > 0 ? (
          states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No States Available</MenuItem>
        )}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="">
          City
        </MenuItem>
        {cities.length > 0 ? (
          cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Select a State First</MenuItem>
        )}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchHospital;
