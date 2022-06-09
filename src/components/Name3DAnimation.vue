<template>
  <section id="scene-container">
    <div id="scene" ></div>
  </section>
</template>

<script>

import * as THREE from 'three';

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export default {
  data(){
    // Renderer
    const renderer =  new THREE.WebGLRenderer({ antialias: true});

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const fieldOfVision = 75;
    const aspectRatio = 1;
    const nearPlane = 1;
    const farPlane = 10000;
    const mainCamera = new THREE.PerspectiveCamera(fieldOfVision, aspectRatio, nearPlane, farPlane);

    // Loader
    const textureLoader = new THREE.TextureLoader();
    const fontLoader = new FontLoader();


    // Texture Loads

    // Lights
    const spotLight = new THREE.SpotLight(0xffffff, 2);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const topDirectionLight = new THREE.DirectionalLight(0xffffff);

    // World Plane
    const worldPlaneGeometry = new THREE.PlaneGeometry(1024, 1024);
    const worldPlaneMaterial = new THREE.MeshPhongMaterial({ color: 0x888888,
      side:THREE.DoubleSide
    });
    const worldPlane =  new THREE.Mesh(worldPlaneGeometry, worldPlaneMaterial);

    const mainGroup = new THREE.Group();

    // Misc
    const nameTarget = new THREE.Object3D();

    // -1 is left and 1 is right
    const nameTargetDirection = 1;

    const oscillationSpeed = 1;

    const isMouseOn = false;
    const mouseVector = new THREE.Vector3();

    return {
      renderer,

      mainCamera,

      scene, 

      fontLoader,

      spotLight,
      topDirectionLight,
      ambientLight,

      worldPlane,

      nameTarget,
      nameTargetDirection,

      oscillationSpeed,
      isMouseOn,
      mouseVector,

      mainGroup,
    } 
  },
  created(){
    // Set up renderer
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Set up scene
    // this.scene.background = new THREE.Color(0x333333);

    // Adding to scene
    this.scene.add(this.mainGroup);
    // this.mainGroup.add(this.worldPlane);
    this.scene.add(this.spotLight);
    // this.scene.add(this.topDirectionLight);
    // this.scene.add(this.ambientLight);
    this.spotLight.angle = THREE.MathUtils.degToRad(30);
    this.spotLight.shadow.camera.near = 1;
    this.spotLight.shadow.camera.far = 500;
    this.spotLight.shadow.camera.fov = 30;
    this.spotLight.penumbra = 0.5;

    // Positioning camera
    this.mainCamera.position.x = 70;
    this.mainCamera.position.y = 100;
    this.mainCamera.position.z = 200;

    this.mainCamera.rotateY(THREE.MathUtils.degToRad(20));
    this.mainCamera.rotateX(THREE.MathUtils.degToRad(-10));

    // Positioning world plane
    this.worldPlane.position.z = -64;
    this.worldPlane.rotateX(THREE.MathUtils.degToRad(90));

    // Positioning lights
    this.topDirectionLight.position.y = 1000;

    // Loading font and text mesh
    this.fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font)=>{
      const textGeometry = new TextGeometry("Javier\nBryan", {
        font,
        size: 50,
        height: 24
      });
      const textMaterial = new THREE.MeshPhongMaterial({ color: 0x888888,
        side: THREE.DoubleSide,
      });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.add(this.nameTarget);
      this.spotLight.target = this.nameTarget;
      textMesh.position.x = -100;
      textMesh.position.y = 90;
      this.spotLight.position.x = 200;
      this.spotLight.position.y = 200;
      this.spotLight.position.z = 300;
      
      
      this.mainGroup.add(textMesh);
      // this.scene.add(new THREE.BoxHelper(textMesh, 0x0000ff));
    });
  },
  mounted(){
    const sceneContainer = document.getElementById("scene-container");

    // Setting renderer size
    this.renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

    const sceneParent = document.getElementById('scene');
    sceneParent.appendChild(this.renderer.domElement);
    window.addEventListener("resize",()=>{
      const sceneContainer = document.getElementById("scene-container");
      this.mainCamera.aspect =  sceneContainer.clientWidth / sceneContainer.clientHeight;
      this.mainCamera.updateProjectionMatrix();

      this.renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    });

    sceneParent.onmousemove = this.focusSpotLightOnHover;
    sceneParent.onmouseenter = this.setMouseOn;
    sceneParent.onmouseleave = this.setMouseOff;

    this.animate();
  },
  methods: {
    animate(){
      requestAnimationFrame(this.animate);

      if(!this.isMouseOn){
        this.oscillateSpotLight();
      }

      this.mainGroup.rotation.y = (this.mainGroup.rotation.y + 0.01) % (2 * Math.PI);
      
      this.renderer.render(this.scene, this.mainCamera);
    },
    oscillateSpotLight(){
      if(this.nameTargetDirection > 0 && this.spotLight.target.position.x > 500) {
        this.nameTargetDirection = -1;
      }
      else if(this.nameTargetDirection < 0 && this.spotLight.target.position.x < -600) {
        this.nameTargetDirection = 1;
      }

      this.spotLight.target.position.x += this.nameTargetDirection * this.oscillationSpeed;
    },
    focusSpotLightOnHover(e){
      e.preventDefault();
      
      const sceneParent = document.getElementById('scene');
      
      this.mouseVector.x = (e.offsetX / sceneParent.clientWidth )* 2 - 1;
      this.mouseVector.y = (e.offsetY / sceneParent.clientHeight )* -2 + 1;
      this.mouseVector.z = 0.5;

      this.mouseVector.unproject(this.mainCamera); 
      const direction = this.mouseVector.sub( this.mainCamera.position ).normalize();
      const distance = -this.mainCamera.position.z / direction.z;
      const position = this.mainCamera.position.clone().add(direction.multiplyScalar(distance));

      // The name target is position is with reference to the parent element placement
      this.nameTarget.position.x = position.x + 100; 
      this.nameTarget.position.y = position.y - 90;
    },
    setMouseOn(){
      this.isMouseOn = true;
    },
    setMouseOff(){
      this.isMouseOn = false;
      this.nameTarget.position.x = 0; 
      this.nameTarget.position.y = 0;
    }
  }
};
</script>

<style scoped>
#scene-container {
  padding: 0 2rem;
}
</style>