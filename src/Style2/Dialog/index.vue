<template>
  <el-dialog :title="service.title" :visible.sync="service.visible">
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="service.close()">取 消</el-button>
      <el-button type="primary" @click="service.submit()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    service: Object,
  },
};
</script>

<style>
</style>