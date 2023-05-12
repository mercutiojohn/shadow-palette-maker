<template>
  <el-form class="wrapper">
    <div class="grid-row">
      <div class="grid-col">
        <el-form-item label="Oomph">
          <el-slider v-model="oomph" :min="0" :max="1" :step="0.01"></el-slider>
        </el-form-item>
      </div>
      <div class="grid-col">
        <el-form-item label="Crispy">
          <el-slider
            v-model="crispy"
            :min="0"
            :max="1"
            :step="0.01"
          ></el-slider>
        </el-form-item>
      </div>
    </div>
    <div class="grid-row">
      <div class="grid-col">
        <el-form-item label="Light Position">
          <div class="grid-row">
            <div class="grid-col">
              <el-form-item>
                <el-slider
                  v-model="lightSourceX"
                  :min="-1"
                  :max="1"
                  :step="0.01"
                ></el-slider>
              </el-form-item>
            </div>
            <div class="grid-col">
              <el-form-item>
                <el-slider
                  v-model="lightSourceY"
                  :min="-1"
                  :max="1"
                  :step="0.01"
                ></el-slider>
              </el-form-item>
            </div>
          </div>
        </el-form-item>
      </div>
      <div class="grid-col">
        <el-form-item label="Background Color">
          <el-color-picker v-model="backgroundColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="Tint Shadow">
          <el-switch v-model="tintShadows"></el-switch>
        </el-form-item>
      </div>
    </div>
    <div class="grid-row">
      <div class="grid-col">
        <el-form-item label="Resolution">
          <el-slider
            v-model="resolution"
            :min="0"
            :max="1"
            :step="0.01"
          ></el-slider>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Controls",
  props: {
    lightSource: {
      type: Object,
      required: true,
    },
    resolution: {
      type: Number,
      required: true,
    },
    oomph: {
      type: Number,
      required: true,
    },
    crispy: {
      type: Number,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    tintShadows: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    lightSource(newVal) {
      this.$emit("update-light-source", newVal);
    },
    resolution(newVal) {
      this.$emit("update-resolution", newVal);
    },
    oomph(newVal) {
      this.$emit("update-oomph", newVal);
    },
    crispy(newVal) {
      this.$emit("update-crispy", newVal);
    },
    backgroundColor(newVal) {
      this.$emit("update-background-color", newVal);
    },
    tintShadows(newVal) {
      this.$emit("update-tint-shadows", newVal);
    },
  },
  computed: {
    lightSourceX: {
      get() {
        return this.lightSource.x;
      },
      set(newValue) {
        this.$emit("update-light-source", { x: newValue, y: this.lightSourceY });
      },
    },
    lightSourceY: {
      get() {
        return this.lightSource.y;
      },
      set(newValue) {
        this.$emit("update-light-source", { x: this.lightSourceX, y: newValue });
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  min-width: 590px;
}

@media only screen and (max-width: 1110px) {
  .wrapper {
    grid-template-columns: 1fr;
    min-width: 290px;
  }
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
}

.grid-col {
  grid-column: span 1;
}
</style>