<template>
  <div class="wrapper">
    {{shadowFilterArray}}
    {{shadowBoxArray}}
    <div class="example-wrapper">
      <Example
        index="3"
        shape="rectangle"
        :filterShadow="shadowFilterArray[2]"
        :boxShadow="shadowBoxArray[2]"
        :captionColor="captionColor"
      >
        High Elevation
      </Example>
    </div>
    <div class="example-wrapper">
      <Example
        index="2"
        shape="rectangle"
        :filterShadow="shadowFilterArray[1]"
        :boxShadow="shadowBoxArray[1]"
        :captionColor="captionColor"
      >
        Medium Elevation
      </Example>
    </div>
    <div class="example-wrapper">
      <Example
        index="1"
        shape="rectangle"
        :filterShadow="shadowFilterArray[0]"
        :boxShadow="shadowBoxArray[0]"
        :captionColor="captionColor"
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