<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts">

import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, CylinderGeometry,
  MeshStandardMaterial, PointLight, PointLightHelper, Mesh, 
  MathUtils, AmbientLight, DoubleSide, Object3D, TextureLoader,
  PlaneGeometry, DirectionalLight, Vector3 } from 'three';

const profileImage = require('../assets/profile.jpg');
const sceneBackground = require("../assets/scenebackground.jpg");

const hingeTexture = require('../assets/silvertexture.jpg');
const hingeNormalTexture = require("../assets/silvernormaltexture.jpg");

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
    
    const pointLight = new PointLight(0xdddddd);
    const pointLightHelper = new PointLightHelper(pointLight);

    const ambientLight = new AmbientLight(0x404040);
    const directionalLight =  new DirectionalLight(0xffffff, 0.9);

    const scrollDirection = 0;

    const journeyPlaneGeometry = new PlaneGeometry(10000,10000);
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
      pointLight,
      ambientLight,
      scrollDirection,
      textureLoader,
      journeyPlane, 
      plaque,
      projectOne,
      directionalLight,
      cameraDirection, 
      leftDoorHinge,
      rightDoorHinge,
      modelHeight,
      modelWidth,
      hingeRadius,
      modelGap,
      leftDoorHingePivot,
      rightDoorHingePivot
    }
  },
  created(){
    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene.background = this.textureLoader.load(sceneBackground);

    // add point light helper to scene
    // this.scene.add(this.pointLightHelper);

    this.scene.add(this.pointLight);

    // add ambient light to scene
    // this.scene.add(this.ambientLight);

    // set point light and camera initial position
    this.pointLight.position.y = 1000;
    this.camera.position.z = 500;
    this.camera.position.y = 100;

    this.scene.add(this.journeyPlane);
    this.journeyPlane.rotateX( MathUtils.degToRad(90));

    this.scene.add( this.leftDoorHinge, this.rightDoorHinge);
    
    this.leftDoorHinge.position.y = this.modelHeight / 2;
    this.leftDoorHinge.position.x = this.modelWidth + this.hingeRadius + this.modelGap;

    this.rightDoorHinge.position.y = this.modelHeight / 2;
    this.rightDoorHinge.position.x = -(this.modelWidth + this.hingeRadius + this.modelGap);


    this.projectOne.rotateX(MathUtils.degToRad(-90));
    this.projectOne.position.x = -this.modelWidth / 2;
    this.leftDoorHingePivot.add(this.projectOne);
    this.leftDoorHinge.add(this.leftDoorHingePivot);

    this.plaque.rotateX(MathUtils.degToRad(-90));
    this.plaque.position.x = this.modelWidth / 2;
    this.rightDoorHingePivot.add(this.plaque);
    this.rightDoorHinge.add(this.rightDoorHingePivot);

    this.directionalLight.position = new Vector3(0, 0, 1);
    this.scene.add(this.directionalLight);
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
      this.leftDoorHingePivot.rotation.y -= 0.01;
      this.rightDoorHingePivot.rotation.y += 0.01;
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
</style>