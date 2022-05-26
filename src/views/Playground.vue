<template>
  <div id="canvas" ref="canvas"></div>
</template>

<script lang="ts">

import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry,
  MeshStandardMaterial, PointLight, PointLightHelper, Mesh, 
  MathUtils, AmbientLight, DoubleSide, Object3D, TextureLoader,
  PlaneGeometry, DirectionalLight, Vector3 } from 'three';

const profileImage = require('../assets/profile.jpg');
const sceneBackground = require("../assets/scenebackground.jpg");

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
    
    const pivot =  new Object3D()
    const pointLight = new PointLight(0xdddddd);
    const pointLightHelper = new PointLightHelper(pointLight);

    const ambientLight = new AmbientLight(0x404040);
    const directionalLight =  new DirectionalLight(0xffffff, 0.5);

    const scrollDirection = 0;

    const journeyPlane = new PlaneGeometry(10000,10000);
    const journeyMaterial = new MeshStandardMaterial({ 
      side: DoubleSide,
      color: 0xffffff
    });

    const journeyPlaque = new Mesh(journeyPlane, journeyMaterial);


    const plaqueGeometry = new BoxGeometry(100, 1, 100 );
    const plaqueMaterial = new MeshStandardMaterial({
      side: DoubleSide,
      map: textureLoader.load(profileImage)
    });

    const plaque = new Mesh(plaqueGeometry, plaqueMaterial);

    return {
      scene,
      camera,
      renderer,
      pivot,
      pointLight,
      ambientLight,
      scrollDirection,
      textureLoader,
      journeyPlaque, 
      plaque,
      directionalLight,
      cameraDirection
    }
  },
  created(){
    // Set up renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene.background = this.textureLoader.load(sceneBackground);

    // add point light helper to scene
    // this.scene.add(this.pointLightHelper);

    // add pivot at the origin to rotate point light
    this.pivot.add(this.pointLight); 
    this.scene.add(this.pivot);

    // add ambient light to scene
    // this.scene.add(this.ambientLight);

    // set point light and camera initial position
    this.pointLight.position.y = 1000;
    this.camera.position.z = 500;
    this.camera.position.y = 100;

    this.scene.add(this.journeyPlaque);
    this.journeyPlaque.rotateY( MathUtils.degToRad(90));
    this.journeyPlaque.rotateX( MathUtils.degToRad(90));

    this.scene.add(this.plaque);
    this.plaque.rotateX(MathUtils.degToRad(-90));
    this.plaque.position.y = 50;

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

      this.renderer.render(this.scene, this.camera);
    },
    moveCameraForward(e){
      let speed = -10;
      if (e.deltaY < 0){
        speed = 10;
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