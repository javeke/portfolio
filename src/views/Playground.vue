<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts">

import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, CylinderGeometry,
  MeshStandardMaterial, PointLight, PointLightHelper, Mesh,
  MathUtils, AmbientLight, DoubleSide, Object3D, TextureLoader,
  DirectionalLight, Vector3, CircleGeometry } from 'three';

const profileImage = require('../assets/profile.jpg');
const sceneBackground = require("../assets/scenebackground.jpg");

const hingeTexture = require('../assets/silvertexture.jpg');
const hingeNormalTexture = require("../assets/silvernormaltexture.jpg");

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import Vue from 'vue'
export default Vue.extend({
  data(){
    const scene = new Scene();

    const fieldOfVision = 75; //degrees
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearPlane = 0.1;
    const farPlane = 10000;

    const camera = new PerspectiveCamera(fieldOfVision, aspectRatio, nearPlane, farPlane );
    const cameraDirection = new Vector3();

    const renderer =  new WebGLRenderer({ alpha: true});
    const textureLoader = new TextureLoader();
    const fontLoader = new FontLoader();
    
    const topDirectionLight = new DirectionalLight(0xdddddd, 0.9);
    // const pointLightHelper = new PointLightHelper(pointLight);

    const ambientLight = new AmbientLight(0x404040);
    const groundDirectionalLight =  new DirectionalLight(0xffffff, 0.9);

    const scrollDirection = 0;

    const journeyPlaneGeometry = new CircleGeometry(10000,10000);
    const journeyPlaneMaterial = new MeshStandardMaterial({ 
      side: DoubleSide,
      color: 0xffffff
    });

    const journeyPlane = new Mesh(journeyPlaneGeometry, journeyPlaneMaterial);

    const modelHeight = 300;
    const modelWidth = 300;
    const hingeRadius = 5;
    const modelGap = 10;

    const leftDoorHingeGeometry = new CylinderGeometry(hingeRadius, hingeRadius, modelHeight, 32);
    const leftDoorHingeMaterial = new MeshStandardMaterial({ 
      color: 0xffffff, map: textureLoader.load(hingeTexture), normalMap: textureLoader.load(hingeNormalTexture)
    });
    const leftDoorHinge = new Mesh(leftDoorHingeGeometry, leftDoorHingeMaterial);
    const leftDoorHingePivot =  new Object3D();

    const rightDoorHingeGeometry = new CylinderGeometry(hingeRadius, hingeRadius, modelHeight, 32);
    const rightDoorHingeMaterial = new MeshStandardMaterial( { 
      color: 0xffffff, map: textureLoader.load(hingeTexture), normalMap: textureLoader.load(hingeNormalTexture)
    });
    const rightDoorHinge = new Mesh(rightDoorHingeGeometry, rightDoorHingeMaterial);
    const rightDoorHingePivot =  new Object3D();

    // -1 - Forward and  1 - Backword
    const rightDoorDirection = -1; 
    const leftDoorDirection = -1;

    const plaqueGeometry = new BoxGeometry(modelWidth, 1, modelHeight );
    const plaqueMaterial = new MeshStandardMaterial({
      side: DoubleSide,
      map: textureLoader.load(profileImage)
    });

    const plaque = new Mesh(plaqueGeometry, plaqueMaterial);


    const projectOneGeometry = new BoxGeometry(modelWidth, 1, modelHeight );
    const projectOneMaterial = new MeshStandardMaterial({
      side: DoubleSide,
      map: textureLoader.load(profileImage)
    });

    const projectOne = new Mesh(projectOneGeometry, projectOneMaterial); 
    
    return {
      scene,
      camera,
      renderer,
      topDirectionLight,
      ambientLight,
      scrollDirection,
      textureLoader,
      journeyPlane, 
      plaque,
      projectOne,
      groundDirectionalLight,
      cameraDirection, 
      leftDoorHinge,
      rightDoorHinge,
      modelHeight,
      modelWidth,
      hingeRadius,
      modelGap,
      leftDoorHingePivot,
      rightDoorHingePivot,
      rightDoorDirection,
      leftDoorDirection,
      fontLoader
    }
  },
  created(){
    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene.background = this.textureLoader.load(sceneBackground);

    // add point light helper to scene
    // this.scene.add(this.pointLightHelper);

    this.scene.add(this.topDirectionLight);

    // add ambient light to scene
    // this.scene.add(this.ambientLight);

    // set point light and camera initial position
    this.topDirectionLight.position.y = 1000;
    this.camera.position.z = 500;
    this.camera.position.y = 200;

    this.scene.add(this.journeyPlane);
    this.journeyPlane.rotateX( MathUtils.degToRad(90));

    this.scene.add(this.leftDoorHinge, this.rightDoorHinge);
    
    this.leftDoorHinge.position.y = this.modelHeight / 2;
    this.leftDoorHinge.position.x = -(this.modelWidth + this.hingeRadius + this.modelGap);

    this.rightDoorHinge.position.y = this.modelHeight / 2;
    this.rightDoorHinge.position.x = this.modelWidth + this.hingeRadius + this.modelGap;


    this.projectOne.rotateX(MathUtils.degToRad(-90));
    this.projectOne.position.x = this.modelWidth / 2;
    this.leftDoorHingePivot.add(this.projectOne);
    this.leftDoorHinge.add(this.leftDoorHingePivot);

    this.plaque.rotateX(MathUtils.degToRad(-90));
    this.plaque.position.x = -this.modelWidth / 2;
    this.rightDoorHingePivot.add(this.plaque);
    this.rightDoorHinge.add(this.rightDoorHingePivot);

    this.groundDirectionalLight.position = new Vector3(0, 0, 1);
    this.scene.add(this.groundDirectionalLight);


    this.fontLoader.load("/fonts/Droid_Sans_Regular.json", (font)=>{
      const welcomeMessageGeometry = new TextGeometry("Welcome To My Playground", {
        font,
        size: 50,
        height: 50,
      });
      const welcomeMessageMaterial = new MeshStandardMaterial({ color: 0xdddddd });
      this.welcomeMessage = new Mesh(welcomeMessageGeometry, welcomeMessageMaterial);
      
      this.welcomeMessage.position.x = -400;
      this.welcomeMessage.position.y = 350;
      this.welcomeMessage.position.z = 100;
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

      this.oscillateHinge();

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
      this.camera.rotateY(MathUtils.degToRad(0.4 * e.movementX));
    },
    panCamera(){
      document.addEventListener("mousemove", this.turnCamera);
    },
    removePanCamera(){
      document.removeEventListener("mousemove", this.turnCamera);
    },
    oscillateHinge(){
      const oscillationSpeed = 0.02;

      if(this.leftDoorDirection < 0 && this.leftDoorHingePivot.rotation.y < -(Math.PI / 6)){
        this.leftDoorDirection = 1;
      }
      else if (this.leftDoorDirection > 0 && this.leftDoorHingePivot.rotation.y > (Math.PI / 6)){
        this.leftDoorDirection = -1;
      }

      if(this.rightDoorDirection < 0 && this.rightDoorHingePivot.rotation.y > (Math.PI / 6)){
        this.rightDoorDirection = 1;
      }
      else if (this.rightDoorDirection > 0 && this.rightDoorHingePivot.rotation.y < -(Math.PI / 6)){
        this.rightDoorDirection = -1;
      }
      this.leftDoorHingePivot.rotation.y += this.leftDoorDirection * oscillationSpeed;
      this.rightDoorHingePivot.rotation.y -= this.rightDoorDirection * oscillationSpeed;
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