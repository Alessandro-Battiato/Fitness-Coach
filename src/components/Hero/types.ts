import * as THREE from "three";

export type GLTFResult = {
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
};

export type MuscleZoneProps = {
    mesh: THREE.Mesh;
    name: string;
    onSelect: (zone: string) => void;
};
