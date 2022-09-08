import axios from 'axios'
import {
    createStore
} from 'vuex'

// vuex 는 데이터를 보관하고, 
// 업데이트 한 이후에 
// 컴포넌트에서 필요로 한 데이터를 참조한다. 
// 공통 데이터 저장소(state)

export default createStore({
    // 데이터
    state: {
        menuDataArr: [],
        visualDataArr: [],
        galleryDataArr: [],
        infoDataArr: [],
        newsDataArr: []

    },

    // 외부 json 및 서버연동
    // axios 호출 시점
    // mutation 을 commit 으로 호출하면서 데이터를 전달한다.
    actions: {
        fetchGetMenu({commit}) {
            axios.get('./data/menu.json')
            .then(res => {
                // console.log(res);
                commit('UPDATE_MENU_DATA', res.data);
            })
            .catch(err => console.log(err))
        },
        fetchGetVisual({commit}) {
            axios.get('./data/visual.json')
            .then(res => {
                // console.log(res);
                commit('UPDATE_VISUAL_DATA', res.data);
            })
            .catch(err => console.log(err))
        },
        fetchGetGallery({commit}) {
            axios.get('./data/gallery.json')
            .then(res => {
                // console.log(res);
                commit('UPDATE_GALLERY_DATA', res.data);
            })
            .catch(err => console.log(err))
        },
        fetchGetInfo({commit}) {
            axios.get('./data/info.json')
            .then(res => {
                // console.log(res);
                commit('UPDATE_INFO_DATA', res.data);
            })
            .catch(err => console.log(err))
        },
        fetchGetNews({commit}) {
            axios.get('./data/news.json')
            .then(res => {
                // console.log(res);
                commit('UPDATE_NEWS_DATA', res.data);
            })
            .catch(err => console.log(err))
        }
    },

    // actions 로 부터 데이터를 전송받고 state 를 업데이트한다.
    mutations: {
        UPDATE_MENU_DATA(state, payload) {
            state.menuDataArr = payload
        },
        UPDATE_VISUAL_DATA(state, payload) {
            state.visualDataArr = payload
        },
        UPDATE_GALLERY_DATA(state, payload) {
            state.galleryDataArr = payload
        },
        UPDATE_INFO_DATA(state, payload) {
            state.infoDataArr = payload
        },
        UPDATE_NEWS_DATA(state, payload) {
            state.newsDataArr = payload
        }
        
    },

    // 외부 컴포넌트에서 state 를 참조할때 활용
    // state 가 바뀌면 즉시 반영을 위해서 외부 컴포넌트는 
    // computed 로 처리하는 것이 일반적.
    getters: {
        menuData(state) {
            return state.menuDataArr
        },
        visualData(state) {
            return state.visualDataArr
        },
        galleryData(state) {
            return state.galleryDataArr
        },
        infoData(state) {
            return state.infoDataArr
        },
        newsData(state) {
            return state.newsDataArr
        }
    }
})