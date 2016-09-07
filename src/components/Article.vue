<template>
	<ul>
		<li class='list'>
			<a href="#" class="author"><span>{{ articles.author }}</span></a><span class="time"> - {{ articles.time}}</span>
			<a href="#"><h2>{{ articles.title }}</h2></a>
			<span class="small-text">阅读 {{articles.read}} -</span>
			<span class="small-text">评论 {{articles.comment}} -</span>
			<span class="small-text">喜欢 {{articles.like}} -</span>
			<span class="small-text">打赏 {{articles.pay}}</span>
			<span class="image"><img :src = "articles.src"></span>
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