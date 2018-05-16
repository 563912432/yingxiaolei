<template>
  <div class="pinyinka">
    <v-header></v-header>
    <div class="home" @click="toHome">
      <img src="../assets/home1.png" alt="">
    </div>
    <div class="content">
      <ul v-loading.body="loading">
        <li v-for="(item, index) in msg" :key="item.id"
            :class="[index % 2 === 0?'grey':'white']"
            :title="item.title"
            @click="click(item.id)">
          <i class="el-icon-arrow-right" style="font-weight: bold;color: #adadad"></i><span class="space">{{ item.title }}</span>
        </li>
      </ul>
      <div class="img-container" @click="videoPlay">
        <img src="../assets/pyk.png" alt="">
      </div>
      <div class="img-container" @click="videoPlay1">
        <img src="../assets/szk1.png" alt="">
      </div>
      <div class="img-container" @click="videoPlay2">
        <img src="../assets/szk2.png" alt="">
      </div>
    </div>
    <div>
      <mu-dialog :open="dialog" @close="close">
        <div>完整版需购买产品后开通！</div>
        <div class="sail"><a href="http://shop111181.top/OmTaT0">点右上角，分享到微信朋友圈，凭朋友圈截图，立享3元店铺无门槛优惠券</a></div>
        <mu-flat-button label="确定" slot="actions" style="color: #a44902;" @click="close"/>
      </mu-dialog>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from '@/components/pyFooter'
import header from '@/components/pyHeader'

const Host = '/Api/Pinyin/'

export default {
  name: 'pinyinka',
  components: {
    'v-footer': footer,
    'v-header': header
  },
  data () {
    return {
      msg: '',
      isParent: true,
      loading: false,
      dialog: false
    }
  },
  mounted () {
    this.loading = true
    let url = Host + 'sailPinYin'
    this.post(url, '', res => {
      this.loading = false
      if (res.status) {
        this.msg = res.info
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
    click (el) {
      let formdata = new FormData()
      formdata.append('cid', el)
      this.loading = true
      let url = Host + 'sailContent'
      this.post(url, formdata, res => {
        this.loading = false
        if (res.status) {
          this.$router.push({path: '/pyList/' + el})
        } else {
          this.dialog = true
        }
      })
    },
    toHome () {
      this.$router.push({'path': '/'})
    },
    videoPlay () {
      this.$router.push({path: '/introduce/dbadf91f040cf6660e82900b204e9800_d'})
    },
    videoPlay1 () {
      this.$router.push({path: '/introduce/dbadf91f04386b8b072869066b788079_d'})
    },
    videoPlay2 () {
      this.$router.push({path: '/introduce/dbadf91f04bed81ee5431384c86abdb0_d'})
    },
    close () {
      this.dialog = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pinyinka {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .pinyinka .home{
    position: absolute;
    top: 45px;
    right: 10px;
    z-index: 2;
    background-color:#a44902 ;
    border-radius: 25px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pinyinka .home img{
    width: 30px;
    height: 30px;
  }
  .pinyinka .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-top: 5px;
    z-index: 0;
    color: #000507;
  }

  .pinyinka .content ul {
    margin: 0;
    padding: 0;
  }

  .pinyinka .content ul li {
    padding: 10px;
  }

  .pinyinka .content .grey {
    background-color: #e68540;
    margin: 3px;
    border-radius: 3px;
  }

  .pinyinka .content .white {
    background-color: #ffffff;
    margin: 3px;
    border-radius: 3px;
  }
  .pinyinka .img-container {
    width: 50%;
    height: auto;
    text-align: center;
    align-self: center;
    background-color: transparent;
  }

  .pinyinka .img-container img {
    width: 100%;
    height: auto;
  }
  .sail a{
    color: red;
    text-decoration: underline;
  }
</style>
