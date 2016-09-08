import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import home from './components/Home.vue'
import topic from './components/Topic.vue'
import article from './components/Article.vue'
import bonus from './components/Bonus.vue'
import login from './components/Login.vue'
import topic_article from './components/Topic_article.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
	'/home': {
		component: home,
		subRoutes: {
			'/article': {
				component: article
			}
		}
	},
	'/topic': {
		component: topic,
		subRoutes: {
			'topic_article': {
				component: topic_article
			}
		}
	},
	'/bonus': {
		component: bonus
	},
	'/login': {
		component: login
	}
})

router.redirect({
	'*':'/home/article'
})

router.start(App,'app')
router.go('/home/article')