import React, { useRef } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, OrbitControls } from '@react-three/drei'

const RotatingTorus = () => {
  const torusRef = useRef()
  
  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005 // Slower rotation
      torusRef.current.rotation.y += 0.005 // Slower rotation
    }
  })

  return (
    <TorusKnot ref={torusRef} args={[1, 0.4, 128, 32]}>
      <meshStandardMaterial attach="material" color="#8352FD" />
    </TorusKnot>
  )
}

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-2xl mb-2">Loading...</div>
        <div className="w-[10vw] h-[10vw]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingTorus />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="text-white text-lg mt-2">{progress.toFixed(2)}%</div>
      </div>
    </Html>
  )
}

export default Loader
