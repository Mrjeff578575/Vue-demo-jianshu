export const displayArticle = ({ dispatch },show) => {
	dispatch('DISPLAY_ARTICLE',show)
}

export const displayTopic = ({ dispatch },show) => {
	dispatch('DISPLAY_TOPIC',show)
} 

export const sortContent = ({ dispatch },method) => {
	dispatch('SORTCONTENT',method)
}
export const changeLogin = ({ dispatch },loginway) => {
	dispatch('CHANGELOGIN',loginway)
}