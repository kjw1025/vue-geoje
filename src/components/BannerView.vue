<template>
    <!-- 배너 영역-->
    <section class="banner">
        <div class="inner clearfix">

            <div class="banner-left">
                <h2>배너모음</h2>
                <div class="banner-control">
                    <button class="sw-banner-prev">
                        <i class="fas fa-angle-left"></i>
                    </button>
                    <button class="sw-banner-pause">
                        <span class="material-icons" v-on:click="controlSlide">
                            {{slideState}}
                        </span>
                    </button>
                    <button class="sw-banner-next">
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div class="banner-right">

                <Swiper class="sw-banner" :modules="modules" :autoplay="{
                        delay: 1000,
                        disableOnInteraction: false
                    }" :slides-per-view="6" :space-between="20" :loop="true" :navigation="{
                        prevEl: '.sw-banner-prev',
                        nextEl: '.sw-banner-next'
                    }"
                    @swiper="swBanner"
                >

                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-0"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-1"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-2"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-3"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-4"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-5"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-6"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-7"></a></SwiperSlide>
                    <SwiperSlide class="swiper-slide"><a href="#" class="banner-8"></a></SwiperSlide>

                </Swiper>

            </div>
        </div>
    </section>
</template>

<script>
    import {
        ref
    } from 'vue';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue'
    import 'swiper/css'
    import {
        Autoplay,
        Navigation
    } from 'swiper'
    import "swiper/css/navigation";

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {


            // Swiper를 참조한다.
            const slide = ref(null);
            const swBanner = (swiper) => {
                // Swiper 개체를 저장한다.
                slide.value = swiper;
            }
            // Swiper의 start, stop 을 제어한다.
            const slideState = ref('pause');
            const controlSlide = () => {

                if (slide.value.autoplay.running) {
                    // 만약에 슬라이더의 running == true
                    slide.value.autoplay.stop();
                    // 구글 아이콘을 변경해 주기 위한 글자
                    slideState.value = 'play_arrow';
                } else {
                    // 만약에 슬라이더의 running == false
                    slide.value.autoplay.start();
                    // 구글 아이콘을 변경해 주기 위한 글자
                    slideState.value = 'pause';
                }
                // console.log(slide.value.autoplay)
            }


            return {
                modules: [Autoplay, Navigation],
                swBanner,
                controlSlide,
                slideState

            }
        }
    }
</script>

<style>
    /* 배너 영역 */
    .banner {
        position: relative;
        display: block;
        background-color: #f6f6f6;
        padding: 25px 0;
    }

    .banner-left {
        position: relative;
        display: block;
        float: left;
        width: 170px;
        margin-top: 13px;
    }

    .banner-left h2 {
        position: relative;
        display: block;
        font-size: 20px;
        color: #3d3d3d;
        font-weight: 600;
    }

    .banner-control {
        position: absolute;
        right: 0;
        top: 3px;
        display: block;
        width: 73px;
        height: 25px;
        border: 1px solid #ececec;
    }

    .sw-banner-prev {
        position: relative;
        display: block;
        width: 24px;
        height: 23px;
        background-color: #fff;
        border: 0;
        border-right: 1px solid #ececec;
        text-align: center;
        color: #979797;
        line-height: 23px;
        cursor: pointer;
        float: left;
    }

    .sw-banner-pause {
        position: relative;
        display: block;
        width: 24px;
        height: 23px;
        float: left;

        border: 0;
        border-right: 1px solid #ececec;
        background-color: #fff;
        text-align: center;
        line-height: 23px;
        cursor: pointer;
    }

    .sw-banner-pause span {
        display: block;
        color: #979797;
        font-size: 16px;
    }

    .sw-banner-next {
        position: relative;
        display: block;
        float: left;

        width: 23px;
        height: 23px;
        text-align: center;
        line-height: 23px;
        cursor: pointer;
        border: 0;
        color: #979797;
        background-color: #fff;
    }

    .banner-right {
        position: relative;
        display: block;
        float: right;
        width: 83.6%;
    }

    .sw-banner a {
        position: relative;
        display: block;
        height: 57px;
        border: 1px solid #e9e9e9;
    }

    .banner-0 {
        background: url('@/assets/images/img_banner01.gif') no-repeat center;
        background-size: cover;
    }

    .banner-1 {
        background: url('@/assets/images/img_banner02.gif') no-repeat center;
        background-size: cover;
    }

    .banner-2 {
        background: url('@/assets/images/img_banner03.gif') no-repeat center;
        background-size: cover;
    }

    .banner-3 {
        background: url('@/assets/images/img_banner04.gif') no-repeat center;
        background-size: cover;
    }

    .banner-4 {
        background: url('@/assets/images/img_banner05.gif') no-repeat center;
        background-size: cover;
    }

    .banner-5 {
        background: url('@/assets/images/img_banner06.gif') no-repeat center;
        background-size: cover;
    }

    .banner-6 {
        background: url('@/assets/images/img_banner07.gif') no-repeat center;
        background-size: cover;
    }

    .banner-7 {
        background: url('@/assets/images/img_banner08.gif') no-repeat center;
        background-size: cover;
    }

    .banner-8 {
        background: url('@/assets/images/img_banner09.gif') no-repeat center;
        background-size: cover;
    }

    /* 배너 PC 영역 */
    /* 배너 반응형 */
    @media all and (max-width: 1400px) {
        .banner .inner {
            width: 97%;
        }
    }

    @media all and (max-width:1100px) {
        .banner-right {
            width: 100%;
            margin-top: 20px;
        }
    }
</style>