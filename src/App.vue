<template>
  <div id="app">
    <!-- <Controls
      :light-source="shadows.lightSource"
      :resolution="shadows.resolution"
      :oomph="shadows.oomph"
      :crispy="shadows.crispy"
      :background-color="backgroundColor"
      :tint-shadows="shadows.tintShadows"
      a="------------"
      @update-light-source="setLightSource"
      @update-resolution="setResolution"
      @update-background-color="setBackgroundColor"
      @update-tint-shadows="toggleTintShadows"
      @update-oomph="setOomph"
      @update-crispy="setCrispy"
    /> -->
    <!-- <div class="data">
      <p>
        Light Source: {{ shadows.lightSource.x }}, {{ shadows.lightSource.y }}
      </p>
      <p>Resolution: {{ shadows.resolution }}</p>
      <p>Oomph: {{ shadows.oomph }}</p>
      <p>Crispy: {{ shadows.crispy }}</p>
      <p>Background Color: {{ backgroundColor }}</p>
      <p>Tint Shadows: {{ shadows.tintShadows }}</p>
    </div> -->
    <ShadowDemo
      :background-color="backgroundColor"
      :shadow-filter-array="shadowFilterArray"
      :shadow-box-array="shadowBoxArray"
    />
    current:{{ current }}
    <el-button @click="active('Style1')">Style1</el-button>
    <el-button @click="active('Style2')">Style2</el-button>

    <component :is="currentComponent"  />
  </div>
</template>

<script>
/* eslint-disable */
import Style1 from "./Style1/Style1";
import Style2 from "./Style2/Style2";

// import Controls from "@/components/Controls";
import ShadowDemo from "@/components/ShadowDemo";

import {
  formatHslString,
  generateShadows,
  getShadowBackgroundHslValues,
  formatShadowsAsDropShadow,
  formatShadowsAsBoxShadow,
} from "@/utils/helpers";
export default {
  name: "App",
  components: {
    // Controls,
    ShadowDemo,
  },
  computed: {
    currentComponent() {
      return {
        Style1,
        Style2,
      }[this.current];
    },
    shadowFilterArray() {
      return formatShadowsAsDropShadow(this.shadows)
    },
    shadowBoxArray() {
      return formatShadowsAsBoxShadow(this.shadows)
    }
  },
  data() {
    return {
      current: "Style1",
      //
      backgroundColor: "#000000",
      shadows: [],
      lightSource: {
        x: -0.25,
        y: -0.5,
      },
      resolution: 0.5,
      oomph: 0.5,
      crispy: 0.5,
      tintShadows: false,

    };
  },
  mounted(){
    this.shadows = generateShadows({
      lightSource: this.lightSource,
      resolution: this.resolution,
      oomph: this.oomph,
      crispy: this.crispy,
      tintShadows: this.tintShadows,
    });
  },
  methods: {
    active(name) {
      this.current = name;
    },
    // ------
    setLightSource({ x, y }) {
      this.shadows.lightSource = { x, y };
    },
    setResolution(value) {
      this.shadows.resolution = value;
    },
    setOomph(value) {
      this.shadows.oomph = value;
    },
    setCrispy(value) {
      this.shadows.crispy = value;
    },
    setBackgroundColor(value) {
      this.backgroundColor = value;
    },
    toggleTintShadows(value) {
      this.shadows.tintShadows = value;
    },
  },
};
</script>

<Style scoped>
</Style>
