import { FC } from "react";
import { GLTFResult } from "./types";
import { useGLTF } from "@react-three/drei";
import MuscleZone from "./MuscleZone";

const HumanModel: FC<{ onSelect: (zone: string) => void }> = ({ onSelect }) => {
    const { nodes } = useGLTF("/models/human.glb") as unknown as GLTFResult;

    return (
        <group dispose={null} scale={[0.02, 0.02, 0.02]}>
            <mesh
                geometry={nodes.Retopo_highpoly.geometry}
                material={nodes.Retopo_highpoly.material}
            />

            <MuscleZone mesh={nodes.Abs} name="Addome" onSelect={onSelect} />
            <MuscleZone mesh={nodes.Chest} name="Petto" onSelect={onSelect} />
            <MuscleZone
                mesh={nodes.Shoulders}
                name="Spalle"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Biceps}
                name="Bicipiti"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Triceps}
                name="Tricipiti"
                onSelect={onSelect}
            />
            <MuscleZone mesh={nodes.Back} name="Schiena" onSelect={onSelect} />
            <MuscleZone
                mesh={nodes.Gluteus}
                name="Glutei"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Hamstrings}
                name="Femorali"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Quads}
                name="Quadricipiti"
                onSelect={onSelect}
            />
            <MuscleZone
                mesh={nodes.Calves}
                name="Polpacci"
                onSelect={onSelect}
            />
        </group>
    );
};

useGLTF.preload("/models/untitled.glb");

export default HumanModel;
