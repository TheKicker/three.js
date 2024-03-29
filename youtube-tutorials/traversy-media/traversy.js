let scene, camera, render, cube;

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2,2,2);
    // const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const texture = new THREE.TextureLoader().load('FloorsCheckerboard_S_Diffuse.jpg');
    const material = new THREE.MeshBasicMaterial({map: texture})
    cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5;
}

function animate(){
    // Begins the FPS Loop
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera)
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init()
animate()