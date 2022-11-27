import { Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Camera, FlashMode, CameraType } from 'expo-camera'
import DiamondIconContainer from './DiamondIconContainer'
import { MaterialIcons } from '@expo/vector-icons'
import LoadingDots from './LoadingDots'

const MyCamera = ({ setPhoto, setVisible }) => {

    let cameraRef = useRef()

    const [hasCameraPermission, setHasCameraPermission] = useState()
    const [flash, setFlash] = useState(FlashMode.off)
    const [type, setType] = useState(CameraType.back);
    const [loading, setLoading] = useState(false)

    // get permissons
    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(cameraPermission.status === "granted")
        })()
    }, [])

    if (hasCameraPermission === undefined) {
        return <></>
    } else if (!hasCameraPermission) {
        return <></>
    }

    const takePic = async () => {
        const options = {
            quality: 1,
            base64: true,
            exif: false
        }
        setLoading(true)

        const newPhoto = await cameraRef.current.takePictureAsync(options)


        setPhoto(newPhoto)

        setVisible(false)
    }

    const toggleFlash = () => {
        setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off)
    }

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    return (
        <Camera className='absolute h-full w-full' flashMode={flash} ref={cameraRef} type={type} >
            <View className='absolute bottom-0 flex-row w-full p-2 justify-between items-center'>
                <View className='p-4'>
                    <MaterialIcons name="camera-alt" size={32} color="#fff0" /></View>
                <TouchableOpacity onPress={takePic} className='p-4'>
                    <DiamondIconContainer size='lg' >
                        {
                            loading ?
                                <LoadingDots />
                                :
                                <MaterialIcons name="camera-alt" size={32} color="white" />
                        }
                    </DiamondIconContainer>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraType} className='p-4'>
                    <MaterialIcons name="flip-camera-ios" size={32} color="white" />
                </TouchableOpacity>
            </View>
            <View className='absolute top-0 flex-row w-full justify-between items-center bg-black/20'>
                <TouchableOpacity onPress={() => setVisible(false)} className='p-4'>
                    <MaterialIcons name="arrow-back" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleFlash} className='p-4'>
                    {flash === FlashMode.off ?
                        <MaterialIcons name="flash-off" size={28} color="white" />
                        :
                        <MaterialIcons name="flash-on" size={28} color="white" />
                    }
                </TouchableOpacity>
            </View>
        </Camera>
    )
}

export default MyCamera