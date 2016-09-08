<template>
	<ul>
		<li class='list' v-for="article in articles">
			<p class="list-top"><a href="#" class="author"><span>{{ article.author }}</span></a><span class="time"> - {{ article.time}}</span></p>
			<h2 class="title"><a href="#">{{ article.title }}</a></h2>
			<span class="small-text">阅读 {{article.read}} -</span>
			<span class="small-text">评论 {{article.comment}} -</span>
			<span class="small-text">喜欢 {{article.like}} -</span>
			<span class="small-text">打赏 {{article.pay}}</span>
			<span class="image" 
				:style="{background:article.src,backgroundSize:'100%',backgroundRepeat:'no-repat'}">
			</span>
		</li>
	</ul>
</template>
<script>
	export default {
		vuex: {
			getters: {
				articles: state => state.articles
			}
		}
	}
</script>
<style>
	.list{
    	margin-left: 30px;
    	margin-top: 17px;
   	 	margin-bottom: 17px;
   	 	padding-bottom: 17px;
   		width: calc(100% - 30px);
    	border-bottom:1px dashed #efefef;
		border-bottom: 1px dashed #d9d9d9;
	}
	.list-top{
		padding-top: 10px; 
	}
	.list .title a{
		margin-top: 10px;
    	margin-bottom: 10px;
    	margin-left: 0;
    	display: inherit;
    	font-size: 18px;
    	font-weight: bold;
    	line-height: 1.5;
	}
</style>