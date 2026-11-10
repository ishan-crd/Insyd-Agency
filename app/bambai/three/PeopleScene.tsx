"use client";
// The crowd lineup: the twelve Indian NPCs from the game standing on a wet street, the camera tracking along them.
import { Suspense, useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { PEOPLE } from "../data";
import { Rain } from "./Rain";

const BASE = "/bambai/models/";
export const GAP = 1.4;

function Person({ file, h, x, idx, focus }: { file: string; h: number; x: number; idx: number; focus: MutableRefObject<number> }) {
  const { scene } = useGLTF(BASE + file, false, true);
  const g = useRef<THREE.Group>(null);
  const obj = useMemo(() => {
    const o = scene.clone(true);
    o.traverse((m) => {
      const mesh = m as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.roughness = Math.max(mat.roughness ?? 0.8, 0.6);
          mat.metalness = 0;
        }
      }
    });
    const box = new THREE.Box3().setFromObject(o);
    const s = h / (box.max.y - box.min.y);
    o.scale.setScalar(s);
    const b2 = new THREE.Box3().setFromObject(o);
    const c = b2.getCenter(new THREE.Vector3());
    o.position.set(-c.x, -b2.min.y, -c.z);
    return o;
  }, [scene, h]);
  const seed = idx * 1.7;

  useFrame(({ clock }) => {
    const n = g.current;
    if (!n) return;
    const t = clock.elapsedTime + seed;
    const d = Math.abs(focus.current - idx);
    const near = Math.max(0, 1 - d);
    // the one in focus turns a little toward the camera; everyone breathes
    n.rotation.y = THREE.MathUtils.lerp(n.rotation.y, (1 - near) * 0.22 * Math.sign(idx - focus.current) + Math.sin(t * 0.5) * 0.04, 0.08);
    n.position.y = Math.sin(t * 1.6) * 0.004;
  });

  return (
    <group ref={g} position={[x, 0, 0]}>
      <primitive object={obj} />
    </group>
  );
}

function Track({ focus }: { focus: MutableRefObject<number> }) {
  const cur = useRef(0);
  useFrame(({ camera, size }) => {
    cur.current = THREE.MathUtils.lerp(cur.current, focus.current, 0.09);
    const x = cur.current * GAP;
    const narrow = size.width < 640;
    camera.position.set(x + 0.1, 1.05, narrow ? 6.6 : 5.6);
    camera.lookAt(x, 1.2, 0);
  });
  return null;
}

export default function PeopleScene({ focus, active }: { focus: MutableRefObject<number>; active: boolean }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ fov: 30, near: 0.1, far: 60 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
    >
      <color attach="background" args={["#0c0d10"]} />
      <fog attach="fog" args={["#0c0d10", 4, 11]} />
      <Track focus={focus} />
      <hemisphereLight args={["#a9b9cc", "#1a120a", 0.55]} />
      <directionalLight position={[2.5, 5, 4]} intensity={2.2} color="#ffd2a0" castShadow shadow-mapSize={[2048, 1024]} shadow-camera-left={-9} shadow-camera-right={9} shadow-camera-top={3} shadow-camera-bottom={-1} />
      <spotLight position={[-3, 3, -2.5]} intensity={30} angle={0.9} penumbra={1} color="#86a8d8" />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={1.6} color="#ffe2bd" position={[0, 4, 5]} scale={[14, 3, 1]} />
        <Lightformer form="rect" intensity={0.8} color="#9fbfff" position={[0, 3, -6]} scale={[14, 3, 1]} />
      </Environment>
      <group position={[0, 0, 0]}>
        {PEOPLE.map((p, i) => (
          <Suspense key={p.id} fallback={null}>
            <Person file={p.file} h={p.h} x={i * GAP} idx={i} focus={focus} />
          </Suspense>
        ))}
      </group>
      <ContactShadows position={[(PEOPLE.length - 1) * GAP * 0.5, 0.002, 0]} opacity={0.7} scale={[PEOPLE.length * GAP + 3, 3]} blur={2} far={2} resolution={1024} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[(PEOPLE.length - 1) * GAP * 0.5, -0.001, 0]}>
        <planeGeometry args={[40, 20]} />
        <MeshReflectorMaterial resolution={512} blur={[300, 90]} mixBlur={1} mixStrength={14} roughness={0.9} depthScale={1} minDepthThreshold={0.4} maxDepthThreshold={1.2} color="#111318" metalness={0.5} mirror={0} />
      </mesh>
      <group position={[(PEOPLE.length - 1) * GAP * 0.5, 0, 0]}>
        <Rain count={700} area={PEOPLE.length * GAP + 4} height={4} />
      </group>
    </Canvas>
  );
}
