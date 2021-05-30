class HouseBuilder {
  constructor(scene) {
    this.scene = scene
  }

  addBox(width, height, depth) {
    return new THREE.BoxBufferGeometry(width, height, depth);
  }

  addMaterial(materialObj) {
    return new THREE.MeshPhongMaterial(materialObj);
  }

  addTexture(texturePath) {
    const texture = new THREE.TextureLoader().load(texturePath);
    return new THREE.MeshBasicMaterial({ map: texture });
  }

  createMesh(object, material, meshCoordinates) {
    const mesh = new THREE.Mesh(object, material);
    const { x, y, z } = meshCoordinates
    mesh.position.set(x, y, z);
    this.scene.add(mesh);
  }
}