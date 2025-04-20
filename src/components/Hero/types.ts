import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
export interface GLTFResult extends GLTF {
    nodes: {
        Abs: THREE.Mesh;
        Back: THREE.Mesh;
        Biceps: THREE.Mesh;
        Calves: THREE.Mesh;
        Chest: THREE.Mesh;
        Gluteus: THREE.Mesh;
        Hamstrings: THREE.Mesh;
        Quads: THREE.Mesh;
        Shoulders: THREE.Mesh;
        Triceps: THREE.Mesh;
        Retopo_highpoly: THREE.Mesh;
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
