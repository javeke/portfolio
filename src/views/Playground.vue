<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts">

import { Scene, PerspectiveCamera, WebGLRenderer,
  MeshStandardMaterial, Mesh, PointLight, Quaternion,
  MathUtils, AmbientLight, DoubleSide, TextureLoader,
  DirectionalLight, Vector3, Vector2, PlaneGeometry } from 'three';

const sceneBackground = require("../assets/scenebackground.jpg");

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const groundTexture = require("../assets/textureMaps/ground.jpg");
const groundHeightTexture = require("../assets/textureMaps/height/ground.png");
const groundNormalTexture = require("../assets/textureMaps/normal/ground.png");
const groundAlphaTexture = require("../assets/textureMaps/alphaMap/ground.png");

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
    const groundTextureMap = textureLoader.load(groundTexture);
    const groundHeightTextureMap = textureLoader.load(groundHeightTexture);
    const groundNormalTextureMap = textureLoader.load(groundNormalTexture);
    const groundAlphaTextureMap = textureLoader.load(groundAlphaTexture);

    // Lights
    const topDirectionLight = new DirectionalLight(0xdddddd, 0.7);
    const ambientLight = new AmbientLight(0x404040);
    const groundDirectionalLight =  new DirectionalLight(0xdddddd, 0.9);
    const topPointLight = new PointLight(0xffffff);

    const normalScale = new Vector2(0.75, 0.75);


    // World Plane
    const worldPlaneGeometry = new PlaneGeometry(10000,10000, 1000, 1000);
    const worldPlaneMaterial = new MeshStandardMaterial({ 
      side: DoubleSide,
      color: 0xd1d3d7,
      map: groundTextureMap,
      displacementMap: groundHeightTextureMap,
      displacementScale: 1000,
      // alphaMap: groundAlphaTextureMap,
      normalMap: groundNormalTextureMap,
      normalScale: normalScale,
      // roughness: 0.1
    });

    const worldPlane = new Mesh(worldPlaneGeometry, worldPlaneMaterial);


    // Quaternion
    const cameraTransform = new Quaternion();
    
    return {
      scene,
      camera,
      cameraDirection, 
      renderer,

      topDirectionLight,
      ambientLight,
      topPointLight,
      groundDirectionalLight,

      textureLoader,
      fontLoader,

      worldPlane, 
      cameraTransform
    }
  },
  created(){
    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.camera.position.z = 800;
    this.camera.position.y = 100;
    // this.camera.rotateX(MathUtils.degToRad(-5));
    
    
    // Adding to the scene
    this.scene.background = this.textureLoader.load(sceneBackground);
    this.scene.add(this.topDirectionLight);
    this.scene.add(this.worldPlane);
    this.scene.add(this.groundDirectionalLight);
    this.scene.add(this.topPointLight);


    this.topPointLight.position.y = 1000;


    this.topDirectionLight.position.y = 2000;


    // add ambient light to scene
    // this.scene.add(this.ambientLight);  

    
    this.worldPlane.rotateX( MathUtils.degToRad(90));
    this.worldPlane.rotateZ( MathUtils.degToRad(180));


    this.groundDirectionalLight.position = new Vector3(0, 0, 1);
    

    this.fontLoader.load("/fonts/Droid_Sans_Regular.json", (font)=>{
      const welcomeMessageGeometry = new TextGeometry("Welcome To My Playground", {
        font,
        size: 50,
        height: 10,
      });
      const welcomeMessageMaterial = new MeshStandardMaterial({ color: 0xdddddd });
      this.welcomeMessage = new Mesh(welcomeMessageGeometry, welcomeMessageMaterial);
      
      this.welcomeMessage.position.x = -400;
      this.welcomeMessage.position.y = 400;
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

      this.renderer.render(this.scene, this.camera);
    },
    moveCameraForward(e){
      let speed = -30;
      if (e.deltaY < 0){
        speed *= -1;
      }
      this.camera.getWorldDirection(this.cameraDirection);
      this.camera.position.add( this.cameraDirection.multiplyScalar(speed));
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