"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BMConnect3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // ------------------------------------------------------------
    // SCENE
    // ------------------------------------------------------------

    const scene = new THREE.Scene();

    scene.background = new THREE.Color("#02070d");

    scene.fog = new THREE.FogExp2("#02070d", 0.025);

    // ------------------------------------------------------------
    // CAMERA
    // ------------------------------------------------------------

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 8);

    // ------------------------------------------------------------
    // RENDERER
    // ------------------------------------------------------------

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // ------------------------------------------------------------
    // LIGHTING
    // ------------------------------------------------------------

    const ambientLight = new THREE.AmbientLight(
      "#ffffff",
      1.2
    );

    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(
      "#008cff",
      35,
      18
    );

    blueLight.position.set(4, 3, 5);

    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(
      "#00d9ff",
      25,
      16
    );

    cyanLight.position.set(-4, 1, 4);

    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(
      "#ff6a00",
      12,
      15
    );

    orangeLight.position.set(0, -3, 4);

    scene.add(orangeLight);

    // ------------------------------------------------------------
    // COIN GROUP
    // ------------------------------------------------------------

    const coinGroup = new THREE.Group();

    coinGroup.scale.set(
      1.15,
      1.15,
      1.15
    );

    scene.add(coinGroup);

    // ------------------------------------------------------------
    // COIN THICKNESS
    // ------------------------------------------------------------

    const coinGeometry =
      new THREE.CylinderGeometry(
        2.15,
        2.15,
        0.38,
        96
      );

    const coinMaterial =
      new THREE.MeshStandardMaterial({
        color: "#9b4b12",
        metalness: 0.92,
        roughness: 0.22,
        emissive: "#241005",
        emissiveIntensity: 0.5,
      });

    const coinBody = new THREE.Mesh(
      coinGeometry,
      coinMaterial
    );

    // Cylinder's circular faces point along Y.
    // Rotate so the coin faces the camera along Z.
    coinBody.rotation.x = Math.PI / 2;

    coinGroup.add(coinBody);

    // ------------------------------------------------------------
    // ACTUAL BM CONNECT IMAGE
    // ------------------------------------------------------------

    const textureLoader =
      new THREE.TextureLoader();

    const coinTexture =
      textureLoader.load(
        "/images/bm-connect-coin.png"
      );

    coinTexture.colorSpace =
      THREE.SRGBColorSpace;

    coinTexture.anisotropy =
      renderer.capabilities.getMaxAnisotropy();

    // Front face
    const faceGeometry =
      new THREE.CircleGeometry(
        2.08,
        96
      );

    const faceMaterial =
      new THREE.MeshStandardMaterial({
        map: coinTexture,
        transparent: true,
        metalness: 0.15,
        roughness: 0.3,
        side: THREE.FrontSide,
      });

    const frontFace = new THREE.Mesh(
      faceGeometry,
      faceMaterial
    );

    frontFace.position.z = 0.205;

    coinGroup.add(frontFace);

    // ------------------------------------------------------------
    // BACK FACE
    // ------------------------------------------------------------

    const backFaceMaterial =
      new THREE.MeshStandardMaterial({
        map: coinTexture,
        transparent: true,
        metalness: 0.15,
        roughness: 0.3,
        side: THREE.FrontSide,
      });

    const backFace = new THREE.Mesh(
      faceGeometry,
      backFaceMaterial
    );

    backFace.position.z = -0.205;

    backFace.rotation.y = Math.PI;

    coinGroup.add(backFace);

    // ------------------------------------------------------------
    // METALLIC OUTER RIM
    // ------------------------------------------------------------

    const outerRimGeometry =
      new THREE.TorusGeometry(
        2.12,
        0.07,
        24,
        128
      );

    const outerRimMaterial =
      new THREE.MeshStandardMaterial({
        color: "#ff8a2a",
        metalness: 1,
        roughness: 0.16,
        emissive: "#5c2100",
        emissiveIntensity: 1.2,
      });

    const outerRim = new THREE.Mesh(
      outerRimGeometry,
      outerRimMaterial
    );

    outerRim.rotation.x =
      Math.PI / 2;

    coinGroup.add(outerRim);

    // ------------------------------------------------------------
    // INNER BLUE ENERGY RIM
    // ------------------------------------------------------------

    const energyRimGeometry =
      new THREE.TorusGeometry(
        2.02,
        0.025,
        16,
        128
      );

    const energyRimMaterial =
      new THREE.MeshBasicMaterial({
        color: "#00cfff",
        transparent: true,
        opacity: 0.85,
      });

    const energyRim = new THREE.Mesh(
      energyRimGeometry,
      energyRimMaterial
    );

    energyRim.rotation.x =
      Math.PI / 2;

    energyRim.position.z = 0.23;

    coinGroup.add(energyRim);

    // ------------------------------------------------------------
    // ORBIT RINGS
    // ------------------------------------------------------------

    const orbitGroup = new THREE.Group();

    scene.add(orbitGroup);

    const orbitOne =
      new THREE.Mesh(
        new THREE.TorusGeometry(
          2.85,
          0.018,
          12,
          180
        ),
        new THREE.MeshBasicMaterial({
          color: "#00d9ff",
          transparent: true,
          opacity: 0.65,
        })
      );

    orbitOne.rotation.x =
      Math.PI / 2.7;

    orbitOne.rotation.z =
      -0.2;

    orbitGroup.add(orbitOne);

    const orbitTwo =
      new THREE.Mesh(
        new THREE.TorusGeometry(
          3.15,
          0.014,
          12,
          180
        ),
        new THREE.MeshBasicMaterial({
          color: "#713cff",
          transparent: true,
          opacity: 0.5,
        })
      );

    orbitTwo.rotation.x =
      Math.PI / 3.3;

    orbitTwo.rotation.y =
      Math.PI / 5;

    orbitGroup.add(orbitTwo);

    const orbitThree =
      new THREE.Mesh(
        new THREE.TorusGeometry(
          3.45,
          0.009,
          8,
          180
        ),
        new THREE.MeshBasicMaterial({
          color: "#008cff",
          transparent: true,
          opacity: 0.3,
        })
      );

    orbitThree.rotation.x =
      Math.PI / 2;

    orbitThree.rotation.y =
      Math.PI / 7;

    orbitGroup.add(orbitThree);

    // ------------------------------------------------------------
    // FLOATING BLOCKS
    // ------------------------------------------------------------

    const blocks =
      new THREE.Group();

    scene.add(blocks);

    const blockGeometry =
      new THREE.BoxGeometry(
        0.3,
        0.3,
        0.3
      );

    const blockMaterials = [
      new THREE.MeshStandardMaterial({
        color: "#00d9ff",
        emissive: "#00465c",
        emissiveIntensity: 1.5,
        metalness: 0.7,
        roughness: 0.2,
      }),

      new THREE.MeshStandardMaterial({
        color: "#713cff",
        emissive: "#28005c",
        emissiveIntensity: 1.5,
        metalness: 0.7,
        roughness: 0.2,
      }),

      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#163d50",
        emissiveIntensity: 0.9,
        metalness: 0.6,
        roughness: 0.25,
      }),
    ];

    const blockPositions = [
      [-3.1, 1.8, -0.8],
      [3.1, 1.6, -1.1],
      [-3.4, -1.4, 0],
      [3.3, -1.7, -0.5],
      [-2.4, 2.7, -1.8],
      [2.5, 2.7, -1.9],
      [-2.7, -2.5, -1.4],
      [2.8, -2.5, -1.5],
      [-4, 0.1, -1.7],
      [4, -0.2, -1.8],
    ];

    blockPositions.forEach(
      (position, index) => {
        const block =
          new THREE.Mesh(
            blockGeometry,
            blockMaterials[
              index %
                blockMaterials.length
            ]
          );

        block.position.set(
          position[0],
          position[1],
          position[2]
        );

        block.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        blocks.add(block);
      }
    );

    // ------------------------------------------------------------
    // PARTICLE FIELD
    // ------------------------------------------------------------

    const particleCount = 900;

    const positions =
      new Float32Array(
        particleCount * 3
      );

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const index = i * 3;

      positions[index] =
        (Math.random() - 0.5) * 14;

      positions[index + 1] =
        (Math.random() - 0.5) * 9;

      positions[index + 2] =
        (Math.random() - 0.5) * 10 - 1;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: "#55dfff",
        size: 0.018,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );

    scene.add(particles);

    // ------------------------------------------------------------
    // NETWORK CONNECTIONS
    // ------------------------------------------------------------

    const networkGroup =
      new THREE.Group();

    scene.add(networkGroup);

    const networkMaterial =
      new THREE.LineBasicMaterial({
        color: "#00bfff",
        transparent: true,
        opacity: 0.16,
      });

    const connections = [
      [
        [-4, 0.1, -1.7],
        [-2.5, 0.8, -0.2],
      ],

      [
        [4, -0.2, -1.8],
        [2.5, -0.7, -0.2],
      ],

      [
        [-3.4, -1.4, 0],
        [-2.2, -0.8, -0.1],
      ],

      [
        [3.1, 1.6, -1.1],
        [2.2, 0.8, -0.1],
      ],

      [
        [-3.1, 1.8, -0.8],
        [-2.3, 1.0, -0.2],
      ],
    ];

    connections.forEach(
      ([start, end]) => {
        const geometry =
          new THREE.BufferGeometry().setFromPoints(
            [
              new THREE.Vector3(
                start[0],
                start[1],
                start[2]
              ),
              new THREE.Vector3(
                end[0],
                end[1],
                end[2]
              ),
            ]
          );

        const line =
          new THREE.Line(
            geometry,
            networkMaterial
          );

        networkGroup.add(line);
      }
    );

    // ------------------------------------------------------------
    // MOUSE INTERACTION
    // ------------------------------------------------------------

    const mouse = {
      x: 0,
      y: 0,
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const rect =
        container.getBoundingClientRect();

      mouse.x =
        ((event.clientX -
          rect.left) /
          rect.width) *
          2 -
        1;

      mouse.y =
        -(
          ((event.clientY -
            rect.top) /
            rect.height) *
            2 -
          1
        );
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    // ------------------------------------------------------------
    // RESIZE
    // ------------------------------------------------------------

    const handleResize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ------------------------------------------------------------
    // ANIMATION
    // ------------------------------------------------------------

    const clock =
      new THREE.Clock();

    let animationFrame = 0;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      // Actual BM Connect coin rotation
      coinGroup.rotation.y =
        elapsed * 0.45;

      coinGroup.rotation.z =
        Math.sin(
          elapsed * 0.45
        ) * 0.035;

      coinGroup.position.y =
        Math.sin(
          elapsed * 0.8
        ) * 0.08;

      // Orbit movement
      orbitGroup.rotation.z =
        elapsed * 0.08;

      orbitGroup.rotation.y =
        elapsed * 0.035;

      // Blocks
      blocks.children.forEach(
        (block, index) => {
          block.rotation.x +=
            0.004;

          block.rotation.y +=
            0.006;

          block.position.y +=
            Math.sin(
              elapsed * 0.8 +
                index
            ) * 0.0007;
        }
      );

      // Particle movement
      particles.rotation.y =
        elapsed * 0.012;

      particles.rotation.x =
        Math.sin(
          elapsed * 0.18
        ) * 0.025;

      // Subtle network movement
      networkGroup.rotation.y =
        Math.sin(
          elapsed * 0.15
        ) * 0.025;

      // Mouse-controlled camera feel
      const targetX =
        mouse.x * 0.18;

      const targetY =
        mouse.y * 0.12;

      scene.rotation.y +=
        (targetX -
          scene.rotation.y) *
        0.025;

      scene.rotation.x +=
        (targetY -
          scene.rotation.x) *
        0.025;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // ------------------------------------------------------------
    // CLEANUP
    // ------------------------------------------------------------

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      scene.traverse(
        (object) => {
          if (
            object instanceof
            THREE.Mesh
          ) {
            object.geometry.dispose();

            if (
              Array.isArray(
                object.material
              )
            ) {
              object.material.forEach(
                (material) =>
                  material.dispose()
              );
            } else {
              object.material.dispose();
            }
          }
        }
      );

      particleGeometry.dispose();

      particleMaterial.dispose();

      coinTexture.dispose();

      renderer.dispose();

      if (
        renderer.domElement
          .parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "560px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #071827 0%, #02070d 62%, #010409 100%)",
      }}
      aria-label="Interactive BM Connect 3D visualization"
    />
  );
}