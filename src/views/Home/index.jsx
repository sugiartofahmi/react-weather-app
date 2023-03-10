import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather, locationState } from "../../store";
import { ErrorBoundary } from "react-error-boundary";
import Card from "../../components/Card";
const Home = () => {
  const weather = useRecoilValue(fetchWeather);
  const [location, setLocation] = useRecoilState(locationState);

  const changeLocation = (e) => {
    if (e.key == "Enter") {
      try {
        setLocation(e.target.value);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col justify-between items-center text-white ">
      <div className="w-[60vh] sm:w-full px-[5vh] flex flex-col justify-center item ">
        <label className="block mb-2 text-xl font-semibold  ">Location</label>
        <input
          onKeyUp={(e) => changeLocation(e)}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5   focus:bg-opacity-90 bg-opacity-50 outline-none"
          placeholder="Search location"
        />
      </div>
      <ErrorBoundary
        fallback={<h1 className="text-red-500">Could not fetch data.</h1>}
      >
        <div className="w-full flex flex-row justify-between items-center text-xl px-[7vh]">
          <div>
            <h2 className="text-base">
              {weather.name} - {weather.sys.country}
            </h2>
            <h2 className="text-5xl font-bold">
              {Math.round((weather.main.temp - 32) * 0.555)}
              <span>&#8451;</span>
            </h2>
          </div>
          <h2>{weather.weather[0].main}</h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-xl px-[7vh]">
          <Card>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold">
                {Math.round((weather.main.feels_like - 32) * 0.555)}
                <span>&#8451;</span>
              </h1>
              <h1>Feels Like</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold">{weather.main.humidity}%</h1>
              <h1>Humidity</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold">
                {Math.round(weather.wind.speed)}MPH
              </h1>
              <h1>Winds</h1>
            </div>
          </Card>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
