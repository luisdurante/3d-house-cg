class Environment {
  constructor() {
    this.initEnv();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x343a40);
    document.body.appendChild(this.renderer.domElement);
  }

  initCamera() {
    this.camera =  new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  }

  initCameraControls() {
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  addEnvLights() {
    // Ambient Light
    this.scene.add(new THREE.AmbientLight(0x333333));
  
    // Point light
    const light = new THREE.PointLight(0xffffff, 0.8);
    this.camera.add(light);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  initEnv() {
    this.initRenderer();
    this.scene = new THREE.Scene();
    this.initCamera();
    this.camera.position.set(0, 60, 5);

    this.scene.add(this.camera); // required, since adding light as child of camera
    this.initCameraControls();
  
    this.addEnvLights();
  }


}