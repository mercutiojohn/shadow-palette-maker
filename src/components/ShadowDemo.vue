<template>
  <div class="wrapper">
    <div class="example-wrapper">
      <Example
        index="3"
        shape="rectangle"
        :filter-shadow="shadowFilterArray[2]"
        :box-shadow="shadowBoxArray[2]"
        :caption-color="captionColor"
      >
        High Elevation
      </Example>
    </div>
    <div class="example-wrapper">
      <Example
        index="2"
        shape="rectangle"
        :filter-shadow="shadowFilterArray[1]"
        :box-shadow="shadowBoxArray[1]"
        :caption-color="captionColor"
      >
        Medium Elevation
      </Example>
    </div>
    <div class="example-wrapper">
      <Example
        index="1"
        shape="rectangle"
        :filter-shadow="shadowFilterArray[0]"
        :box-shadow="shadowBoxArray[0]"
        :caption-color="captionColor"
      >
        Low Elevation
      </Example>
    </div>
  </div>
</template>

<script>
import { getCaptionColor } from "@/utils/helpers";
import Example from "./Example";

export default {
  name: "ShadowDemo",
  components: {
    Example,
  },
  props: {
    shadowFilterArray: {
      type: Array,
      required: true,
    },
    shadowBoxArray: {
      type: Array,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    captionColor() {
      return getCaptionColor(this.backgroundColor);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  gap: 48px;
}

.example-wrapper {
  min-width: 100%;
}

@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: row;
    justify-content: unset;
    align-items: unset;
    width: 100%;
    gap: 24px;
    padding: 48px 24px;
    overflow: auto;
    scroll-snap-type: x mandatory;
  }

  .example-wrapper {
    min-width: calc(100% - 32px);
    scroll-snap-align: center;
  }
}
</style>