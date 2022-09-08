<template>
    <!-- 상단 영역 -->
    <header class="header">

        <div class="inner">
            <a href="#" class="logo">
            </a>

            <div class="gnb">

                <ul class="menu">

                    <li v-for="(item, index) in menuData" :key="index">
                        <a :href="item.mainlink" class="mainmenu" v-html="item.maintxt"></a>

                        <ul class="submenu">
                            <li v-for="(subitem, subindex) in item.submenu" :key="subindex">
                                <a :href="subitem.sublink" v-html="subitem.subtxt"></a>
                            </li>
                        </ul>

                    </li>

                </ul>
            </div>

            <div class="member">

                <ul class="member-list clearfix">
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                </ul>

                <button class="member-more">더보기</button>

            </div>
        </div>

    </header>
</template>

<script>
    import {
        computed,
        onMounted
    } from 'vue'
    import {
        useStore
    } from 'vuex'

    import $ from 'jquery'

    export default {
        setup() {

            const store = useStore();
            const menuData = computed(() => store.getters.menuData);

            onMounted(() => {
                // .more-wrap 저장해서 활용하자.
                let more_wrap = $('.more-wrap');

                // .member-more 저장해서 활용하자.
                let member_more = $('.member-more');
                member_more.click(function () {
                    more_wrap.fadeIn(300);
                });
                // .more-div-close 를 활용하자.
                let more_div_close = $('.more-div-close');
                more_div_close.click(function () {
                    more_wrap.fadeOut(300);
                });

                // 더보기 메뉴 배경을 클릭하면 사라지기
                more_wrap.click(function () {
                    more_wrap.fadeOut(300);
                });

                $('.more-div').click(function (event) {
                    // 클릭 신호(이벤트) 전달 방지
                    event.stopPropagation();
                });

            });

            return {
                menuData
            }
        }
    }
</script>

<style>
    /* 상단 영역 */
    .header {
        position: relative;
        display: block;
        z-index: 9999;
    }

    .header .inner {
        height: 98px;
    }

    .logo {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 124px;
        height: 40px;
        background: url('@/assets/images/img_logo.png') no-repeat center;
        background-size: contain;
    }

    .gnb {
        position: relative;
        display: block;
    }

    .menu {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;

        display: block;

        white-space: nowrap;
        font-size: 0;
    }

    .menu>li {
        position: relative;
        display: inline-block;
    }

    .mainmenu {
        position: relative;
        display: block;
        height: 98px;
        text-align: center;
        line-height: 98px;
        padding: 0 18px;
        font-size: 19px;
        color: #333;
    }

    .submenu {
        position: absolute;
        left: 50%;
        top: 70px;
        transform: translateX(-50%) translateY(10px);
        display: block;
        visibility: hidden;
        min-width: 182px;
        opacity: 0;
        transition: all 0.3s;

        background: #fff;
        border: 1px solid rgba(255, 255, 255, .3);
        border-radius: 3px;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);

    }

    .menu>li:hover .submenu {
        z-index: 999;
        visibility: visible;
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    .submenu li {
        position: relative;
        display: block;
    }

    .submenu li a {
        position: relative;
        display: block;

        text-align: center;
        white-space: nowrap;
        font-size: 14px;
        color: #333;
        font-weight: 400;
        line-height: 46px;
        border-bottom: 1px solid #eaeaea;
    }

    .submenu li:last-child a {
        border: none;
    }

    .menu>li:hover .mainmenu {
        color: #2578de;
    }

    .menu a:hover {
        color: #2578de;
    }

    .member {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
    }


    .member-list {
        position: relative;
        display: block;
        float: left;
    }

    .member-list li {
        position: relative;
        display: block;
        float: left;
        margin-top: 12px;
        margin-right: 15px;
    }

    .member-list li a {
        position: relative;
        display: block;
        font-size: 14px;
        color: #666;

    }


    .member-more {
        position: relative;
        display: block;
        width: 45px;
        height: 45px;

        float: left;
        font-size: 0;
        background: url('@/assets/images/img_allmenu.png') no-repeat center;
        background-size: cover;

        border: 0;
        cursor: pointer;
    }


    /* 상단 PC 버전 */
    /* 1400 보다 작은 경우 반응형 */
    @media all and (max-width:1400px) {
        .header .inner {
            height: 90px;
        }

        .logo {
            width: 123px;
            height: 40px;
        }

        .menu {
            left: 60%;
            top: 28px;
        }

        .mainmenu {
            font-size: 17px;
            line-height: 65px;
            height: 65px;
        }

        .submenu {
            top: 60px;
        }

        .member {
            top: 20%;
        }

        .member-more {
            width: 35px;
            height: 35px;
            border-radius: 100%;
            margin-top: 5px;
        }

    }

    @media all and (max-width: 1000px) {


        .header {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 70px;
            background-color: #fff;
        }

        .header .inner {
            width: 97%;
            height: 70px;
        }

        .gnb {
            display: none;
        }

        .member {
            display: none;
        }
    }
</style>