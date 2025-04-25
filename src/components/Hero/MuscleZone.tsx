import React, { FC, useCallback, useState } from "react";
import { MuscleZoneProps } from "./types";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

const formatZoneName = (rawName: string | undefined): string => {
    if (!rawName) return "";
    return rawName.replace(/_/g, " ");
};

const MuscleZone: FC<MuscleZoneProps> = ({ mesh, onSelect }) => {
    const [hovered, setHovered] = useState(false);
    const [material] = useState(() => {
        const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
        mat.side = THREE.FrontSide; // backface-culling, to prevent user from selecting muscle zones not facing the camera directly
        return mat;
    });

    useCursor(hovered, "pointer");

    const handleClick = useCallback(
        (e: { stopPropagation: () => void }) => {
            e.stopPropagation();
            const formatted = formatZoneName(mesh?.name);
            onSelect(formatted);
        },
        [mesh, onSelect]
    );

    React.useEffect(() => {
        if (hovered) {
            (material as THREE.MeshStandardMaterial).emissive = new THREE.Color(
                "red"
            );
            (material as THREE.MeshStandardMaterial).emissiveIntensity = 0.7;
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
            onClick={handleClick}
        />
    );
};

export default MuscleZone;
