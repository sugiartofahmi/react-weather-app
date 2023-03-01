import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather, locationState } from "../../store";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  const weather = useRecoilValue(fetchWeather);
  const [location, setLocation] = useRecoilState(locationState);

  console.log(weather);
  return <h1>Home</h1>;
};

export default Home;
