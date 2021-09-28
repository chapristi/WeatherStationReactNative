import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';
import {isSameDay} from 'date-fns';
const getIcon =  (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png` 
export default  function CurrentWeather({data}){
  const [CurrentWeather,setCurrentWeather] = React.useState(null)
  React.useEffect(() =>{
      const currentW = data.list.filter(forecast => {
        const today = new Date().getTime() + Math.abs(data.city.timezone*1000)
        const forecastDate = new Date(forecast.dt*1000)
        return isSameDay(today,forecastDate)
      })
      setCurrentWeather(currentW[0]);
  }, [data])
  
  return(
    <>
      <Text style={styles.city}>{data?.city?.name}</Text> 
      <Text style={styles.today}>Aujourd'hui  :</Text>
      <Image s
        source={{uri: getIcon(CurrentWeather?.weather[0].icon)}}
        style={{height:150,width:150,marginVertical:20}}
      />
      <Text style={styles.temp}>{Math.round(CurrentWeather?.main?.temp)}°C</Text> 
      <Text style={styles.description}>{CurrentWeather?.weather[0].description}</Text> 

    </>
  );
}
const COLOR = "#54565B";
const styles = StyleSheet.create({
  city:{
    fontSize  : 36,
    fontWeight : 500,
    color : COLOR,

  },
  today:{
    fontSize:24,
    fontWeight : 30 ,
    color : COLOR,
  },
  temp:{
    fontSize:80,
    fontWeight:"bold",
    color : COLOR,
  },
  description:{
    fontSize : 24,
    fontVariant : "bold",
    color : COLOR,

  }
})
