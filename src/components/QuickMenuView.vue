<template>
    <!-- 퀵메뉴 영역 -->
    <section class="quick-menu">
        <div class="inner">
            <ul class="quick-menu-list clearfix">
                <li>
                    <a href="#">
                        <img :src="require('@/assets/images/img_icon01.svg')" alt="">
                        청년정책검색
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img :src="require('@/assets/images/img_icon02.svg')" alt="">
                        청년뉴스
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img :src="require('@/assets/images/img_icon03.svg')" alt="">
                        공간예약
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img :src="require('@/assets/images/img_icon04_new.png')" alt="">
                        구인·구직등록
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img :src="require('@/assets/images/img_icon05_new.png')" alt="">
                        내꿈공간
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    /* 퀵메뉴 영역 */
    .quick-menu {
        position: relative;
        display: block;
        background-color: #f2f4f7;
        padding: 15px 0;
    }

    .quick-menu .inner {}

    .quick-menu-list {
        position: relative;
        display: block;
    }

    .quick-menu-list li {
        position: relative;
        display: block;
        width: 20%;
        float: left;
        border-right: 1px solid #d9dbde;
    }

    .quick-menu-list li:last-child {
        border-right: 0;
    }

    .quick-menu-list li a {
        position: relative;
        display: block;
        line-height: 85px;
        text-align: center;
        font-size: 17px;
        color: #333;
        font-weight: 500;
        transition: transform 0.3s;
        white-space: nowrap;
    }

    .quick-menu-list li a img {
        width: auto;
        height: 58px;
        margin-right: 20px;
    }

    .quick-menu-list li a:hover {
        transform: translateX(-8%);
    }

    /* 퀵메뉴 PC 버전 */
    /* 퀵메뉴 반응형 버전 */
    @media all and (max-width:990px) {

        .quick-menu {
            padding: 0;
        }

        .quick-menu-list li:nth-child(1),
        .quick-menu-list li:nth-child(2),
        .quick-menu-list li:nth-child(3) {
            width: calc(100% / 3);
            border-bottom: 1px solid #d9dbde;
        }

        .quick-menu-list li:nth-child(4),
        .quick-menu-list li:nth-child(5) {
            width: 50%;
        }
    }

    @media all and (max-width: 760px) {
        .quick-menu-list li a {
            line-height: 60px;
            font-size: 16px;
        }

        .quick-menu-list li a img {
            height: 35px;
        }
    }

    @media all and (max-width: 640px) {
        .quick-menu-list li {
            width: 50% !important;
            border-bottom: 1px solid #d9dbde;
        }

        .quick-menu-list li:last-child {
            border-bottom: none;
        }
    }
</style>