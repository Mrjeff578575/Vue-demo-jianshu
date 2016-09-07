import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	articles:{
		author:'徐丹妮',
		title:'我不是学霸，只是比你努力一点而已',
		time:'大约6小时之前',
		read:'8498',
		comment:'248',
		like:'2342',
		pay:'2',
		src:'../../static/vue-demo-hot.jpg'
	},
	texts:{
		Jan:{
			title:'给你90天，成为不一样的自己',
			content_1:"如果你应付不了现在的生活和工作",
			content_2:"无论你走到哪里，",
			content_3:"无论你换了什么工作，什么公司，",
			content_4:"都无济于事。",
			content_5:"因为你根本没想让自己成熟起来，",
			content_6:"想让变的更优秀也不过是一句口头禅。",
			author:'',
			bg:'url(../../static/bonus_1.jpg)'
		},
		Feb:{
			title:'使你更有思想的20本书',
			content_1:"真正伟大的当代文学，",
			content_2:"正如人们借由狄更斯来了解十九世纪的英国，",
			content_3:"后人也可以通过《自由》来了解",
			content_4:"二十一世纪初期的美国。",
			content_5:"因为你根本没想让自己成熟起来，",
			content_6:"想让变的更优秀也不过是一句口头禅。",
			author:'',
			bg:'url(../../static/bonus_2.jpg)'
		},
		Mar:{
			title:'无感是最舒适的爱情',
			content_1:"爱情原本就是个很娇气的东西，",
			content_2:"它经不起太多的矫情，你死我活和无理取闹，",
			content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",
			content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
			content_5:"才是爱情最原本的样子。",
			content_6:"当她不再刻意的感受他的存在，",
			author:'',
			bg:'url(../../static/bonus_3.jpg)'
		}
	},
	show:'hot'
}

const mutations = {
	DISPLAY_ARTICLE (state, show) {
		const article = {
			hot: {
				author:'徐丹妮',
				title:'我不是学霸，只是比你努力一点而已',
				time:'大约6小时之前',
				read:'8498',
				comment:'248',
				like:'2342',
				pay:'2',
				src:'../../static/vue-demo-hot.jpg'
			},
			new: {
				author:'阿俊',
				title:'Learn by doing',
				time:'大约6小时之前',
				read:'3398',
				comment:'258',
				like:'232',
				pay:'88',
				src:'../../static/vue-demo-new.jpg'
			},
			daily:{
				author:'尸叔',
				title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
				time:'大约2小时之前',
				read:'3750',
				comment:'70',
				like:'190',
				pay:'0',
				src:'../../static/vue-demo-daily.jpg'
			}
		}
		state.show = show
		state.articles = article[show]		
	},
	UPDATE_ARTICLE () {
		console.log(1)
	}
}
export default new Vuex.Store({
	state,
	mutations
})