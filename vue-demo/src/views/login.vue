<template>
  <div class="logbox">
      <div class="header">
          <p>圈子登录</p>
      </div>
    <div class="main">
        <input type="text" placeholder="用户名" v-model="userName" @blur="checkUserName">
        <input type="text" placeholder="密码" v-model="userPwd">
        <button @click="login">登录</button>
        <a href="register" class="zhu">没有账号,快速注册</a>
    </div>
  </div>
</template>

<script>
import {login} from "../service/my"
export default {
    data() {
        return {
            userName:"",
            userPwd:""
        }
    },
    methods: {
        async login(){
            let {userName,userPwd}=this
            console.log(this);
            let result = await login({userName,userPwd});
            console.log(result)
            if (result && result.data.code === 1){
                // 登陆完成，执行后续跳转逻辑
                window.sessionStorage.setItem('isLogin', 'true');
                this.$router.replace('/');
            }
            // this.$toast(result.data.msg);
            alert(result.data.msg)
        },
         checkUserName(){
            if (!/\w{3,20}/.test(this.userName)){
                // this.$toast('请输入正确的用户名');
                alert('请输入正确的用户名')
            }
        }
    },
};
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.logbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 0.8rem;
  p {
    width: 100%;
    height: 0.8rem;
    font-size: 16px;
    text-align: center;
    line-height: .8rem;
  }
}
.main{
    flex: 1;
    overflow: hidden;
    overflow: auto;
}
input{
    width: 90%;
    height: .6rem;
    margin-left: 5%;
}
button{
    width: 90%;
    height: .6rem;
    margin-left: 5%;
    border-radius: .5rem;
    background: #F76968;
}
.zhu{
    font-size: 16px;
    margin-left: 5%;
}
</style>