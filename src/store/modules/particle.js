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
  AdditiveBlending,
} from 'three-full';

const state = {
  width: 0,
  height: 0,
  camera: null,
  scene: null,
  materials: [],
  renderer: null,
  mouseX: 0,
  mouseY: 0,
  windowHalfX: 0,
  windowHalfY: 0,
  event: null,
  parameters: [],
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

      state.camera.position.x += (state.mouseX - state.camera.position.x) * 0.05;
      state.camera.position.y += (-state.mouseY - state.camera.position.y) * 0.05;

      state.camera.lookAt(state.scene.position);

      for (let i = 0; i < state.parameters.length; i++) {
        const time = Date.now() * 0.00004;
        const h = ((360 * (1.0 + time)) % 360) / 360;
        state.materials[i].color.setHSL(h, 0.5, 0.5);
      }

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
    const textureLoader = new TextureLoader();
    const sprite1 = textureLoader.load('img/_leaf1.b4b8a6e7.png');
    const sprite2 = textureLoader.load('img/_leaf2.32b29551.png');
    const sprite3 = textureLoader.load('img/_leaf3.61e1cdb6.png');
    const sprite4 = textureLoader.load('img/_leaf4.3590dadd.png');
    const sprite5 = textureLoader.load('img/_leaf5.9688e58c.png');

    for (let i = 0; i < 400; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    state.parameters = [[sprite1], [sprite2], [sprite3], [sprite4], [sprite5]];

    for (let i = 0; i < state.parameters.length; i++) {
      const sprite = state.parameters[i][0];

      state.materials[i] = new PointsMaterial({
        size: 35,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
        blending: AdditiveBlending,
        depthTest: false,
      });

      const time = Date.now() * 0.00004;
      const h = ((360 * (1.0 + time)) % 360) / 360;
      state.materials[i].color.setHSL(h, 0.5, 0.5);
      const particles = new Points(geometry, state.materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      state.scene.add(particles);
    }
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
