import React from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import {format} from "date-fns"
import {fr} from "date-fns/locale"
import Weather from './Weather';
export default function Forecast({data}){

  const [forecasts,setForecasts]  =  React.useState([])
  React.useEffect(() => {
      console.log(data)
      const forecastData = data.list.map(f =>{
          const dt =  new Date(f.dt*1000)
          return({
              date : f.dt,
              hour : dt.getHours(),
              temp : Math.round(f.main.temp),
              icon : f.weather[0].main,
              name : format(dt,"EEEE",{locale : fr })
          })
         
      })
      setForecasts(forecastData)
    }, [data])
  return(
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {forecasts.map(f => (
              <View>
                <Text>{f.name} </Text>
                <Weather forecast={f}/>
            </View>
          ))}
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    scroll : {
        width : "100%",
        height : "35%"
    }
})
