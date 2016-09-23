import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  articles: {
    fir: {
      author: '徐丹妮',
      title: '我不是学霸，只是比你努力一点而已',
      time: '大约6小时之前',
      read: '8498',
      comment: '248',
      like: '2342',
      pay: '2',
      src: 'url(../../static/vue-demo-hot.jpg'
    },
    sec: {
      author: '徐妮',
      title: '我不是学霸，只是比你努力一点而已',
      time: '大约6小时之前',
      read: '8498',
      comment: '248',
      like: '2342',
      pay: '2',
      src: 'url(../../static/vue-demo-hot.jpg'
    },
    thi: {
      author: '徐双妮',
      title: '我不是学霸，只是比你努力一点而已',
      time: '大约6小时之前',
      read: '8498',
      comment: '248',
      like: '2342',
      pay: '2',
      src: 'url(../../static/vue-demo-hot.jpg'
    }
  },
  texts: {
    Jan: {
      title: '给你90天，成为不一样的自己',
      content_1: "如果你应付不了现在的生活和工作",
      content_2: "无论你走到哪里，",
      content_3: "无论你换了什么工作，什么公司，",
      content_4: "都无济于事。",
      content_5: "因为你根本没想让自己成熟起来，",
      content_6: "想让变的更优秀也不过是一句口头禅。",
      author: '',
      bg: 'url(../../static/bonus_1.jpg)'
    },
    Feb: {
      title: '使你更有思想的20本书',
      content_1: "真正伟大的当代文学，",
      content_2: "正如人们借由狄更斯来了解十九世纪的英国，",
      content_3: "后人也可以通过《自由》来了解",
      content_4: "二十一世纪初期的美国。",
      content_5: "",
      content_6: "",
      author: '',
      bg: 'url(../../static/bonus_2.jpg)'
    },
    Mar: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_3.jpg)'
    },
    Apr: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_4.jpg)'
    },
    May: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_5.jpg)'
    },
    Jun: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_6.jpg)'
    },
    Jul: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_7.jpg)'
    },
    Aug: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_8.jpg)'
    },
    Sep: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_9.jpg)'
    },
    Oct: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_10.jpg)'
    },
    Nov: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_11.jpg)'
    },
    Dec: {
      title: '无感是最舒适的爱情',
      content_1: "爱情原本就是个很娇气的东西，",
      content_2: "它经不起太多的矫情，你死我活和无理取闹，",
      content_3: "也经不起任何的伪装，刻意讨好和忍辱负重。",
      content_4: "当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",
      content_5: "才是爱情最原本的样子。",
      content_6: "当她不再刻意的感受他的存在，",
      author: '',
      bg: 'url(../../static/bonus_12.jpg)'
    }
  },
  topics: {
    fir: {
      img: 'url(../../static/topic_1.jpg',
      title: '游戏',
      par: '玩转简书的第一步，从这个专题开始。\
				  想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
				  如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
				  投稿必须原创。如果发现有非...',
      number: '97233',
      concern: '121.7',
      keys: '故事、连载',
      time: '20160620'
    },
    sec: {
      img: 'url(../../static/topic_3.jpg',
      title: '诗',
      par: '诗，让你感受自己的心灵。\
				 专题主编：苏锦年 投稿须知：\
				 1.本专题收录古诗、词、现代诗以及诗词点评及指导。\
                 2.内容必须为原创，切勿用其他诗人的诗句。\
                 3.文章排版整洁，注意...',
      number: '35420',
      concern: '146.6',
      keys: '诗',
      time: '20160630'
    }
  },
  show: 'hot',
  show_2: 'hot'
}

const mutations = {
  DISPLAY_ARTICLE (state, show) {
    const article = {
      hot: {
        fir: {
          author: '徐丹妮',
          title: '我不是学霸，只是比你努力一点而已',
          time: '大约6小时之前',
          read: '8498',
          comment: '248',
          like: '2342',
          pay: '2',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        sec: {
          author: '徐妮',
          title: '我不是学霸，只是比你努力一点而已',
          time: '大约6小时之前',
          read: '8498',
          comment: '248',
          like: '2342',
          pay: '2',
          src: 'url(../../static/vue-demo-hot.jpg)'
        },
        thi: {
          author: '徐双妮',
          title: '我不是学霸，只是比你努力一点而已',
          time: '大约6小时之前',
          read: '8498',
          comment: '248',
          like: '2342',
          pay: '2',
          src: 'url(../../static/vue-demo-hot.jpg)'
        }
      },
      new: {
        fir: {
          author: '阿俊',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        sec: {
          author: '阿猫',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        },
        thi: {
          author: '阿狗',
          title: 'Learn by doing',
          time: '大约6小时之前',
          read: '3398',
          comment: '258',
          like: '232',
          pay: '88',
          src: 'url(../../static/vue-demo-new.jpg)'
        }
      },
      daily: {
        fir: {
          author: '尸叔',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        },
        sec: {
          author: '尸爸',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        },
        thi: {
          author: '尸姐',
          title: '如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
          time: '大约2小时之前',
          read: '3750',
          comment: '70',
          like: '190',
          pay: '0',
          src: '../../static/vue-demo-daily.jpg'
        }
      }
    }
    state.show = show
    state.articles = article[show]
  },
  DISPLAY_TOPIC (state, show) {
    const topic = {
      hot: {
        fir: {
          img: 'url(../../static/vue-demo-hot.jpg',
          title: '游戏',
          par: '玩转简书的第一步，从这个专题开始。\
				  		想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
				  		如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
				  		投稿必须原创。如果发现有非...',
          number: '97233',
          concern: '121.7k',
          keys: '故事、连载'
        },
        sec: {
          img: 'url(../../static/topic_3.jpg',
          title: '诗',
          par: '诗，让你感受自己的心灵。\
				 	专题主编：苏锦年 投稿须知：\
				 	1.本专题收录古诗、词、现代诗以及诗词点评及指导。\
                 	2.内容必须为原创，切勿用其他诗人的诗句。\
                    3.文章排版整洁，注意...',
          number: '35420',
          concern: '146.6k',
          keys: '诗',
          time: '20160630'
        }
      },
      recommend: {
        fir: {
          img: 'url(../../static/topic_1.jpg',
          title: '游戏',
          par: '玩转简书的第一步，从这个专题开始。\
				  		 想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
				  		 如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
				  		 投稿必须原创。如果发现有非...',
          number: '97233',
          concern: '121.7',
          keys: '故事、连载',
          time: '20160620'
        },
        sec: {
          img: 'url(../../static/topic_3.jpg',
          title: '诗',
          par: '诗，让你感受自己的心灵。\
				 		专题主编：苏锦年 投稿须知：\
				 		1.本专题收录古诗、词、现代诗以及诗词点评及指导。\
                 		2.内容必须为原创，切勿用其他诗人的诗句。\
                 		3.文章排版整洁，注意...',
          number: '35420',
          concern: '146.6',
          keys: '诗',
          time: '20160630'
        },
        thi: {
          img: 'url(../../static/topic_2.jpg',
          title: '@IT互联网',
          par: '@IT 专题 由 IT大分类，转定位于IT·互联网行业观察与思考，数码产品极客体验。\
					主编：向右奔跑 http://www.jianshu.com/users/54b5900965ea...',
          number: '8409',
          concern: '111.1',
          keys: '互联网、产品、科技',
          time: '20160625'
        }
      }
    }
    state.show_2 = show
    state.topics = topic[show]
  },
  SORTCONTENT (state, method){
    const temp = state.topics
    let arr = []
    let Arr = objClone(state.topics)
    switch (method) {
      case 'time':
        arr = [temp.fir.time, temp.sec.time, temp.thi.time].sort()
        break
      case 'concern':
        arr = [temp.fir.concern, temp.sec.concern, temp.thi.concern].sort()
        break
      default:
        break
    }
    for (let keys in state.topics) {
      if (Arr[keys][method] == arr[2]) {
        console.log(Arr[keys][method])
        state.topics.fir = Arr[keys]
      }
      else if (Arr[keys][method] == arr[1]) {
        state.topics.sec = Arr[keys]
      }
      else if (Arr[keys][method] == arr[0]) {
        console.log(Arr[keys][method])
        state.topics.thi = Arr[keys]
      }
    }
    function objClone(myObj) {
      if (typeof(myObj) != 'object') return myObj;
      if (myObj == null) return myObj;
      var myNewObj = new Object();
      for (var i in myObj) {
        myNewObj[i] = objClone(myObj[i]);
      }
      return myNewObj;
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
