import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, useTexture } from '@react-three/drei'
import * as THREE from 'three'

interface PhoneProps {
    textureUrl: string | null
}

const PhoneScreen = ({ textureUrl }: { textureUrl: string | null }) => {
    // If user uploaded a texture, use it as full screen wallpaper
    if (textureUrl) {
        const texture = useTexture(textureUrl)
        return (
            <meshStandardMaterial
                map={texture}
                emissiveMap={texture}
                emissive="white"
                emissiveIntensity={2}
                toneMapped={false}
            />
        )
    }

    // Otherwise, render empty black screen material attached to the parent mesh
    return (
        <meshStandardMaterial
            color="black"
            roughness={0.1}
            metalness={0.8}
        />
    )
}

const PulsingLogo = () => {
    const texture = useTexture('/default_logo.png')
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime() * 10
            // Heartbeat function: pow(sin(t), 63) gives sharp spikes, but simple combination is safer
            // Simulating a "lub-dub" heartbeat rhythm
            const scale = 1 + (Math.sin(t) * 0.1 + Math.sin(t * 3) * 0.05)

            meshRef.current.scale.set(scale, scale, 1)

            // Also pulse opacity/intensity slightly
            if (meshRef.current.material instanceof THREE.MeshBasicMaterial) {
                meshRef.current.material.opacity = 0.8 + Math.sin(t) * 0.2
            }
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0.001]}> {/* Slightly above screen */}
            <planeGeometry args={[0.8, 0.8]} /> {/* Adjust size of logo */}
            <meshBasicMaterial
                map={texture}
                transparent
                opacity={1}
                depthWrite={false} // Prevent Z-fighting
            />
        </mesh>
    )
}

export const Phone = ({ textureUrl }: PhoneProps) => {
    const meshRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime()
            // Floating & Rotation Animation
            meshRef.current.position.y = Math.sin(t / 1.5) / 5
            meshRef.current.rotation.y = Math.sin(t / 2) / 10
            meshRef.current.rotation.z = Math.sin(t / 4) / 20
        }
    })

    return (
        <group ref={meshRef}>
            {/* Phone Body */}
            <RoundedBox args={[1.2, 2.4, 0.1]} radius={0.1} smoothness={4}>
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={1}
                    roughness={0.1}
                />
            </RoundedBox>

            {/* Screen Area */}
            {/* We use a Group here to hold both the screen surface and potentially the logo */}
            <group position={[0, 0, 0.051]}>
                {/* The Screen Surface itself */}
                <RoundedBox args={[1.15, 2.35, 0.001]} radius={0.05} smoothness={4}>
                    <Suspense fallback={<meshStandardMaterial color="black" />}>
                        <PhoneScreen textureUrl={textureUrl} />
                    </Suspense>
                </RoundedBox>

                {/* The Logo (Only if no custom texture) */}
                {!textureUrl && (
                    <Suspense fallback={null}>
                        <PulsingLogo />
                    </Suspense>
                )}
            </group>
        </group>
    )
}
