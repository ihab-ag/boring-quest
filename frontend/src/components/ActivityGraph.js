import { View, Text } from 'react-native'
import React from 'react'

const GRAPH_HEIGHT = 400
const GRAPH_WIDTH = 370

const makeGraph = (data) => {
    const max = Math.max(...data.map(val => val.value))
    const min = Math.min(...data.map(val => val.value))
    const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35])
  
    const x = scaleTime()
      .domain([1, 15])
      .range([10, GRAPH_WIDTH - 10])
  
    const curvedLine = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value))
      .curve(curveBasis)(data)
  
    const skPath = Skia.Path.MakeFromSVGString(curvedLine)
  
    return {
      max,
      min,
      curve: skPath,
    }
  }
  
const ActivityGraph = () => {



    return (
        <View>
            <Text>ActivityGraph</Text>
        </View>
    )
}

export default ActivityGraph