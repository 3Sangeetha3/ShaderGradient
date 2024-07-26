import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function App() {
  return (
    <>
      <h1>ShaderGradient</h1>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff9c75&color2=%23dbca67&color3=%23aca9e1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1.2&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=sphere&uAmplitude=1.8&uDensity=2.2&uFrequency=5.5&uSpeed=0.4&uStrength=5.5&uTime=0&wireframe=false'
        />
      </ShaderGradientCanvas>
    </>
  )
}