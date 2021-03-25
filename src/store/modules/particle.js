import {
  Scene,
  FogExp2,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  TextureLoader,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
} from 'three-full';

const state = {
  width: 0,
  height: 0,
  camera: null,
  controls: null,
  scene: null,
  material: null,
  renderer: null,
  mouseX: 0,
  mouseY: 0,
  windowHalfX: 0,
  windowHalfY: 0,
  event: null,
};
const getters = {
  CAMERA_POSITION: state => {
    return state.camera ? state.camera.position : null;
  },
};
const actions = {
  INIT({ state, commit }, { width, height, el }) {
    return new Promise(resolve => {
      commit('SET_VIEWPORT_SIZE', { width, height });
      commit('INITIALIZE_RENDERER', el);
      commit('INITIALIZE_CAMERA');
      commit('INITIALIZE_SCENE');
      state.renderer.render(state.scene, state.camera);
      resolve();
    });
  },
  ANIMATE({ state, dispatch }) {
    window.requestAnimationFrame(() => {
      dispatch('ANIMATE');
      const time = Date.now() * 0.00004;

      state.camera.position.x += (state.mouseX - state.camera.position.x) * 0.05;
      state.camera.position.y += (-state.mouseY - state.camera.position.y) * 0.05;

      state.camera.lookAt(state.scene.position);

      const h = ((360 * (1.0 + time)) % 360) / 360;
      state.material.color.setHSL(h, 0.5, 0.5);

      state.renderer.render(state.scene, state.camera);
    });
  },
};
const mutations = {
  INITIALIZE_CAMERA(state) {
    state.camera = new PerspectiveCamera(55, state.width / state.height, 2, 2000);
    state.camera.position.z = 1000;
  },
  INITIALIZE_SCENE(state) {
    state.scene = new Scene();
    state.scene.fog = new FogExp2(0x000000, 0.001);

    const geometry = new BufferGeometry();
    const vertices = [];
    //const sprite = new TextureLoader().load('img/maple-leaf.4b5d7790.png');
    //const sprite = new TextureLoader().load('img/maple-leaf-new.1d459ed0.png');
    //const textureLoader = new TextureLoader();
    const sprite = new TextureLoader().load('img/leaf_1.49f7b626.png');

    //const sprite2 = new TextureLoader().load('img/leaf_2.3cf7483d.png');
    //const sprite3 = new TextureLoader().load('img/leaf_3.b51c03b4.png');

    //const sprite1 = textureLoader.load('img/leaf_1.49f7b626.png');
    //const sprite2 = textureLoader.load('img/leaf_2.3cf7483d.png');
    //const sprite3 = textureLoader.load('img/leaf_3.b51c03b4.png');

    for (let i = 0; i < 1000; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

    state.material = new PointsMaterial({
      size: 35,
      sizeAttenuation: true,
      map: sprite,
      alphaTest: 0.5,
      transparent: true,
    });

    state.material.color.setHSL(1.0, 0.3, 0.7);

    const particles = new Points(geometry, state.material);
    state.scene.add(particles);
  },
  INITIALIZE_RENDERER(state, el) {
    state.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    state.renderer.setPixelRatio(window.devicePixelRatio);
    state.renderer.setSize(state.width, state.height);
    el.appendChild(state.renderer.domElement);
  },
  SET_VIEWPORT_SIZE(state, { width, height }) {
    state.width = width;
    state.height = height;
  },
  RESIZE(state, { width, height }) {
    state.width = width;
    state.height = height;

    state.windowHalfX = width / 2;
    state.windowHalfY = height / 2;

    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();
    state.renderer.setSize(width, height);
  },
  POINTERMOVE(state, { event, width, height }) {
    state.width = width;
    state.height = height;
    state.windowHalfX = width / 2;
    state.windowHalfY = height / 2;
    state.renderer.setSize(width, height);

    if (event.isPrimary === false) {
      return;
    }

    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();

    state.event = event;
    state.mouseX = event.clientX - state.windowHalfX;
    state.mouseY = event.clientY - state.windowHalfY;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
