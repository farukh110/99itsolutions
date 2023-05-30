import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { useThree } from 'react-three-fiber';
import { Vector2 } from 'three';

import logo1 from '../../../../assets/images/tech-logos/javascript.png';
import logo2 from '../../../../assets/images/tech-logos/react.png';
import logo3 from '../../../../assets/images/tech-logos/node.png';
import logo4 from '../../../../assets/images/tech-logos/vue.png';
import logo5 from '../../../../assets/images/tech-logos/angular.png';
// import logo6 from '../../../../assets/images/tech-logos/express.png';
import logo7 from '../../../../assets/images/tech-logos/mongoDB.png';
import logo8 from '../../../../assets/images/tech-logos/html5.png';
import logo9 from '../../../../assets/images/tech-logos/css3.png';
import logo10 from '../../../../assets/images/tech-logos/firebase.png';
import logo11 from '../../../../assets/images/tech-logos/Ai.png';
import logo12 from '../../../../assets/images/tech-logos/xd.png';
import logo13 from '../../../../assets/images/tech-logos/github.png';
import logo14 from '../../../../assets/images/tech-logos/figma.png';
import logo15 from '../../../../assets/images/tech-logos/laravel.png';
// import logo16 from '../../../../assets/images/tech-logos/php.png';
// import logo17 from '../../../../assets/images/tech-logos/mysql.png';


import glo from '../../../../assets/images/full-slider/gradient.jpg';
import './index.scss';

const Globe = () => {
    const globeRef = useRef();
    const [isHovered, setHovered] = useState(false);
    const { gl, size } = useThree();
    const previousMousePosition = useRef(new Vector2());
    const [isDragging, setDragging] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const rotationSpeed = 0.0005;

    const markers = [
        { latitude: 50, longitude: -50, icon: logo1 },
        { latitude: 1250, longitude: -300, icon: logo2 },
        { latitude: 150, longitude: -150, icon: logo3 },
        { latitude: 200, longitude: -200, icon: logo4 },
        { latitude: 250, longitude: -250, icon: logo5 },
        // { latitude: 300, longitude: -300, icon: logo6 },
        { latitude: 1550, longitude: -1050, icon: logo7 },
        { latitude: 10, longitude: -400, icon: logo8 },
        { latitude: 450, longitude: -450, icon: logo9 },
        { latitude: 500, longitude: -550, icon: logo10 },
        { latitude: 550, longitude: -600, icon: logo11 },
        { latitude: 30, longitude: -650, icon: logo12 },
        { latitude: 70, longitude: -700, icon: logo13 },
        { latitude: 130, longitude: -750, icon: logo14 },
        { latitude: 680, longitude: -870, icon: logo15 },
        // { latitude: 210, longitude: -280, icon: logo16 },
        // { latitude: 600, longitude: -300, icon: logo17 },
        // Add more markers...
    ];

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.0,
    });

    const animateGlobe = () => {
        const elapsedTime = Date.now() - startTime;
        const rotation = (elapsedTime * rotationSpeed) % (Math.PI * 2);
        if (globeRef.current) {
            globeRef.current.rotation.y = rotation;
            // Rotate the logos in the opposite direction
            globeRef.current.children.forEach((child) => {
                if (child.name === 'logo') {
                    child.rotation.y = -rotation;
                }
            });
        }
    };

    useFrame(({ clock }) => {
        animateGlobe();
        if (clock.getElapsedTime() < 0.01) {
            setStartTime(Date.now());
        }
    });

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleMouseDown = (event) => {
        setDragging(true);
        previousMousePosition.current.x = event.clientX / size.width;
        previousMousePosition.current.y = event.clientY / size.height;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        const { x, y } = previousMousePosition.current;
        const deltaX = event.clientX / size.width - x;
        const deltaY = event.clientY / size.height - y;

        globeRef.current.rotation.y += deltaX * 0.01;
        globeRef.current.rotation.x += deltaY * 0.01;

        previousMousePosition.current.x = event.clientX / size.width;
        previousMousePosition.current.y = event.clientY / size.height;
    };

    const handleMouseUp = () => {
        setDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <mesh
            ref={globeRef}
            scale={[2.5, 2.5, 2.5]}
            geometry={geometry}
            material={material}
            // onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            onPointerDown={handleMouseDown}
        >
            {markers.map((marker, index) => {
                const { latitude, longitude, icon } = marker;
                const phi = (90 - latitude) * (Math.PI / 180);
                const theta = (longitude + 180) * (Math.PI / 180);

                const x = -Math.sin(phi) * Math.cos(theta);
                const y = Math.cos(phi);
                const z = Math.sin(phi) * Math.sin(theta);

                return (
                    <mesh key={index} position={[x, y, z]} scale={[0.3, 0.3, 1]} name="logo">
                        <planeGeometry args={[1, 1]} />
                        <meshBasicMaterial
                            map={new THREE.TextureLoader().load(icon)}
                        />
                    </mesh>
                );
            })}
            {isHovered && (
                <mesh>
                    {/* Add additional meshes or components to display when hovered */}
                </mesh>
            )}
        </mesh>
    );
}

const MainBanner = () => {
    return (<>
        <Canvas id='myCanvas'>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Globe />
        </Canvas>
    </>
    );
};

export default MainBanner;
