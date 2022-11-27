import {
    Canvas,
    Path,
    runTiming,
    Skia,
    Text,
    useComputedValue,
    useFont,
    useValue,
    Line,
    vec
} from '@shopify/react-native-skia'
import { Button, Easing, StyleSheet, View } from 'react-native'
import * as d3 from 'd3'
import { useSelector } from 'react-redux'

const GRAPH_MARGIN = 20
const GRAPH_BAR_WIDTH = 8

const CanvasHeight = 250
const CanvasWidth = 350
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN
const graphWidth = CanvasWidth - 2

const BarGraph = () => {
    
    const data = useSelector(state=> state.quests.bar_data)
    const font = useFont(require('../../assets/fonts/static/Inter-Bold.ttf'), 10)
    const animationState = useValue(1)

    const xDomain = data.map((dataPoint) => dataPoint.label)
    const xRange = [0, graphWidth]
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1)

    const yDomain = [
        0,
        d3.max(data, (yDataPoint) => yDataPoint.value),
    ]
    const yRange = [0, graphHeight]
    const y = d3.scaleLinear().domain(yDomain).range(yRange)

    const animate = () => {
        animationState.current = 0

        runTiming(animationState, 1, {
            duration: 1600,
            easing: Easing.inOut(Easing.exp),
        })
    }

    const path = useComputedValue(() => {
        const newPath = Skia.Path.Make()

        data.forEach((dataPoint) => {
            const rect = Skia.XYWHRect(
                x(dataPoint.label) - GRAPH_BAR_WIDTH / 2,
                graphHeight,
                GRAPH_BAR_WIDTH,
                y(dataPoint.value * animationState.current) * -1,
            )

            const rrect = Skia.RRectXY(rect, 8, 8)
            newPath.addRRect(rrect)
        })

        return newPath
    }, [animationState])

    if (!font) {
        return <View />
    }

    animate()

    return (
        <View className='rounded-lg border-2 border-primary mt-4 items-center'>
            <View className='w-full rounded-lg py-4'>
                <View style={styles.container}>
                    <Canvas style={styles.canvas}>
                        <Line
                            p1={vec(0, 30)}
                            p2={vec(graphWidth, 30)}
                            color="#06D6A0"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Line
                            p1={vec(0, 90)}
                            p2={vec(graphWidth, 90)}
                            color="#FFD166"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Line
                            p1={vec(0, 150)}
                            p2={vec(graphWidth, 150)}
                            color="#EF476F"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Line
                            p1={vec(0, 210)}
                            p2={vec(graphWidth, 210)}
                            color="#073B4C"
                            style="stroke"
                            strokeWidth={2}
                        />
                        <Path path={path} color="#118AB2" />
                        {data.map((dataPoint) => (
                            <Text
                                key={dataPoint.label}
                                font={font}
                                x={x(dataPoint.label) - 10}
                                y={CanvasHeight - 25}
                                text={dataPoint.label}
                            />
                        ))}
                    </Canvas>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    canvas: {
        height: CanvasHeight,
        width: CanvasWidth,
    },
})

export default BarGraph