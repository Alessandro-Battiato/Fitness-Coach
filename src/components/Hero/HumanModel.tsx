import { useMemo } from "react";
import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult, UseGLTFWithPreload } from "./types";
import * as THREE from "three";
import MuscleZone from "./MuscleZone";

const HumanModel: FC<{ onSelect: (zone: string) => void }> = ({ onSelect }) => {
    const { nodes } = useGLTF<GLTFResult>("/models/human.glb");

    const meshNodes = useMemo(() => {
        return Object.values(nodes)
            .filter((obj) => obj.name !== "human" && obj.name !== "Scene")
            .filter((obj): obj is THREE.Mesh => obj instanceof THREE.Mesh);
    }, [nodes]);

    return (
        <group dispose={null} position={[0, 0.2, 0]} scale={[0.02, 0.02, 0.02]}>
            <mesh
                geometry={nodes.human.geometry}
                material={nodes.human.material}
            />

            {meshNodes.map((mesh, i) => (
                <MuscleZone key={i} mesh={mesh} onSelect={onSelect} />
            ))}
        </group>
    );
};

(useGLTF as UseGLTFWithPreload).preload("/models/human.glb");

export default HumanModel;
