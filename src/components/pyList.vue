<template>
  <div class="pyList">
    <v-header></v-header>
    <div class="content" v-loading.body="loading">
      <div class="menu">
        <router-link to="/fx" class='menu-title'><img src="../assets/back.png" alt="返回"> 返回
        </router-link>
        <span>{{ category }}</span>
        <router-link to="/fx" class='menu-title'><img src="../assets/home.png" alt="首页"> 首页</router-link>
      </div>
      <div class="wrapper">
        <el-row :gutter="10">
          <el-col :span="6" v-for="value in info" :key="value.id" class="w-col">
            <div class="w-content" @click="detail($event)">
              <el-card class="box-card" v-html="value.title" :id="value.id" :cid="value.cid">
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from '@/components/pyFooter'
import header from '@/components/pyHeader'

const Host = '/Api/Pinyin/'
export default {
  name: 'pyList',
  components: {
    'v-footer': footer,
    'v-header': header
  },
  data () {
    return {
      category: '',
      cid: '',
      title: '',
      info: '',
      loading: false
    }
  },
  created () {
    let formdata = new FormData()
    formdata.append('cid', this.$route.params.cid)
    this.loading = true
    let url = Host + 'category'
    this.post(url, formdata, res => {
      this.loading = false
      if (res.status) {
        this.category = res.info['category']
        this.info = res.info['list']
      } else {
        console.log(res.info)
      }
    })
  },
  methods: {
    post (url, data, fn) { // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
      let obj = new XMLHttpRequest()
      obj.open('POST', url, true)
      obj.onreadystatechange = function () {
        if (+obj.readyState === 4 && (+obj.status === 200 || +obj.status === 304 || +obj.status === 0)) { // 304未修改
          fn.call(this, JSON.parse(obj.responseText))
        }
      }
      obj.send(data)
    },
    detail (el) {
      let id = el.target.getAttribute('id')
      let cid = el.target.getAttribute('cid')
      this.$router.push({path: '/pyDetail/' + id + '/' + cid})
    }
  }
}
</script>
<style scoped>
  @font-face {
    /* font-properties */
    font-family: pinyin;
    src: url('/static/font/GBPinyinokB.ttf')
  }

  .pyList {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .pyList .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .pyList .content .menu {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 15px;
    color: #fff;
    background-color: #e68540;
  }

  .pyList .content .menu .menu-title {
    font-size: 13px;
    color: #fff;
    text-decoration: none;
  }

  .pyList .content .menu .menu-title img {
    width: 13px;
    height: 13px;
    margin-bottom: -1px;
  }

  .pyList .content .wrapper {
    font-family: 'pinyin';
    flex: 1;
    overflow-y: auto;
    text-align: center;
    padding: 0 15px 10px 15px;
  }

  .pyList .content .wrapper .w-col {
    padding: 5px 0 0 0;
  }

  .pyList .content .wrapper .w-content {
    font-size: 35px;
    color: #333333;
    font-weight: 400;
  }

  .pyList .content .wrapper .w-content .box-card {
    border-color: #e68540;
    box-shadow: 1px 2px 2px #d47c3c;
    margin-top: 10px;
    padding: 13px 0;
  }
</style>
