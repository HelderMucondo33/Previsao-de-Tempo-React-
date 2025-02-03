import './WeatherInfo5Days.css'

function WeatherInfo5Days({ WeatherInfo5Days }) {
  
  console.log(WeatherInfo5Days)

  let dailyForecast = {}

  for(let forecast of WeatherInfo5Days.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    console.log(date)
  }

  return (
    <div >
      <p>5 days</p>
    </div>
  );
}

export default WeatherInfo5Days;
