"use client";
// Light monsoon rain: thin streaks falling through the light, as one instanced mesh.
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Rain({ count = 800, area = 12, height = 7 }: { count?: number; area?: number; height?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  // x, y, z, speed per drop; built on the first frame so render stays pure
  const drops = useRef<Float32Array | null>(null);
  const m = useMemo(() => new THREE.Matrix4(), []);
  const q = useMemo(() => new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.12)), []);
  const s = useMemo(() => new THREE.Vector3(1, 1, 1), []);
  const p = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, dt) => {
    const mesh = ref.current;
    if (!mesh) return;
    if (!drops.current || drops.current.length !== count * 4) {
      const a = new Float32Array(count * 4);
      for (let i = 0; i < count; i++) {
        a[i * 4] = (Math.random() - 0.5) * area;
        a[i * 4 + 1] = Math.random() * height;
        a[i * 4 + 2] = (Math.random() - 0.5) * area;
        a[i * 4 + 3] = 7 + Math.random() * 4;
      }
      drops.current = a;
    }
    const r = drops.current;
    const d = Math.min(dt, 0.05);
    for (let i = 0; i < count; i++) {
      const k = i * 4;
      r[k + 1] -= r[k + 3] * d;
      r[k] -= r[k + 3] * d * 0.12;
      if (r[k + 1] < 0) {
        r[k + 1] += height;
        r[k] = (Math.random() - 0.5) * area;
      }
      p.set(r[k], r[k + 1], r[k + 2]);
      m.compose(p, q, s);
      mesh.setMatrixAt(i, m);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[0.006, 0.32, 0.006]} />
      <meshBasicMaterial color="#c9d6e6" transparent opacity={0.22} depthWrite={false} />
    </instancedMesh>
  );
}
