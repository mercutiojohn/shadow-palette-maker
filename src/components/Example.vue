<template>
  <figure class="wrapper" :style="wrapperStyle">
    <div class="demo-wrapper">
      <div class="rectangle" :style="rectangleStyle">
        <figcaption class="caption" :style="{ color: captionColor }">
          Fig. {{ index }} — {{ $slots.default[0].text }}
        </figcaption>
      </div>
    </div>
  </figure>
</template>

<script>
import { normalize } from "@/utils/utils";

export default {
  name: "Example",
  props: {
    index: {
      type: String,
      required: true,
    },
    filterShadow: {
      type: String,
      required: true,
    },
    boxShadow: {
      type: String,
      required: true,
    },
    captionColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    width() {
      return normalize(this.index, 1, 3, 180, 260) + "px";
    },
    borderRadius() {
      return normalize(this.index, 1, 3, 6, 10) + "px";
    },
    height() {
      return (normalize(this.index, 1, 3, 180, 260) * 100) / 220 + "px";
    },
    wrapperStyle() {
      return {
        "--box-shadow": this.boxShadow,
      };
    },
    rectangleStyle() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--radius": this.borderRadius,
        filter: this.filterShadow,
        boxShadow: "var(--box-shadow)",
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.demo-wrapper {
  width: max-content;
}

.rectangle {
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .demo-wrapper {
    width: 100%;
  }
  .rectangle {
    width: auto;
    height: 150px;
  }
}

.caption {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(calc(-100% - 8px));
  text-align: center;
  font-family: "Crimson Text";
  font-size: 0.875rem;
  font-style: italic;
  font-weight: 400;
  -webkit-font-smoothing: subpixel-antialiased;
  line-height: 1;
}
</style>