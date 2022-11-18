import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { Canvas, Easing, Line, Path, runTiming, Skia, useComputedValue, useValue, vec } from '@shopify/react-native-skia';
import { animatedData, animatedData2, originalData } from '../constants/Data'
import { curveBasis, line, scaleLinear, scaleTime } from 'd3'
import DefaultScreen from '../layouts/DefaultScreen'
import { DEVICE_WIDTH } from '../constants/Dimensions';



const GRAPH_WIDTH = DEVICE_WIDTH - 50
const GRAPH_HEIGHT = 150

const makeGraph = (data) => {
    const max = Math.max(...data.map(val => val.value));
    const min = Math.min(...data.map(val => val.value));
    const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 1]);

    const x = scaleTime()
        .domain([1, 15])
        .range([10, GRAPH_WIDTH - 10]);

    const curvedLine = line()
        .x(d => x(d.date))
        .y(d => y(d.value))
        .curve(curveBasis)(data);

    const skPath = Skia.Path.MakeFromSVGString(curvedLine);

    return {
        max,
        min,
        curve: skPath,
    };
};

const ActivityGraph = () => {
    const transition = useValue(1);
    const state = useValue({
        current: 0,
        next: 1,
    });
    const transitionStart = (end) => {
        state.current = {
            current: end,
            next: state.current.current,
        };
        transition.current = 0;
        runTiming(transition, 1, {
            duration: 750,
            easing: Easing.inOut(Easing.cubic),
        });
    };
    const graphData = [
        makeGraph(originalData),
        makeGraph(animatedData),
        makeGraph(animatedData2),
    ];
    const path = useComputedValue(() => {
        const start = graphData[state.current.current].curve;
        const end = graphData[state.current.next].curve;
        const result = start.interpolate(end, transition.current);
        return result?.toSVGString() ?? '0';
    }, [state, transition]);

    return (
        <>
        <View className='rounded-lg border-2 border-primary mt-4 '>
            <View className='p-2'>
                <Text className='font-inter-medium text-lg text-secondary'>Productivity</Text>
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
                <View className='flex-row justify-around py-2 gap-x-8 p-2'>
                    <Pressable
                        onPress={() => transitionStart(0)}
                        className='bg-primary rounded-md px-4 py-2 flex-1 justify-center items-center'>
                        <Text className='font-inter-medium text-white text-center'>daily</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => transitionStart(1)}
                        className='bg-primary rounded-md px-4 py-2 flex-1 justify-center items-center'>
                        <Text className='font-inter-medium text-white text-center'>weekly</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => transitionStart(2)}
                        className='bg-primary rounded-md px-4 py-2 flex-1'>
                        <Text className='font-inter-medium text-white text-center'>monthly</Text>
                    </Pressable>
                </View>
                <StatusBar style="auto" />
            </View>
            </>
    );
}

export default ActivityGraph