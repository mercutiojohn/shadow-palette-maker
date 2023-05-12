<template>
  <div>
    <el-button type="text" @click="openDialog">点击打开 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="hideDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
</style>