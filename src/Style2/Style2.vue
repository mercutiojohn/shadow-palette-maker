<template>
  <div>
    <el-button type="text" @click="openDialog">点击打开 Dialog</el-button>
    text:{{ text }}

    <Dialog :service="dialog">
      <el-input v-model="editText" type="text" />
    </Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog";
import DialogService from "./Dialog/service";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      text: "",
      editText: "",
      dialog: new DialogService({
        title: "信息框",
      }),
    };
  },
  methods: {
    openDialog() {
      this.editText = this.text;
      this.dialog.open(() => {
        this.text = this.editText;
        this.dialog.close();
      });
    },
  },
};
</script>

<style>
</style>