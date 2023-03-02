import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather, locationState } from "../../store";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  const weather = useRecoilValue(fetchWeather);
  const [location, setLocation] = useRecoilState(locationState);

  console.log(weather);
  return (
    <div>
      <h1 className="text-2xl font-montserrat">home</h1>
    </div>
  );
};

export default Home;
