import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult, UseGLTFWithPreload } from "./types";
import MuscleZone from "./MuscleZone";

const HumanModel: FC<{ onSelect: (zone: string) => void }> = ({ onSelect }) => {
    const { nodes } = useGLTF<GLTFResult>("/models/human.glb");

    return (
        <group dispose={null} scale={[0.02, 0.02, 0.02]}>
            <mesh
                geometry={nodes.Retopo_highpoly.geometry}
                material={nodes.Retopo_highpoly.material}
            />

            <MuscleZone mesh={nodes.Abs} name="Abs" onSelect={onSelect} />
            <MuscleZone mesh={nodes.Chest} name="Chest" onSelect={onSelect} />
            <MuscleZone
                mesh={nodes.Shoulders}
                name="Shoulders"
                onSelect={onSelect}
            />
            <MuscleZone mesh={nodes.Biceps} name="Biceps" onSelect={onSelect} />
            <MuscleZone
                mesh={nodes.Triceps}
                name="Triceps"
                onSelect={onSelect}
            />
            <MuscleZone mesh={nodes.Back} name="Back" onSelect={onSelect} />
            <MuscleZone
                mesh={nodes.Gluteus}
                name="Gluteus"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Hamstrings}
                name="Hamstrings"
                onSelect={onSelect}
            />
            <MuscleZone mesh={nodes.Quads} name="Quads" onSelect={onSelect} />
            <MuscleZone mesh={nodes.Calves} name="Calves" onSelect={onSelect} />
        </group>
    );
};

(useGLTF as UseGLTFWithPreload).preload("/models/human.glb");

export default HumanModel;
