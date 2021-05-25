function init() {
  const env = new Environment();
  const hb = new HouseBuilder(env.scene);

  const DEFAULT_DOOR_SIZE = { width: 0.5, height: 5, depth: 2 };
  const DEFAULT_DOOR_MATERIAL = hb.addTexture('./textures/door.jpg');

  const DEFAULT_FRONT_BACK_WALL_SIZE = { width: 0.3, height: 10, depth: 10 };
  const DEFAULT_SIDE_WALL_SIZE = { width: 16.7, height: 10, depth: 0.3 };
  const DEFAULT_WALL_MATERIAL = hb.addTexture('./textures/wall.jpg');
  
  const frontDoor = hb.addBox(
    DEFAULT_DOOR_SIZE.width, 
    DEFAULT_DOOR_SIZE.height, 
    DEFAULT_DOOR_SIZE.depth
  );
  hb.createMesh(frontDoor, DEFAULT_DOOR_MATERIAL, { x: -6.5, y: -2.5, z: 0 });

  const frontWall = hb.addBox(
    DEFAULT_FRONT_BACK_WALL_SIZE.width, 
    DEFAULT_FRONT_BACK_WALL_SIZE.height, 
    DEFAULT_FRONT_BACK_WALL_SIZE.depth
  );
  hb.createMesh(frontWall, DEFAULT_WALL_MATERIAL, { x: -6.5, y: 0, z: 0 });

  const leftSideWall = hb.addBox(
    DEFAULT_SIDE_WALL_SIZE.width,
    DEFAULT_SIDE_WALL_SIZE.height, 
    DEFAULT_SIDE_WALL_SIZE.depth
  );
  hb.createMesh(leftSideWall, DEFAULT_WALL_MATERIAL, { x: 1.7, y: 0, z: -5 });

  const rightSideWall = hb.addBox(
    DEFAULT_SIDE_WALL_SIZE.width, 
    DEFAULT_SIDE_WALL_SIZE.height, 
    DEFAULT_SIDE_WALL_SIZE.depth
  );
  hb.createMesh(rightSideWall, DEFAULT_WALL_MATERIAL, { x: 1.7, y: 0, z: 5 });

  const backWall = hb.addBox(
    DEFAULT_FRONT_BACK_WALL_SIZE.width, 
    DEFAULT_FRONT_BACK_WALL_SIZE.height, 
    DEFAULT_FRONT_BACK_WALL_SIZE.depth
  );
  hb.createMesh(backWall, DEFAULT_WALL_MATERIAL, { x: 10, y: 0, z: 0 });
  

  const backDoor = hb.addBox(
    DEFAULT_DOOR_SIZE.width, 
    DEFAULT_DOOR_SIZE.height, 
    DEFAULT_DOOR_SIZE.depth
  );
  hb.createMesh(backDoor, DEFAULT_DOOR_MATERIAL, { x: 10, y: -2.5, z: 0 });

  const ceiling = hb.addBox(16.5, 0.3, 10);
  hb.createMesh(ceiling, DEFAULT_WALL_MATERIAL, { x: 1.9, y: 4.88, z: 0 });

  env.animate();
}

init();
