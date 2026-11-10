"use client";
// The garage: one game asset at a time on a wet, reflective floor under a sodium lamp. Loaded straight from GLB.
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, MeshReflectorMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MODELS } from "../data";
import { Rain } from "./Rain";

const BASE = "/bambai/models/";
const FIT = 3.4; // longest side of every model, in metres of scene

function Model({ file, y }: { file: string; y: number }) {
  const { scene } = useGLTF(BASE + file, false, true);
  const group = useRef<THREE.Group>(null);
  const obj = useMemo(() => {
    const o = scene.clone(true);
    o.traverse((m) => {
      const mesh = m as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && "envMapIntensity" in mat) mat.envMapIntensity = 1.1;
      }
    });
    const box = new THREE.Box3().setFromObject(o);
    const size = box.getSize(new THREE.Vector3());
    const s = FIT / Math.max(size.x, size.y, size.z);
    o.scale.setScalar(s);
    const b2 = new THREE.Box3().setFromObject(o);
    const c = b2.getCenter(new THREE.Vector3());
    o.position.set(-c.x, -b2.min.y, -c.z);
    return o;
  }, [scene]);

  // a short rise-in each time the model changes
  const t0 = useRef(0);
  useLayoutEffect(() => {
    t0.current = performance.now();
  }, [obj]);
  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const k = Math.min(1, (performance.now() - t0.current) / 900);
    const e = 1 - Math.pow(1 - k, 4);
    g.position.y = (1 - e) * -0.35;
    g.scale.setScalar(0.92 + 0.08 * e);
  });

  return (
    <group ref={group} rotation={[0, y, 0]}>
      <primitive object={obj} />
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
      <planeGeometry args={[40, 40]} />
      <MeshReflectorMaterial
        resolution={512}
        blur={[260, 80]}
        mixBlur={0.9}
        mixStrength={18}
        mixContrast={1.05}
        roughness={0.85}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.3}
        color="#101216"
        metalness={0.6}
        mirror={0}
      />
    </mesh>
  );
}

function Rig() {
  const { camera, size } = useThree();
  useEffect(() => {
    const narrow = size.width < 640;
    camera.position.set(narrow ? 6.4 : 5.4, narrow ? 2.3 : 2.0, narrow ? 7.4 : 6.2);
  }, [camera, size.width]);
  return null;
}

export default function GarageScene({ index, active }: { index: number; active: boolean }) {
  const m = MODELS[index];
  // warm the cache with the neighbours so switching feels instant
  useEffect(() => {
    const t = setTimeout(() => {
      for (const d of [1, 2, -1]) useGLTF.preload(BASE + MODELS[(index + d + MODELS.length) % MODELS.length].file, false, true);
    }, 600);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ fov: 32, near: 0.1, far: 80, position: [4.6, 2.1, 5.2] }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.3 }}
    >
      <color attach="background" args={["#0b0c0f"]} />
      <fog attach="fog" args={["#0b0c0f", 9, 22]} />
      <Rig />
      <hemisphereLight args={["#9fb3c9", "#1a130c", 0.7]} />
      <spotLight position={[3.5, 7, 2.5]} angle={0.5} penumbra={0.8} intensity={190} color="#ffb771" castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0004} />
      <spotLight position={[-5, 3.5, -4]} angle={0.6} penumbra={1} intensity={60} color="#7fa6d6" />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.2} color="#ffd9a8" position={[0, 5, -6]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={1.2} color="#9cc2ff" position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
        <Lightformer form="ring" intensity={1.5} color="#ffffff" position={[5, 3, 3]} scale={2} />
      </Environment>
      <Suspense fallback={null}>
        <Model key={m.id} file={m.file} y={m.y} />
      </Suspense>
      <ContactShadows position={[0, 0.002, 0]} opacity={0.75} scale={9} blur={2.2} far={3} resolution={512} color="#000" />
      <Floor />
      <Rain count={900} area={14} />
      <OrbitControls
        makeDefault
        target={[0, 0.75, 0]}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0.9}
        maxPolarAngle={1.45}
        autoRotate
        autoRotateSpeed={0.55}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
