<template>
  <section id="scene-container">
    <div id="scene" ></div>
  </section>
</template>

<script>

import * as THREE from 'three';

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { MathUtils, Mesh, MeshPhongMaterial, Vector3 } from 'three';

export default {
  data(){
    // Renderer
    const renderer =  new THREE.WebGLRenderer({alpha: true});

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

    // Lights
    const spotLight = new THREE.SpotLight();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const topDirectionLight = new THREE.DirectionalLight(0xffffff);

    // World Plane
    const worldPlaneGeometry = new THREE.PlaneGeometry(512, 512);
    const worldPlaneMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff,
      side:THREE.DoubleSide, specular: new THREE.Color(0xffffff), 
      shininess: 60 
    });
    const worldPlane =  new THREE.Mesh(worldPlaneGeometry, worldPlaneMaterial);

    // Misc
    const nameTarget = new THREE.Object3D();

    // -1 is left and 1 is right
    const nameTargetDirection = 1;

    const oscillationSpeed = 6;

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
    } 
  },
  created(){
    // Set up renderer
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Set up scene
    // this.scene.background = new THREE.Color(0x333333);

    // Adding to scene
    this.scene.add(this.worldPlane);
    this.scene.add(this.spotLight);
    // this.scene.add(this.topDirectionLight);
    // this.scene.add(this.ambientLight);
    this.spotLight.angle = MathUtils.degToRad(30);
    this.spotLight.shadow.camera.near = 1;
    this.spotLight.shadow.camera.far = 500;
    this.spotLight.shadow.camera.fov = 30;
    this.spotLight.penumbra = 0.5;

    // Positioning camera
    this.mainCamera.position.x = 150;
    this.mainCamera.position.y = 50;
    this.mainCamera.position.z = 250;

    this.mainCamera.rotateY(MathUtils.degToRad(40));

    // Positioning world plane
    this.worldPlane.position.z = 128;
    this.worldPlane.rotateX(MathUtils.degToRad(90));

    // Positioning lights
    this.topDirectionLight.position.y = 1000;

    // Loading font and text mesh
    this.fontLoader.load("/fonts/Droid_Sans_Regular.json", (font)=>{
      const textGeometry = new TextGeometry("JAVIER\nBRYAN", {
        font,
        size: 50,
        height: 24
      });
      const textMaterial = new MeshPhongMaterial({ color: 0xffffff, 
        specular: new THREE.Color(0xffffff), 
        shininess: 60 
      });
      const textMesh = new Mesh(textGeometry, textMaterial);
      textMesh.add(this.nameTarget);
      // this.nameTarget.position.z = 10;
      this.spotLight.target = this.nameTarget;
      textMesh.position.x = -100;
      textMesh.position.y = 90;
      this.spotLight.position.y = 100;
      this.spotLight.position.z = 300;
      
      
      this.scene.add(textMesh);
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
      
      this.renderer.render(this.scene, this.mainCamera);
    },
    oscillateSpotLight(){
      if(this.nameTargetDirection > 0 && this.spotLight.target.position.x > 600) {
        this.nameTargetDirection = -1;
      }
      else if(this.nameTargetDirection < 0 && this.spotLight.target.position.x < -350) {
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
</style>