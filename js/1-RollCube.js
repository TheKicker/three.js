/*
    To display anything with three.js -  we need a scene, a camera and a renderer. 
*/
const scene = new THREE.Scene();
// Field of View, Aspect Ratio, Clipping Plane (render distance)
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Primary is webglrenderer but others are available for fallback browsers and devices
const renderer = new THREE.WebGLRenderer();
// Render at full screen
renderer.setSize( window.innerWidth, window.innerHeight );
// Inject into document
document.body.appendChild( renderer.domElement );

// Contains all vertices and faces of a cube
const geometry = new THREE.BoxGeometry();
// Apply basic material to the cube and color teal
const material = new THREE.MeshBasicMaterial( { color: 0x008080 } );
// Combines the geometry with the material to create an object
const cube = new THREE.Mesh( geometry, material );
// Adds said object to our scene
scene.add( cube );

// Set the position of our camera
camera.position.z = 5;

// Animate loop that is called every time the screen is refreshed (60fps)
function animate() {
    requestAnimationFrame( animate );
    // Any animations go before the renderer.  Can be hard code or functions. 
    rollCube()
	renderer.render( scene, camera );
}

function rollCube(){
    // Kind of like Roll Tide but way less cool :)
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.03;
}

animate();