<template>
    <!-- 더보기 메뉴 -->
    <div class="more-wrap">

        

        <div class="more-div">
            <button class="more-div-close">
                <span class="icon-x"></span>
            </button>

            <h2>
                <b>거제청년센터 이룸</b>
                전체메뉴
            </h2>

            <ul class="more-cont clearfix">

                <li v-for="(item, index) in menuData" :key="index">
                    <a :href="item.mainlink" class="more-mainmenu" v-html="item.maintxt"></a>

                    <ul class="more-submenu">
                        <li v-for="(subitem, subindex) in item.submenu" :key="subindex">
                            <a :href="subitem.sublink" v-html="subitem.subtxt"></a>
                        </li>
                    </ul>

                </li>

            </ul>

        </div>
    </div>
</template>

<script>
    import {
        computed
    } from 'vue'
    import {
        useStore
    } from 'vuex'

    export default {
        setup() {

            const store = useStore();
            const menuData = computed(() => store.getters.menuData);

            return {
                menuData
            }
        }
    }
</script>

<style>
    /* 더보기 메뉴 */
    .more-wrap {
        position: fixed;
        left: 0;
        top: 0;
        display: none;

        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99999;

        overflow-x: hidden;
        overflow-y: auto;
    }

    .more-div {
        position: relative;
        display: block;
        width: 90%;
        margin: 0 auto;
        margin-top: 180px;

        padding: 90px 100px;
        background-color: #fff;
    }

    .more-div-close {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        width: 70px;
        height: 70px;
        background: #2578de;
        border: 0;
        cursor: pointer;
    }

    .icon-x {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        display: block;
        width: 20px;
        height: 20px;
        transition: transform 0.5s;
    }

    .more-div-close:hover .icon-x {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .icon-x::before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
    }

    .icon-x::after {
        content: '';
        position: absolute;
        left: 9px;
        top: 0;
        display: block;
        width: 2px;
        height: 100%;
        background-color: #fff;
    }

    .more-div h2 {
        position: relative;
        display: block;
        font-size: 32px;
        color: #222;
        font-weight: 300;
        white-space: nowrap;

        margin-bottom: 50px;
    }

    .more-div h2 b {
        color: #2578de;
        font-weight: 700;
    }

    .more-cont {
        position: relative;
        display: block;

        font-size: 0;
    }

    .more-cont>li {
        position: relative;
        display: inline-block;
        width: calc(100% / 6);
        vertical-align: top;

        padding-right: 30px;
        margin-bottom: 85px;
    }

    .more-cont>li:nth-child(6n) {
        padding-right: 0;
    }

    .more-cont>li:last-child {
        margin-bottom: 0;
    }

    /* 포커스 유지 */
    .more-cont>li:hover .more-mainmenu {
        color: #2578de;
        border-bottom: 2px solid #2578de;
    }

    .more-cont a {
        white-space: nowrap;
    }

    .more-mainmenu {
        position: relative;
        display: block;
        font-size: 19px;
        color: #222;
        padding-bottom: 50px;
        border-bottom: 2px solid #444;
    }

    .more-submenu {
        position: relative;
        display: block;
        padding-top: 35px;
    }

    .more-submenu li {
        position: relative;
        display: block;
        margin-bottom: 20px;
    }

    .more-submenu li a {
        position: relative;
        display: block;
        font-size: 15px;
        color: #666;
    }

    .more-submenu li a:hover {
        color: #2578de;
    }

    /* 전체메뉴보기 pc 레이아웃 */
    /* 전체메뉴 보기 반응형 */
    @media all and (max-width: 1100px) {
        .more-submenu li a {
            font-size: 14px;
        }
    }

    @media all and (max-width: 1000px) {
        .more-wrap {
            display: none !important;
        }
    }

</style>