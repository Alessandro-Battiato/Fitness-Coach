import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
export interface GLTFResult extends GLTF {
    nodes: {
        waist: THREE.Mesh;
        back: THREE.Mesh;
        upper_arms: THREE.Mesh;
        chest: THREE.Mesh;
        lower_legs: THREE.Mesh;
        shoulders: THREE.Mesh;
        human: THREE.Mesh;
        lower_arms: THREE.Mesh;
        upper_legs: THREE.Mesh;
    };
}

export type MuscleZoneProps = {
    mesh: THREE.Mesh;
    name: string;
    onSelect: (zone: string) => void;
};

export type UseGLTFWithPreload = typeof useGLTF & {
    preload: (url: string) => void;
};
