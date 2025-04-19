import React, { FC, useState } from "react";
import { MuscleZoneProps } from "./types";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

const MuscleZone: FC<MuscleZoneProps> = ({ mesh, name, onSelect }) => {
    const [hovered, setHovered] = useState(false);
    const [material] = useState(() =>
        (mesh.material as THREE.MeshStandardMaterial).clone()
    );

    useCursor(hovered, "pointer");

    React.useEffect(() => {
        if (hovered) {
            (material as THREE.MeshStandardMaterial).emissive = new THREE.Color(
                "white"
            );
            (material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4;
        } else {
            (material as THREE.MeshStandardMaterial).emissive = new THREE.Color(
                "black"
            );
            (material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
        }
    }, [hovered, material]);

    return (
        <mesh
            geometry={mesh.geometry}
            material={material}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => (e.stopPropagation(), setHovered(false))}
            onClick={(e) => (e.stopPropagation(), onSelect(name))}
        />
    );
};

export default MuscleZone;
