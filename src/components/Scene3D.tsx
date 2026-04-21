"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vsh = `
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldPos;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vViewPos = -mv.xyz;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

const fsh = `
  precision highp float;
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldPos;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uTime;
  uniform float uMetal;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPos);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.2);
    float band = 0.5 + 0.5 * sin(dot(N, vec3(0.7,0.2,0.7)) * 6.0 + uTime * 0.3);
    vec3 iri = mix(uColorA, uColorB, band);
    iri = mix(iri, uColorC, smoothstep(0.3, 1.0, fres));
    float l1 = max(dot(N, normalize(vec3(0.6, 0.9, 0.4))), 0.0);
    float l2 = max(dot(N, normalize(vec3(-0.7, 0.3, -0.4))), 0.0);
    float lambert = 0.35 + 0.65 * (l1 * 0.8 + l2 * 0.35);
    vec3 base = iri * lambert;
    vec3 metal = mix(uColorA, vec3(1.0), fres * 0.9) * (0.4 + 0.8 * lambert);
    vec3 color = mix(base, metal, uMetal);
    color += fres * 0.3 * uColorC;
    gl_FragColor = vec4(color, 1.0);
  }
`;

function makeMaterial(palette: string[], metal: number) {
	return new THREE.ShaderMaterial({
		vertexShader: vsh,
		fragmentShader: fsh,
		uniforms: {
			uTime: { value: 0 },
			uMetal: { value: metal },
			uColorA: { value: new THREE.Color(palette[0]) },
			uColorB: { value: new THREE.Color(palette[1]) },
			uColorC: { value: new THREE.Color(palette[2]) },
		},
	});
}

export function HeroScene({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
		camera.position.set(0, 0, 7);

		const group = new THREE.Group();
		scene.add(group);

		const knotGeo = new THREE.TorusKnotGeometry(0.85, 0.28, 220, 32);
		const knotMat = makeMaterial(["#E8593A", "#F3C16A", "#2A1A12"], 0.6);
		const knot = new THREE.Mesh(knotGeo, knotMat);
		knot.position.set(-2.2, 0.6, 0);
		knot.scale.setScalar(0.9);
		group.add(knot);

		const icoGeo = new THREE.IcosahedronGeometry(1.1, 0);
		const icoMat = makeMaterial(["#0B0B0A", "#4A4A48", "#E8593A"], 1.0);
		const ico = new THREE.Mesh(icoGeo, icoMat);
		ico.position.set(2.2, -0.4, 0);
		group.add(ico);

		const blobGeo = new THREE.SphereGeometry(0.95, 96, 96);
		const posAttr = blobGeo.attributes.position;
		for (let i = 0; i < posAttr.count; i++) {
			const x = posAttr.getX(i),
				y = posAttr.getY(i),
				z = posAttr.getZ(i);
			const n = Math.sin(x * 2.2) * Math.cos(y * 1.8) * Math.sin(z * 2.4);
			const f = 1 + n * 0.18;
			posAttr.setXYZ(i, x * f, y * f, z * f);
		}
		blobGeo.computeVertexNormals();
		const blobMat = makeMaterial(["#F3F0EA", "#CDB99A", "#E8593A"], 0.2);
		const blob = new THREE.Mesh(blobGeo, blobMat);
		blob.position.set(0, 0.1, -0.5);
		blob.scale.setScalar(1.15);
		group.add(blob);

		const state = {
			scroll: 0,
			mx: 0,
			my: 0,
			targetMx: 0,
			targetMy: 0,
			w: 0,
			h: 0,
			raf: 0,
		};

		function resize() {
			// biome-ignore lint/style/noNonNullAssertion: canvas is checked above
			const rect = canvas!.getBoundingClientRect();
			state.w = rect.width;
			state.h = rect.height;
			renderer.setSize(rect.width, rect.height, false);
			camera.aspect = rect.width / rect.height;
			camera.updateProjectionMatrix();
		}
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		window.addEventListener("resize", resize);

		const onMove = (e: MouseEvent) => {
			const cx = window.innerWidth / 2;
			const cy = window.innerHeight / 2;
			state.targetMx = (e.clientX - cx) / cx;
			state.targetMy = (e.clientY - cy) / cy;
		};
		window.addEventListener("mousemove", onMove);

		const onScroll = () => {
			const maxScroll = Math.max(
				1,
				document.documentElement.scrollHeight - window.innerHeight,
			);
			state.scroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();

		const startTime = performance.now();
		function tick() {
			state.raf = requestAnimationFrame(tick);
			const t = (performance.now() - startTime) / 1000;
			state.mx += (state.targetMx - state.mx) * 0.05;
			state.my += (state.targetMy - state.my) * 0.05;
			[knotMat, icoMat, blobMat].forEach((m) => {
				m.uniforms.uTime.value = t;
			});
			const s = state.scroll;

			knot.position.x = -2.2 - s * 1.4;
			knot.position.y = 0.6 + Math.sin(t * 0.6) * 0.12 + s * -1.2;
			knot.rotation.x = t * 0.35 + state.my * 0.4;
			knot.rotation.y = t * 0.22 + state.mx * 0.5 + s * 3.2;
			knot.scale.setScalar(0.9 - s * 0.25);

			ico.position.x = 2.2 + s * 1.6;
			ico.position.y = -0.4 + Math.cos(t * 0.55) * 0.15 + s * 0.8;
			ico.rotation.x = t * 0.28 - state.my * 0.4;
			ico.rotation.y = t * 0.36 - state.mx * 0.5 - s * 2.6;
			ico.scale.setScalar(1.0 - s * 0.15);

			blob.position.x = Math.sin(t * 0.35) * 0.08 + state.mx * 0.25;
			blob.position.y =
				0.1 + Math.cos(t * 0.45) * 0.1 + state.my * 0.25 - s * 0.2;
			blob.rotation.x = t * 0.18;
			blob.rotation.y = t * 0.24 + s * 1.8;
			blob.scale.setScalar(1.15 + Math.sin(t * 0.8) * 0.03);

			camera.position.x = state.mx * 0.6;
			camera.position.y = -state.my * 0.4;
			camera.position.z = 7 - s * 1.2;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		}
		tick();

		return () => {
			cancelAnimationFrame(state.raf);
			ro.disconnect();
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("scroll", onScroll);
			renderer.dispose();
		};
	}, []);

	return <canvas ref={canvasRef} className={className} />;
}

export function OrbScene({
	className,
	accent = "#E8593A",
}: {
	className?: string;
	accent?: string;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
		camera.position.set(0, 0, 5);

		const geo = new THREE.IcosahedronGeometry(1.4, 1);
		const mat = makeMaterial([accent, "#F3F0EA", "#0B0B0A"], 0.9);
		const mesh = new THREE.Mesh(geo, mat);
		scene.add(mesh);

		let mx = 0,
			my = 0,
			tmx = 0,
			tmy = 0;
		const resize = () => {
			// biome-ignore lint/style/noNonNullAssertion: canvas is checked above
			const r = canvas!.getBoundingClientRect();
			renderer.setSize(r.width, r.height, false);
			camera.aspect = r.width / r.height;
			camera.updateProjectionMatrix();
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		const onMove = (e: MouseEvent) => {
			// biome-ignore lint/style/noNonNullAssertion: canvas is checked above
			const r = canvas!.getBoundingClientRect();
			tmx = ((e.clientX - r.left) / r.width - 0.5) * 2;
			tmy = ((e.clientY - r.top) / r.height - 0.5) * 2;
		};
		canvas.addEventListener("mousemove", onMove);

		const start = performance.now();
		let raf = 0;
		function tick() {
			raf = requestAnimationFrame(tick);
			const t = (performance.now() - start) / 1000;
			mx += (tmx - mx) * 0.08;
			my += (tmy - my) * 0.08;
			mat.uniforms.uTime.value = t;
			mesh.rotation.x = t * 0.25 + my * 0.6;
			mesh.rotation.y = t * 0.32 + mx * 0.8;
			renderer.render(scene, camera);
		}
		tick();

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			canvas.removeEventListener("mousemove", onMove);
			renderer.dispose();
		};
	}, [accent]);

	return <canvas ref={canvasRef} className={className} />;
}
