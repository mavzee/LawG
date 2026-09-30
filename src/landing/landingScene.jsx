import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import backgroundImage from '../assets/background.webp'

const motionStops = [
	{ at: 0, x: 4.8, y: -0.55, scale: 1.08, rotateX: 0.04, rotateY: -0.48, cameraX: 0.55, cameraZ: 8.4 },
	{ at: 0.34, x: 4.3, y: -0.42, scale: 1.12, rotateX: 0.03, rotateY: -0.32, cameraX: 0.35, cameraZ: 8.8 },
	{ at: 0.7, x: 3.3, y: -0.24, scale: 1.18, rotateX: 0.08, rotateY: -0.2, cameraX: 0.12, cameraZ: 9.1 },
	{ at: 1, x: 2.25, y: -0.16, scale: 1.12, rotateX: -0.02, rotateY: 0.18, cameraX: 0, cameraZ: 9.5 },
]

const scaleBeamGeometry = new THREE.TubeGeometry(
	new THREE.CatmullRomCurve3([
		new THREE.Vector3(-2.5, 3.4, 0),
		new THREE.Vector3(-1.8, 3.46, 0.18),
		new THREE.Vector3(-0.86, 3.7, 0.32),
		new THREE.Vector3(0, 3.78, 0.36),
		new THREE.Vector3(0.86, 3.7, 0.32),
		new THREE.Vector3(1.8, 3.46, 0.18),
		new THREE.Vector3(2.5, 3.4, 0),
	]),
	100,
	0.12,
	18,
	false,
)

const panProfile = [
	new THREE.Vector2(0, 0.01),
	new THREE.Vector2(0.16, 0.014),
	new THREE.Vector2(0.44, 0.024),
	new THREE.Vector2(0.62, 0.11),
	new THREE.Vector2(0.7, 0.2),
	new THREE.Vector2(0.64, 0.28),
	new THREE.Vector2(0.52, 0.32),
	new THREE.Vector2(0.38, 0.26),
	new THREE.Vector2(0.18, 0.14),
	new THREE.Vector2(0, 0.08),
]
const panGeometry = new THREE.LatheGeometry(panProfile, 70)
const panChains = [-1, 1].flatMap((side) => {
	const panX = side * 2.05
	return [-1, 0, 1].map((offset) => {
		const topX = panX + offset * 0.34
		const bottomX = panX + offset * 0.52
		const curve = new THREE.CatmullRomCurve3([
			new THREE.Vector3(topX, 3.47, 0.08),
			new THREE.Vector3((topX + bottomX) / 2, 2.72, 0.14),
			new THREE.Vector3(bottomX, 1.76, 0.05),
		])
		return new THREE.TubeGeometry(curve, 24, 0.019, 7, false)
	})
})

function ScaleAssembly() {
	const bronze = useRef(
		new THREE.MeshPhysicalMaterial({
			color: '#b9792a',
			metalness: 0.9,
			roughness: 0.26,
			clearcoat: 1,
			clearcoatRoughness: 0.12,
			ten: 0.8,
		}),
	).current
	const bronzeDark = useRef(
		new THREE.MeshStandardMaterial({
			color: '#815115',
			metalness: 0.82,
			roughness: 0.38,
		}),
	).current
	const gold = useRef(
		new THREE.MeshStandardMaterial({
			color: '#e7ba63',
			metalness: 0.76,
			roughness: 0.18,
		}),
	).current

	return (
		<group position={[0, -1.9, 0]}>
			<mesh castShadow receiveShadow material={bronzeDark} position={[0, 0.12, 0]} scale={[1, 1, 0.78]}>
				<cylinderGeometry args={[0.94, 1.08, 0.2, 72]} />
			</mesh>
			<mesh castShadow receiveShadow material={gold} position={[0, 0.22, 0]}>
				<cylinderGeometry args={[0.78, 0.86, 0.12, 72]} />
			</mesh>
			<mesh castShadow receiveShadow material={bronze} position={[0, 0.34, 0]}>
				<cylinderGeometry args={[0.64, 0.72, 0.11, 64]} />
			</mesh>
			<mesh castShadow receiveShadow material={bronze} position={[0, 1.94, 0]}>
				<cylinderGeometry args={[0.15, 0.26, 3.2, 52]} />
			</mesh>
			{[0.56, 2.9].map((y) => (
				<mesh key={y} castShadow receiveShadow material={gold} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
					<torusGeometry args={[0.19, 0.035, 16, 60]} />
				</mesh>
			))}
			<mesh castShadow receiveShadow material={gold} position={[0, 3.53, 0]}>
				<cylinderGeometry args={[0.3, 0.2, 0.26, 42]} />
			</mesh>
			<mesh castShadow receiveShadow material={bronzeDark} position={[0, 3.85, 0]}>
				<coneGeometry args={[0.14, 0.42, 36]} />
			</mesh>
			<mesh castShadow receiveShadow material={gold} position={[0, 4.18, 0]} scale={[0.15, 0.22, 0.15]}>
				<sphereGeometry args={[1, 36, 28]} />
			</mesh>
			<mesh geometry={scaleBeamGeometry} castShadow receiveShadow material={bronze} />
			<mesh material={gold} position={[0, 3.75, 0.12]}>
				<sphereGeometry args={[0.08, 28, 20]} />
			</mesh>
			{panChains.map((geometry, index) => (
				<mesh key={index} castShadow receiveShadow geometry={geometry} material={gold} />
			))}
			{[-1, 1].map((side) => (
				<group key={side} position={[side * 2.05, 0, 0]}>
					<mesh position={[0, 1.57, 0]} geometry={panGeometry} castShadow receiveShadow>
						<meshStandardMaterial
							color="#ae7326"
							metalness={0.88}
							roughness={0.22}
							side={THREE.DoubleSide}
						/>
					</mesh>
					<mesh material={gold} position={[0, 1.75, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
						<torusGeometry args={[0.56, 0.035, 14, 68]} />
					</mesh>
					<mesh material={gold} position={[0, 1.73, 0]} scale={[0.09, 0.07, 0.09]} castShadow>
						<sphereGeometry args={[1, 24, 20]} />
					</mesh>
				</group>
			))}
		</group>
	)
}

function getMotion(progress) {
	const nextIndex = motionStops.findIndex((stop) => stop.at >= progress)
	const index = Math.max(1, nextIndex)
	const from = motionStops[index - 1]
	const to = motionStops[index] ?? motionStops[motionStops.length - 1]
	const amount = THREE.MathUtils.clamp((progress - from.at) / (to.at - from.at), 0, 1)

	return Object.fromEntries(
		Object.keys(from)
			.filter((key) => key !== 'at')
			.map((key) => [key, THREE.MathUtils.lerp(from[key], to[key], amount)]),
	)
}

function ArchitectureBackdrop() {
	const texture = useLoader(THREE.TextureLoader, backgroundImage)
	texture.colorSpace = THREE.SRGBColorSpace

	return (
		<>
			<mesh position={[0, 0, -9]}>
				<planeGeometry args={[30, 20]} />
				<meshBasicMaterial map={texture} color="#777777" toneMapped={false} />
			</mesh>
			<mesh position={[0, 0, -8.95]}>
				<planeGeometry args={[30, 20]} />
				<meshBasicMaterial color="#090a0b" transparent opacity={0.42} />
			</mesh>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.45, -2]} receiveShadow>
				<circleGeometry args={[5.5, 64]} />
				<shadowMaterial opacity={0.28} />
			</mesh>
		</>
	)
}

function Sculpture() {
	const scalesRef = useRef()
	const { camera } = useThree()

	useFrame((state, delta) => {
		const scrollRange = document.documentElement.scrollHeight - window.innerHeight
		const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0
		const motion = getMotion(progress)
		const isMobile = window.innerWidth < 700
		const time = -state.clock.elapsedTime
		const sculptureX = motion.x * (isMobile ? 0.18 : 1)
		const sculptureScale = motion.scale * (isMobile ? 0.44 : 1)
		const damp = (current, target, speed = 3) => THREE.MathUtils.damp(current, target, speed, delta)

		if (scalesRef.current) {
			scalesRef.current.position.x = damp(scalesRef.current.position.x, sculptureX + Math.sin(time * 0.22) * 0.12)
			scalesRef.current.position.y = damp(scalesRef.current.position.y, motion.y + (isMobile ? -0.45 : 0) + Math.sin(time * 0.58) * 0.08)
			scalesRef.current.scale.setScalar(damp(scalesRef.current.scale.x, sculptureScale))
			scalesRef.current.rotation.x = damp(scalesRef.current.rotation.x, motion.rotateX + Math.sin(time * 0.31) * 0.035)
			scalesRef.current.rotation.y = damp(scalesRef.current.rotation.y, motion.rotateY + Math.sin(time * 0.24) * 0.18)
			scalesRef.current.rotation.z = Math.sin(time * 0.4) * 0.018
		}

		camera.position.x = damp(camera.position.x, motion.cameraX * (isMobile ? 0.35 : 1))
		camera.position.z = damp(camera.position.z, motion.cameraZ + (isMobile ? 1 : 0))
		camera.lookAt(0, 0, 0)
	})

	return (
		<group ref={scalesRef} position={[3.85, -0.15, 0]} scale={0.88}>
			<ScaleAssembly />
		</group>
	)
}

export default function LandingScene() {
	return (
		<div className="landing-scene" aria-hidden="true">
			<Canvas
				shadows
				camera={{ position: [0, 0, 10], fov: 40 }}
				dpr={[1, 1.5]}
				gl={{ alpha: true, antialias: true }}
			>
				<ambientLight intensity={1.8} />
				<directionalLight
					castShadow
					position={[-4, 5, 5]}
					intensity={4.4}
					color="#fff0dc"
					shadow-mapSize-width={2048}
					shadow-mapSize-height={2048}
				/>
				<pointLight position={[3, 1, 3]} intensity={15} color="#e7b28e" />
				<pointLight position={[-3, -1, 1]} intensity={7} color="#d5e0f0" />
				<ArchitectureBackdrop />
				<Sculpture />
			</Canvas>
		</div>
	)
}
