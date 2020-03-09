<template>
  <div class="header">
    <div class="h_left">
      军种信息网
    </div>
    <div class="h_right">
      <i class="el-icon-bell" style="margin:16px 28px 24px 0;font-size:21px"></i>
      <i class="el-icon-user" style="display:inline-block;width:26px;height:26px;text-align:center;line-height:26px;border-radius:50%;border:1px solid transparent;background:#8cc5ff;margin:16px 6px 24px 0;font-size:22px"></i>
      <span class="user" style="margin:25px 29px 21px 0;line-height:22px;font-size:16px">Admin</span>     
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.header{
  width: 1920px;
  height: 60px;
}
.h_left{
  float: left;
  width: 450px;
  height: 24px;
  margin: 21px 0 19px 34px; 
  font-family:"微软雅黑";
  font-size: 20px;
  font-weight: 800;
  color: #409EFF;
}
.h_right{
  float: right;
}
.el-icon-bell:hover{
  color: #409EFF;
  cursor: pointer;
}
.el-icon-user,.user{
  cursor: pointer;
}
.el-icon-user:hover{
  color:#d9ecff
}
.user:hover{
  color: #409EFF;
}
</style>
