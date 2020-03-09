<template>
  <div>
      <div style="width:48%;height:126px;margin:0 auto">
          <el-input v-model="input" placeholder="请输入内容" style="display:inline-block;width:87% !important;margin:24px 0px 16px"></el-input>
          <el-button type="primary" style="width:12%" @click="search">搜索</el-button>
          <div>
            <el-radio v-for="(item,index) in options" :key=index v-model=radio :label=item.label></el-radio> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
          input:'',
          radio:'全部',
          options:[
        {
          label: "全部",
          value: "all"
        },
        {
          label: "词条",
          value: "entry"
        },
        {
          label: "文库",
          value: "library"
        },
        {
          label: "慕课",
          value: "mooc"
        },
        {
          label: "视频",
          value: "video"
        }
          ]
    }
},
methods:{
    search(){
        if(this.radio == "全部"){
            this.$router.push("/searchpage?label=" +this.radio +"&value=" +  this.input)
        }
        else if(this.radio == "词条"){
            this.$router.push("/searchpage?&label=" +this.radio +"&value=" +  this.input)
        }
        else if(this.radio == "文库"){
            this.$router.push("/librarypage?&label=" +this.radio +"&value=" +  this.input)
        }
        else if(this.radio == "慕课"){
            this.$router.push("/moocpage?&label=" +this.radio +"&value=" +  this.input)
        }else{
            this.$router.push("/videopage?&label=" +this.radio +"&value=" +  this.input)
        }
        
    }
}
}
</script>

<style scoped>

</style>