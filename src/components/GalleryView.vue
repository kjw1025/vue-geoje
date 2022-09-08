<template>
    <!-- 갤러리 영역-->
    <section class="gallery">
        <div class="inner clearfix">
            <div class="gallery-left">
                <h3>활동 갤러리</h3>
                <a href="#" class="gallery-more">전체보기</a>
                <ul class="gallery-list clearfix">

                    <li v-for="(item, index) in galleryData" :key="index">
                        <a :href="item.link">
                            <span class="gallery-img"
                                :style="{
                                backgroundImage: `url(${item.imgurl})`,
                                backgroundSize: 'cover'
                                }"
                            ></span>
                            <p class="gallery-cont">
                                <span class="gallery-title">
                                    {{item.title}}
                                </span>
                                <span class="gallery-date">
                                    {{item.date}}
                                </span>
                            </p>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div class="gallery-right">
                <h3>동영상 갤러리</h3>
                <a href="#" class="gallery-more">전체보기</a>
                <div class="gallery-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0-q1KafFCLU"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import {
        computed
    } from 'vue'
  import { useStore } from 'vuex'
    export default {
        setup() {
             // state의 visualData 를 받아온다.
            const store = useStore();
            // getter 의 visualData computed 로 받아온다.
            const galleryData = computed(() => store.getters.galleryData);

            return {
                galleryData
            }
        }

    }
</script>

<style>
    /* 갤러리 영역 */
    .gallery {
        position: relative;
        display: block;

        background: url('@/assets/images/img_bottombg.jpg') no-repeat center;
        background-size: cover;

        padding: 90px 0;
    }

    .gallery h3 {
        position: relative;
        display: block;
        font-size: 22px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 25px;
    }

    .gallery-more {
        position: absolute;
        right: 0;
        top: 5px;
        display: block;
        color: #fff;
        font-size: 15px;
        padding-left: 18px;
    }

    .gallery-more::before {
        content: '';
        position: absolute;
        left: 0;
        top: 11px;
        display: block;
        width: 8px;
        height: 2px;
        background-color: #fff;
    }

    .gallery-more::after {
        content: '';
        position: absolute;
        left: 3px;
        top: 8px;
        display: block;
        width: 2px;
        height: 8px;
        background-color: #fff;
    }

    .gallery-left {
        position: relative;
        display: block;
        width: 67%;
        /* height: 385px; */
        float: left;
    }

    .gallery-list {
        position: relative;
        display: block;
    }

    .gallery-list li {
        position: relative;
        display: block;
        float: left;
        width: 32%;
        margin-right: 2%;
    }

    .gallery-list li:last-child {
        margin-right: 0;
    }

    .gallery-list li a {
        position: relative;
        display: block;
        background-color: #000;
        transition: all 0.5s;
    }

    .gallery-list li a:hover {
        box-shadow: 15px 15px 34px rgba(0, 0, 0, 0.28);
    }

    .gallery-list li a:hover .gallery-img {
        opacity: 0.75;
    }

    .gallery-img {
        position: relative;
        display: block;
        width: 100%;
        height: 195px;
        transition: all 0.5s;
    }

    .gallery-1 {
        background: url('@/assets/images/gallery_1.jpg') no-repeat center;
        background-size: cover;
    }

    .gallery-2 {
        background: url('@/assets/images/gallery_2.jpg') no-repeat center;
        background-size: cover;
    }

    .gallery-3 {
        background: url('@/assets/images/gallery_3.jpg') no-repeat center;
        background-size: cover;
    }

    .gallery-cont {
        position: relative;
        display: block;
        background-color: #fff;
        padding: 20px 40px;
        text-align: center;
    }

    .gallery-title {
        position: relative;
        display: block;
        font-size: 16px;
        color: #444;
    }

    .gallery-date {
        position: relative;
        display: block;
        font-size: 15px;
        color: #5f5f5f;
        margin-top: 20px;
    }


    .gallery-right {
        position: relative;
        display: block;
        width: 29%;
        height: 385px;
        float: right;
    }

    .gallery-video {
        position: relative;
        display: block;
        width: 100%;
        height: 327px;
        background-color: #282828;
    }

    /* 갤러리 PC 레이아웃 */
    /* 갤러리 반응형 레이아웃 */
    @media all and (max-width:1400px) {
        .gallery {
            padding: 6.42vw 0;
        }

        .gallery .inner {
            width: 96%;
        }

        .gallery-cont {
            position: relative;
            display: block;
            background-color: #fff;
            padding: 20px 2.85vw;
            text-align: center;
        }
    }

    @media all and (max-width: 1100px) {
        .gallery-title {
            font-size: 15px;
        }
    }

    @media all and (max-width:1080px) {
        .gallery-left {
            width: 100%;
            margin-bottom: 20px;
        }

        .gallery-right {
            width: 100%;
        }

        .gallery-video {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 50px;
        }

    }

    @media all and (max-width:660px) {
        .gallery-list li {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
</style>