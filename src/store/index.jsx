import { selector, atom } from "recoil";
import axios from "axios";
export const locationState = atom({
  key: "location-state",
  default: "bandung",
});

export const fetchWeather = atom({
  key: "fetch-weather",
  get: async ({ get }) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_WEATHER_URL + get(locationState)
      );
      return res.data || [];
    } catch (error) {
      console.log(error);
    }
  },
});
