<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts">

import { Scene, PerspectiveCamera, WebGLRenderer,
  MeshStandardMaterial, Mesh, PointLight, Quaternion, SpotLight, Object3D,
  MathUtils, AmbientLight, DoubleSide, TextureLoader,
  DirectionalLight, Vector3, Vector2, PlaneGeometry } from 'three';

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// For Debugging purposes
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const lavaTexture = require("../assets/textureMaps/lava.jpg");
const lavaHeightTexture = require("../assets/textureMaps/height/lava.png");
const lavaNormalTexture = require("../assets/textureMaps/normal/lava.jpg");
const lavaAoTexture = require("../assets/textureMaps/ao/lava.jpg");
const lavaRoughnessTexture = require("../assets/textureMaps/roughness/lava.jpg");

import Vue from 'vue'
export default Vue.extend({
  data(){
    // Main Scene
    const scene = new Scene();


    // Camera
    const fieldOfVision = 75; //degrees
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearPlane = 0.1;
    const farPlane = 10000;

    const camera = new PerspectiveCamera(fieldOfVision, aspectRatio, nearPlane, farPlane );
    const cameraDirection = new Vector3();

    // Renderer
    const renderer =  new WebGLRenderer({ alpha: true});


    // Loaders
    const textureLoader = new TextureLoader();
    const fontLoader = new FontLoader();


    // Texture loads    
    const lavaTextureMap = textureLoader.load(lavaTexture);
    const lavaHeightTextureMap = textureLoader.load(lavaHeightTexture);
    const lavaNormalTextureMap = textureLoader.load(lavaNormalTexture);
    const lavaAoTextureMap = textureLoader.load(lavaAoTexture);
    const lavaRoughnessTextureMap = textureLoader.load(lavaRoughnessTexture);

    // Lights
    const topDirectionLight = new DirectionalLight(0xdddddd, 1.4);
    const ambientLight = new AmbientLight(0x404040);
    const groundDirectionalLight =  new DirectionalLight(0xdddddd, 0.9);
    const topPointLight = new PointLight(0xffffff, 1.7);
    const messageSpotLight = new SpotLight(0xffffff, 2);

    // World Plane
    const worldPlaneGeometry = new PlaneGeometry(1024,1024, 100, 100);
    const worldPlaneMaterial = new MeshStandardMaterial({ 
      side: DoubleSide,
      map: lavaTextureMap,
      displacementMap: lavaHeightTextureMap,
      displacementScale: 100,
      normalMap: lavaNormalTextureMap,
      roughnessMap: lavaRoughnessTextureMap,
      aoMap: lavaAoTextureMap,
      aoMapIntensity:1
    });

    const worldPlane = new Mesh(worldPlaneGeometry, worldPlaneMaterial);

    worldPlane.geometry.attributes.uv2 = worldPlane.geometry.attributes.uv.clone();

    const worldPlaneMeshArray = Array(3).fill(0).map(()=>{
      return Array(3).fill(0).map(()=>worldPlane.clone())
    });

    // Quaternion
    const cameraTransform = new Quaternion();

    // Misc
    let welcomeMessage = undefined;
    let nameMessage = undefined;
    const welcomeMessageTarget = new Object3D();
    const nameMessageTarget = new Object3D();
    // -1 is left and 1 is right
    const welcomeMessageMovingDirection = 1;

    // const controls = new OrbitControls(camera, renderer.domElement);
    
    return {
      scene,
      camera,
      cameraDirection, 
      renderer,
      // controls,

      topDirectionLight,
      ambientLight,
      topPointLight,
      groundDirectionalLight,
      messageSpotLight,

      textureLoader,
      fontLoader,

      worldPlane, 
      worldPlaneMeshArray,
      cameraTransform,

      welcomeMessage,
      welcomeMessageTarget,
      welcomeMessageMovingDirection,
      nameMessage,
      nameMessageTarget
    }
  },
  created(){
    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.camera.position.z = 600; 
    this.camera.position.y = 200;
    this.camera.rotateX(MathUtils.degToRad(-10))
    
    
    // Adding to the scene
    this.scene.background = 0x000000;
    this.scene.add(this.topDirectionLight);
    // this.scene.add(this.worldPlane);
    // this.scene.add(this.groundDirectionalLight);
    // this.scene.add(this.topPointLight);
    this.scene.add(this.messageSpotLight);

    // Light Orientation
    this.topPointLight.position.y = 1000;
    this.topDirectionLight.position.y = 2000;
    this.messageSpotLight.position.y = 500;
    // this.messageSpotLight.position.z = -100;
    this.messageSpotLight.angle = MathUtils.degToRad(15);

    this.messageSpotLight.shadow.camera.near = 1;
    this.messageSpotLight.shadow.camera.far = 1000;
    this.messageSpotLight.shadow.camera.fov = 30;


    // add ambient light to scene
    // this.scene.add(this.ambientLight); 

    for(let row =0; row < 3; row++){
      for (let col =0; col< 3; col++){
        this.scene.add(this.worldPlaneMeshArray[row][col]);
        this.worldPlaneMeshArray[row][col].position.x = (1024 * (col-1));
        this.worldPlaneMeshArray[row][col].position.z = (1024 * (row-1));
        this.worldPlaneMeshArray[row][col].rotateX(MathUtils.degToRad(-90));
      }
    }
    
    // this.worldPlane.rotateX( MathUtils.degToRad(90));

    this.groundDirectionalLight.position = new Vector3(0, 0, 1);
    

    this.fontLoader.load("/fonts/Droid_Sans_Regular.json", (font)=>{
      const welcomeMessageGeometry = new TextGeometry("Welcome To My Playground", {
        font,
        size: 50,
        height: 10,
      });
      const welcomeMessageMaterial = new MeshStandardMaterial({ color: 0xdddddd });
      this.welcomeMessage = new Mesh(welcomeMessageGeometry, welcomeMessageMaterial);

      const nameMessageGeometry = new TextGeometry("Javier Bryan", {
        font,
        size: 50,
        height: 10,
      });
      const nameMessageMaterial = welcomeMessageMaterial.clone();
      this.nameMessage = new Mesh(nameMessageGeometry, nameMessageMaterial);

      this.nameMessage.position.x = -300;
      this.nameMessage.position.y = 400;
      this.nameMessage.position.z = -200;
      
      this.welcomeMessage.position.x = -400;
      this.welcomeMessage.position.y = 400;
      this.welcomeMessage.position.z = -200;
      this.messageSpotLight.target = this.welcomeMessageTarget;
      this.welcomeMessage.add(this.welcomeMessageTarget); 
      this.nameMessage.add(this.nameMessageTarget);
      this.scene.add(this.welcomeMessage);
    });

  },
  mounted(){
    document.getElementById("canvas").appendChild(this.renderer.domElement);
    window.addEventListener("resize", ()=>{
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.onwheel = this.moveCameraForward;
    document.onmousedown = this.panCamera;
    document.onmouseup = this.removePanCamera;
    this.animate();
  },
  methods: {
    animate(){
      requestAnimationFrame(this.animate);

      this.rotatemessageSpotLight();
      // this.controls.update();

      this.renderer.render(this.scene, this.camera);
    },
    moveCameraForward(e){
      let speed = -30;
      if (e.deltaY < 0){
        speed *= -1;
      }
      this.camera.getWorldDirection(this.cameraDirection);
      this.cameraDirection.y = 0;
      this.camera.position.add(this.cameraDirection.multiplyScalar(speed));
    },
    turnCamera(e){
      // this.camera.rotateY(MathUtils.degToRad(0.4 * e.movementX));
      this.cameraTransform.setFromAxisAngle(new Vector3(0, 1, 0), MathUtils.degToRad(0.4 * e.movementX));
      this.camera.applyQuaternion(this.cameraTransform);
    },
    panCamera(){
      document.addEventListener("mousemove", this.turnCamera);
    },
    removePanCamera(){
      document.removeEventListener("mousemove", this.turnCamera);
    },
    rotatemessageSpotLight(){
      const speed = 10;
      if(this.welcomeMessageMovingDirection > 0 && this.messageSpotLight.target.position.x > 1500){
        this.welcomeMessageMovingDirection = -1;

        if(this.nameMessage) {
          this.nameMessageTarget.position.x = this.messageSpotLight.target.position.x;
          this.messageSpotLight.target = this.nameMessageTarget;
          this.scene.remove(this.welcomeMessage);
          this.scene.add(this.nameMessage);
        }
      }
      else if (this.welcomeMessageMovingDirection < 0 && this.messageSpotLight.target.position.x < -700){
        this.welcomeMessageMovingDirection = 1;
         if(this.welcomeMessage) {
          this.welcomeMessageTarget.position.x = this.messageSpotLight.target.position.x;
          this.messageSpotLight.target = this.welcomeMessageTarget;
          this.scene.remove(this.nameMessage);
          this.scene.add(this.welcomeMessage);
        }
      }

      this.messageSpotLight.target.position.x += speed * this.welcomeMessageMovingDirection;
    }
  }
})
</script>

<style scoped>
#canvas {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#canvas::after {
  content:"My playground is currently a work in progress. Follow along with me on this construction journey by staying up to date 🚧👷‍♂️";
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  max-width: 20rem;
  padding: 1rem;
  font-size: 0.7rem;
  text-align: left;
  color: var(--tertiary-color);
  font-weight: bold;
  backdrop-filter: blur(8px);
  background-color: #ddd;
  border-radius: 8px;
}
</style>