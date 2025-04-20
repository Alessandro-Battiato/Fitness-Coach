import { GLTF } from "three-stdlib";

declare module "@react-three/drei" {
    export function useGLTF<T extends GLTF = GLTF>(url: string): T;
}
