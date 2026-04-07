import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RotatingCube({ imageSrc = '/images/myID.png', size = 300 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Scene ── */
    const scene = new THREE.Scene();

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.z = 4.5;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Lights ── */
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const roseLight = new THREE.DirectionalLight(0xf43f5e, 0.35);
    roseLight.position.set(-4, 1, -2);
    scene.add(roseLight);

    const tealLight = new THREE.DirectionalLight(0x0d9488, 0.25);
    tealLight.position.set(2, -4, 1);
    scene.add(tealLight);

    /* ── Texture loader ── */
    const loader = new THREE.TextureLoader();

    const buildMaterials = (tex) =>
      Array(6).fill(null).map((_, i) => {
        const mat = new THREE.MeshPhongMaterial({
          shininess: 55,
          specular: new THREE.Color(0x1a1a1a),
        });
        if (tex) {
          mat.map = tex;
          mat.color.set(0xffffff);
        } else {
          // Fallback gradient-like face colours
          const colours = [0xf43f5e, 0x0d9488, 0xf59e0b, 0xf43f5e, 0x0d9488, 0xf59e0b];
          mat.color.set(colours[i]);
        }
        return mat;
      });

    /* ── Cube ── */
    const geometry = new THREE.BoxGeometry(1.7, 1.7, 1.7);
    const cube = new THREE.Mesh(geometry, buildMaterials(null));
    scene.add(cube);

    loader.load(
      imageSrc,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        // Ensure texture is upright on each face
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        cube.material = buildMaterials(tex);
      },
      undefined,
      () => { /* keep fallback colours on error */ }
    );

    /* ── Glowing edge lines (no intersecting ring) ── */
    const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.72, 1.72, 1.72));
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0.45,
    });
    const edges = new THREE.LineSegments(edgesGeo, edgesMat);
    scene.add(edges); // attached to scene, synced in loop

    /* ── Animation ── */
    let frameId;
    const startTime = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // Tumble freely in 3D — different speeds on X and Y so it never repeats
      cube.rotation.y = t * 0.55;     // horizontal spin
      cube.rotation.x = t * 0.32;     // vertical tumble
      cube.rotation.z = t * 0.18;     // slight roll — slow enough photo stays readable

      // Keep edges exactly aligned with cube
      edges.rotation.y = cube.rotation.y;
      edges.rotation.x = cube.rotation.x;
      edges.rotation.z = cube.rotation.z;

      // Floating bob
      cube.position.y  = Math.sin(t * 0.9) * 0.07;
      edges.position.y = cube.position.y;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      edgesGeo.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [imageSrc, size]);

  return (
    <div
      ref={mountRef}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
