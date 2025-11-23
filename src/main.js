import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
camera.position.z = 2.0;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// geometry
const geo = new THREE.BoxGeometry(1,1,1);
const matrial = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
  metalness: 0.5,
  roughness: 0.3
})
const mesh = new THREE.Mesh(geo, matrial);
scene.add(mesh)
// light
const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(5,5,5)
scene.add(light);

// add wareframe overlay
const wireMatatial =  new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  wireframe: true
})
const wirMesh = new THREE.Mesh(geo, wireMatatial);
mesh.add(wirMesh)
// wireMesh.scale.setScalar(1.001);
wirMesh.scale.setScalar(1.1)

// adding OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03
function animate(t=0){
  requestAnimationFrame(animate)
  mesh.rotation.y = t * 0.0001;
  renderer.render(scene, camera)
}

animate()
renderer.render(scene, camera)