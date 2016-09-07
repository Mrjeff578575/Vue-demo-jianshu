<template>
<div>
  <div class="showbar">
    <div class="cover-image_2"></div>
    <div class="text">
      <h1>专题</h1>
      <h3>让思想汇聚，流传</h3>
      <p>专题内容又多个作者提供</p>
      <a href="#"><i class="fa fa-pencil"></i>&nbsp;&nbsp;新建专题</a>
    </div>
  </div>
  <div class="article-page">
    <nav>
      <span class="search clearfloat">
        <span class="input">
          <input type="search" placeholder="搜索">
        </span>
        <span class="search-icon"><i class="fa fa-search"></i></span>
      </span>       
    </nav>
    <div class="article-list">
      <ul class="btn-group">
        <li :class="{active: show === 'hot'}">
          <a @click="show = 'hot'"
             v-link="'/home/article'" 
          >热门</a></li>
        <li :class="{active: show === 'recommend'}">
          <a @click="show = 'recommend'"
             v-link="'/home/article'" 
          >推荐</a></li>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        show: 'hot'
      }
    }
  }
</script>