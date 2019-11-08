<template>
  <div class="wrap">
      <header></header>
      <main>
          <router-view></router-view>
      </main>
      <footer>
            <router-link to="/home/my">我的</router-link>
          <router-link to="/home/quanzi">圈子</router-link>
      </footer>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 1rem;
        background: #eee;
    }
    main{
        flex: 1;
        overflow: hidden;
        overflow: auto;
    }
    footer{
        width: 100%;
        height: 1rem;
        background: #eee;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            width: 50%;
            height: 100%;
            text-align: center;
            line-height: 1rem;
            font-size: 16px;
        }
    }
    a:hover{
        background: #f00;
    }
</style>