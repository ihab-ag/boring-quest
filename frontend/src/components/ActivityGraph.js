import { View, Text, StyleSheet, Pressable, StatusBar, Animated } from 'react-native'
import React, { useState } from 'react'
import { Canvas, Easing, Line, Path, runTiming, Skia, useComputedValue, useValue, vec } from '@shopify/react-native-skia'
import { animatedData, animatedData2, originalData } from '../constants/Data'
import { curveBasis, line, scaleLinear, scaleTime } from 'd3'
import { DEVICE_WIDTH } from '../constants/Dimensions'
import { useSelector } from 'react-redux'



const GRAPH_WIDTH = DEVICE_WIDTH - 50
const GRAPH_HEIGHT = 150
// convert data to skia path
const makeGraph = (data) => {
    const max = Math.max(...data.map(val => val.value))
    const min = Math.min(...data.map(val => val.value))
    const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 1])

    const x = scaleTime()
        .domain([1, 6])
        .range([10, GRAPH_WIDTH - 10])

    const curvedLine = line()
        .x(d => x(d.date))
        .y(d => y(d.value))
        .curve(curveBasis)(data)

    const skPath = Skia.Path.MakeFromSVGString(curvedLine)

    return {
        max,
        min,
        curve: skPath,
    }
}

const ActivityGraph = ({ name }) => {
    // skia values for animation
    const transition = useValue(1)
    const state = useValue({
        current: 0,
        next: 1,
    })
    // state of current graph
    const [currentGraph, setCurrentGraph] = useState(0)
    // transition function to graph passed in parameter
    const transitionStart = (end) => {
        setCurrentGraph(end)
        state.current = {
            current: end,
            next: state.current.current,
        }
        transition.current = 0
        runTiming(transition, 1, {
            duration: 750,
            easing: Easing.inOut(Easing.cubic),
        })
    }

    const quests = useSelector(state=> state.quests)

    const graphData = [
        makeGraph(quests.midnight),
        makeGraph(quests.morning),
        makeGraph(quests.afternoon),
        makeGraph(quests.night)
    ]

    const path = useComputedValue(() => {
        const start = graphData[state.current.current].curve
        const end = graphData[state.current.next].curve
        const result = start.interpolate(end, transition.current)
        return result?.toSVGString() ?? '0'
    }, [state, transition])
    
    return (
        <>
            <View className='rounded-lg border-2 border-primary mt-4 '>
                <View className='p-2 flex-row justify-between'>
                    <Text className='font-inter-medium text-lg text-secondary'>{name}</Text>
                    <Text className='font-inter-medium text-lg text-secondary'>Max {graphData[currentGraph].max}</Text>
                </View>
                <View className='w-full rounded-lg py-4'>
                    <Canvas
                        style={{
                            width: '100%',
                            height: GRAPH_HEIGHT,
                        }}
                    >
                        <Line
                            p1={vec(0, 0)}
                            p2={vec(GRAPH_WIDTH, 0)}
                            color="#06D6A0"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Line
                            p1={vec(0, 75)}
                            p2={vec(GRAPH_WIDTH, 75)}
                            color="#FFD166"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Line
                            p1={vec(0, 150)}
                            p2={vec(GRAPH_WIDTH, 150)}
                            color="#EF476F"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Path
                            style="stroke"
                            path={path}
                            strokeWidth={3}
                            color="#118AB2"
                        />
                    </Canvas>
                </View>
                <View className='flex-row justify-around py-2 gap-x-1 p-2'>
                    <Pressable
                        onPress={() => transitionStart(0)}
                        className={`${currentGraph === 0 ? 'bg-secondary' : 'bg-primary'} rounded-md px-2 py-2 flex-1 justify-center items-center`}>
                        <Text className='text-white text-xs text-center font-inter-bold'>midnight</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => transitionStart(1)}
                        className={`${currentGraph === 1 ? 'bg-secondary' : 'bg-primary'} rounded-md px-2 py-2 flex-1 justify-center items-center`}>
                        <Text className='text-white text-xs text-center font-inter-bold'>morning</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => transitionStart(2)}
                        className={`${currentGraph === 2 ? 'bg-secondary' : 'bg-primary'} rounded-md px-2 py-2 flex-1  justify-center items-center`}>
                        <Text className='text-white text-xs text-center font-inter-bold'>afternoon</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => transitionStart(3)}
                        className={`${currentGraph === 3 ? 'bg-secondary' : 'bg-primary'} rounded-md px-2 py-2 flex-1  justify-center items-center`}>
                        <Text className='text-white text-xs text-center font-inter-bold'>night</Text>
                    </Pressable>
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

export default ActivityGraph