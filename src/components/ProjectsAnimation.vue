<template>
  <div id="projects-scene"></div>
</template>


<script>

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const logoTexture = require("../assets/logo/logo.png");

export default {
  data(){
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 10, 2000);

    
    // Loader
    const textureLoader = new THREE.TextureLoader();

    
    // Texture Loads
    const logoTextureMap = textureLoader.load(logoTexture);

    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff);
    // const 


    // World 
    const worldSphereGeometry = new THREE.SphereGeometry(128, 64, 64);
    const worldSphereMaterial = new THREE.MeshPhongMaterial({ wireframe: true });
    const worldSphere = new THREE.Mesh(worldSphereGeometry, worldSphereMaterial);

    const logoCubeGeometry = new THREE.BoxGeometry(96, 96, 96, 16, 16, 16);
    const logoCubeMaterial = new THREE.MeshLambertMaterial({
      map: logoTextureMap, transparent: true
    });
    const logoCube = new THREE.Mesh(logoCubeGeometry, logoCubeMaterial);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Misc
    const rotationAxis = new THREE.Vector3(0, 1, 0);
    const rotationZAxis = new THREE.Vector3(0,0,1);

    const cubeRotationSpeed = Math.PI/72;
    const sphereRotationSpeed = Math.PI/360;

    const isMouseNotOver = true;

    return {
      renderer, 

      scene, 

      camera,

      controls,

      ambientLight,

      worldSphere,
      logoCube,

      rotationAxis,
      rotationZAxis,
      cubeRotationSpeed,
      sphereRotationSpeed,
      isMouseNotOver
    }
  },
  created(){
    // Set up renderer
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Adding to the scene
    this.scene.add(this.ambientLight);
    // this.scene.add(this.worldSphere);
    this.scene.add(this.logoCube);

    // Positioning Camera
    this.camera.position.z = 128;

    // Postioning Logo Cube
    this.logoCube.rotation.x = THREE.MathUtils.degToRad(45);
    this.logoCube.rotateOnWorldAxis(this.rotationZAxis, Math.atan(Math.sqrt(2)/2));
  }, 
  mounted(){
    const renderContainer = document.getElementById("projects-scene");
    this.renderer.setSize(renderContainer.clientWidth, renderContainer.clientHeight); 


    renderContainer.appendChild(this.renderer.domElement);
    this.camera.aspect = renderContainer.clientWidth / renderContainer.clientHeight;
    this.camera.updateProjectionMatrix();

    renderContainer.addEventListener("pointerdown", ()=>{
      this.isMouseNotOver = false;
    });

    renderContainer.addEventListener("pointerup", ()=>{
      this.isMouseNotOver = true;
    });
    
    window.addEventListener("resize", ()=>{
      this.camera.aspect = renderContainer.clientWidth / renderContainer.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(renderContainer.clientWidth, renderContainer.clientHeight);
    });

    this.runAnimationLoop();
  },
  methods:{
    runAnimationLoop(){
      // Add animations here

      if(this.isMouseNotOver){
        this.logoCube.rotateOnWorldAxis(this.rotationAxis, this.cubeRotationSpeed);
      }
      // this.worldSphere.rotateOnWorldAxis(this.rotationAxis, this.sphereRotationSpeed);

      this.controls.update();

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.runAnimationLoop);
    }
  }
}
</script>

<style scoped>
#projects-scene {
  min-height: 70vh;
}

#projects-scene::after {
  content: "Control the rotation with your pointer";
  font-size: 0.8rem;
}

@media screen and (max-width:600px) {
  #projects-scene {
    background-color: var(--primary-bg-color);
  }
}

</style>