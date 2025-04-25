import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult, UseGLTFWithPreload } from "./types";
import MuscleZone from "./MuscleZone";

const HumanModel: FC<{ onSelect: (zone: string) => void }> = ({ onSelect }) => {
    const { nodes } = useGLTF<GLTFResult>("/models/human.glb");

    return (
        <group dispose={null} position={[0, 0.2, 0]} scale={[0.02, 0.02, 0.02]}>
            <mesh
                geometry={nodes.human.geometry}
                material={nodes.human.material}
            />

            <MuscleZone mesh={nodes.waist} onSelect={onSelect} />
            <MuscleZone mesh={nodes.chest} onSelect={onSelect} />
            <MuscleZone mesh={nodes.shoulders} onSelect={onSelect} />
            <MuscleZone mesh={nodes.upper_arms} onSelect={onSelect} />
            <MuscleZone mesh={nodes.lower_arms} onSelect={onSelect} />
            <MuscleZone mesh={nodes.back} onSelect={onSelect} />
            <MuscleZone mesh={nodes.upper_legs} onSelect={onSelect} />
            <MuscleZone mesh={nodes.lower_legs} onSelect={onSelect} />
        </group>
    );
};

(useGLTF as UseGLTFWithPreload).preload("/models/human.glb");

export default HumanModel;
