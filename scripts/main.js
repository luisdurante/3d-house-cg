

function init() {
  const env = new Environment();
  const hb = new HouseBuilder(env.scene);

  //textures
  const DEFAULT_DOOR_MATERIAL = hb.addTexture('./textures/door.jpg');
  const DEFAULT_BACK_DOOR_MATERIAL = hb.addTexture('./textures/sliding-door.png');
  const DEFAULT_WALL_MATERIAL = hb.addTexture('./textures/wall.jpg');
  const DEFAULT_CEILING_MATERIAL = hb.addTexture('./textures/ceiling.jpg');

  // walls, ceiling, doors dimensions
  const DEFAULT_DOOR_SIZE = { width: 0.5, height: 4.7, depth: 2 };
  const DEFAULT_BACK_DOOR_SIZE = { width: 0.5, height: 4.7, depth: 4 };
  const DEFAULT_FRONT_BACK_WALL_SIZE = { width: 0.3, height: 7, depth: 10 };
  const DEFAULT_SIDE_WALL_SIZE = { width: 16.7, height: 7, depth: 0.3 };
  const DEFAULT_WINDOW_SIZE = { width: 3, height: 5.7, depth: 0.4 };

  const frontWall = hb.addBox(
    DEFAULT_FRONT_BACK_WALL_SIZE.width, 
    DEFAULT_FRONT_BACK_WALL_SIZE.height, 
    DEFAULT_FRONT_BACK_WALL_SIZE.depth
  );
  hb.createMesh(frontWall, DEFAULT_WALL_MATERIAL, { x: -6.5, y: -1.32, z: 0 });

  const leftSideWall = hb.addBox(
    DEFAULT_SIDE_WALL_SIZE.width,
    DEFAULT_SIDE_WALL_SIZE.height, 
    DEFAULT_SIDE_WALL_SIZE.depth
  );
  hb.createMesh(leftSideWall, DEFAULT_WALL_MATERIAL, { x: 1.7, y: -1.32, z: -5 });

  const rightSideWall = hb.addBox(
    DEFAULT_SIDE_WALL_SIZE.width, 
    DEFAULT_SIDE_WALL_SIZE.height, 
    DEFAULT_SIDE_WALL_SIZE.depth
  );
  hb.createMesh(rightSideWall, DEFAULT_WALL_MATERIAL, { x: 1.7, y: -1.32, z: 5 });

  const backWall = hb.addBox(
    DEFAULT_FRONT_BACK_WALL_SIZE.width, 
    DEFAULT_FRONT_BACK_WALL_SIZE.height, 
    DEFAULT_FRONT_BACK_WALL_SIZE.depth
  );
  hb.createMesh(backWall, DEFAULT_WALL_MATERIAL, { x: 10, y: -1.32, z: 0 });

  const ceiling = hb.addBox(16.5, 0.3, 10);
  hb.createMesh(ceiling, DEFAULT_CEILING_MATERIAL, { x: 1.9, y: 2.2, z: 0 });
  

  const rightWindowTexture = hb.addTexture('./textures/right-window.jpg');
  const rightWindow = hb.addBox(
    DEFAULT_WINDOW_SIZE.width, 
    DEFAULT_WINDOW_SIZE.height, 
    DEFAULT_WINDOW_SIZE.depth
  );
  hb.createMesh(rightWindow, rightWindowTexture, { x: 1.7, y: -1.32, z: -5 });

  const firstLeftWindowTexture = hb.addTexture('./textures/left-window-1.jpg');
  const firstLeftWindow = hb.addBox(
    DEFAULT_WINDOW_SIZE.width, 
    DEFAULT_WINDOW_SIZE.height, 
    DEFAULT_WINDOW_SIZE.depth
  );
  hb.createMesh(firstLeftWindow, firstLeftWindowTexture, { x:  6, y: -1.32, z: 5 });

  const secondLeftWindowTexture = hb.addTexture('./textures/left-window-2.jpg');
  const secondLeftWindow = hb.addBox(
    DEFAULT_WINDOW_SIZE.width, 
    DEFAULT_WINDOW_SIZE.height, 
    DEFAULT_WINDOW_SIZE.depth
  );
  hb.createMesh(secondLeftWindow, secondLeftWindowTexture, { x: -1, y: -1.32, z: 5 });
  

  const frontDoor = hb.addBox(
    DEFAULT_DOOR_SIZE.width, 
    DEFAULT_DOOR_SIZE.height, 
    DEFAULT_DOOR_SIZE.depth
  );
  hb.createMesh(frontDoor, DEFAULT_DOOR_MATERIAL, { x: -6.5, y: -2.5, z: 0 });

  const backDoor = hb.addBox(
    DEFAULT_BACK_DOOR_SIZE.width, 
    DEFAULT_BACK_DOOR_SIZE.height, 
    DEFAULT_BACK_DOOR_SIZE.depth
  );
  hb.createMesh(backDoor, DEFAULT_BACK_DOOR_MATERIAL, { x: 10, y: -2.5, z: 0 });

  const firstSolarPanel = hb.addBox(10, 2.3, 3);
  const solarPanelTexture = hb.addTexture('./textures/solar-panel.jpg');
  hb.createMesh(firstSolarPanel, solarPanelTexture, { x: 1.9, y: 1.6, z: -3 });

  const secondSolarPanel = hb.addBox(10, 2.3, 3);
  hb.createMesh(secondSolarPanel, solarPanelTexture, { x: 1.9, y: 1.6, z: 3 });

  const leftVegetation = hb.addBox(1, 1, 3.7);
  const vegetationTexture = hb.addTexture('./textures/vegetation.png');
  hb.createMesh(leftVegetation, vegetationTexture, { x: -6.5, y: -4.3, z: -3 });

  const rightVegetation = hb.addBox(1, 1, 3.7);
  const vegetationTexture2 = hb.addTexture('./textures/vegetation.png');
  hb.createMesh(rightVegetation, vegetationTexture2, { x: -6.5, y: -4.3, z: 3 });

  

  env.animate();
}
init();
