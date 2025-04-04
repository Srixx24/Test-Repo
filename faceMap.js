// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Face mesh example (simulated)
const faceMesh = {
    eyes: new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 })),
    lips: new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshBasicMaterial({ color: 0x00ff00 })),
    face: new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
};

// Position the face mesh
faceMesh.eyes.position.set(0, 0.2, 0.5);
faceMesh.lips.position.set(0, -0.2, 0.5);
faceMesh.face.position.set(0, 0, 0.5);

// Add face mesh to scene
scene.add(faceMesh.eyes);
scene.add(faceMesh.lips);
scene.add(faceMesh.face);

// Helper function to check if an object is in the camera view
function isVisible(object) {
    const frustum = new THREE.Frustum();
    const cameraViewProjectionMatrix = new THREE.Matrix4();
    camera.updateMatrixWorld(); // ensure camera matrix is up to date
    cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
    return frustum.intersectsObject(object);
}

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Check visibility and render overlays
    if (isVisible(faceMesh.eyes)) {
        faceMesh.eyes.visible = true; // Show if visible
    } else {
        faceMesh.eyes.visible = false; // Stop rendering if obstructed
    }

    if (isVisible(faceMesh.lips)) {
        faceMesh.lips.visible = true; // Show if visible
    } else {
        faceMesh.lips.visible = false; // Stop rendering if obstructed
    }

    if (isVisible(faceMesh.face)) {
        faceMesh.face.visible = true; // Show if visible
    } else {
        faceMesh.face.visible = false; // Stop rendering if obstructed
    }

    renderer.render(scene, camera);
}

camera.position.z = 2;
animate();