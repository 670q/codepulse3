import { OrbitControls, ContactShadows, Environment, Float, Grid, Sparkles } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Phone } from './Phone'

interface ExperienceProps {
    textureUrl: string | null
}

export const Experience = ({ textureUrl }: ExperienceProps) => {
    const { viewport } = useThree()
    return (
        <>
            <color attach="background" args={['#050505']} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#a855f7" />
            <directionalLight position={[-10, -10, -5]} intensity={2} color="#3b82f6" />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* Volumetric / Grid pulse effect */}
            <Grid
                renderOrder={-1}
                position={[0, -1.85, 0]}
                infiniteGrid
                cellSize={1}
                sectionSize={4}
                fadeDistance={25}
                sectionColor="#a855f7"
                cellColor="#6366f1"
            />

            {/* Main Content */}
            <group position={[viewport.width > 6 ? -2 : 0, viewport.width > 6 ? 0 : 0.5, 0]}>
                <Float
                    speed={2}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                    floatingRange={[-0.1, 0.1]}
                >
                    <Phone textureUrl={textureUrl} />
                </Float>
                <Sparkles count={20} scale={5} size={4} speed={0.4} opacity={0.4} color="#a855f7" />
                <Sparkles count={10} scale={4} size={2} speed={0.2} opacity={0.2} color="#ffffff" />
            </group>

            <ContactShadows
                position={[0, -2.5, 0]}
                opacity={0.5}
                scale={10}
                blur={2}
                far={4}
                frames={1}
                color="#a855f7"
            />

            <OrbitControls
                makeDefault
                enableZoom={false}
                enablePan={false}
            />
        </>
    )
}
