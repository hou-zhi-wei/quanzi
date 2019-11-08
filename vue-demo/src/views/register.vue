<template>
  <div class="logbox">
    <div class="header">
      <p>圈子注册</p>
    </div>
    <div class="main">
      <input type="text" placeholder="用户名" v-model="userName" />
      <input type="password" placeholder="密码" v-model="userPwd" />
      <button @click="register">注册</button>
    </div>
  </div>
</template>

<script>
import { register } from "../service/my";
export default {
  data() {
    return {
      userName: "",
      userPwd: ""
    };
  },
  methods: {
    async register() {
     
      let { userName, userPwd } = this;
      let result = await register({userName, userPwd});
      console.log(result, "result");
      if (result && result.data.code === 0) {
        alert(result.data.msg);
      } else {
        window.history.back();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 0.8rem;
  background: #eee;
  p {
    width: 100%;
    height: 0.8rem;
    font-size: 16px;
    text-align: center;
    line-height: 0.8rem;
  }
}
input {
  width: 90%;
  height: 0.6rem;
  margin-left: 5%;
}
button {
  width: 90%;
  height: 0.6rem;
  margin-left: 5%;
  border-radius: 0.5rem;
  background: #f76968;
}
</style>