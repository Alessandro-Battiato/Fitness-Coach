import React, { FC, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

const RotatingModel: FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<THREE.Group>(null!);
    const { gl } = useThree();
    const [speedMul, setSpeedMul] = useState(1);

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.style.touchAction = "pan-y";
        return () => {
            canvas.style.touchAction = "";
        };
    }, [gl]);

    useFrame((_, dt) => {
        ref.current.rotation.y += dt * 0.1 * speedMul;
    });

    useDrag(
        ({ down, delta: [dx] }) => {
            setSpeedMul(down ? 2 : 1);
            if (down) {
                ref.current.rotation.y += dx / 200;
            }
        },
        {
            pointerEvents: true,
            target: gl.domElement,
            axis: "x",
        }
    );

    return <group ref={ref}>{children}</group>;
};

export default RotatingModel;
