import React, { FC, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

const RotatingModel: FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = React.useRef<THREE.Group>(null!);
    const { gl } = useThree();
    const [speedMul, setSpeedMul] = useState(1);

    useFrame((_, dt) => {
        ref.current.rotation.y += dt * 0.1 * speedMul;
    });

    useDrag(
        ({ down, delta: [dx] }) => {
            setSpeedMul(down ? 2 : 1);
            if (down) ref.current.rotation.y += dx / 200;
        },
        { pointerEvents: true, target: gl.domElement }
    );

    return <group ref={ref}>{children}</group>;
};

export default RotatingModel;
