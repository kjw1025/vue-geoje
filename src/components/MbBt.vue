<template>
    <!-- 모바일 버튼 -->
    <a href="#" class="mb-bt">
        <span class="line"></span>
    </a>
</template>

<script>
    // import {onMounted} from 'vue'
    // import $ from 'jquery'

    export default {
        setup() {
            // onMounted(() => {
            //     // 모바일 메뉴 기능
            //     // .mb-bt 를 저장해서 활용하자.
            //     $('.mb-bt').click(function (e) {
            //         e.preventDefault();
            //         $(this).toggleClass('mb-bt-open');
            //         $('.mb-dim').toggleClass('mb-dim-open');
            //         $('.mb-wrap').toggleClass('mb-wrap-open');
            //     });
            // });

            return{}
        }
    }
</script>

<style>
    .mb-bt {
        position: fixed;
        right: 15px;
        top: 25px;
        display: none;
        width: 24px;
        height: 14px;
        z-index: 99999;
    }

    .mb-bt::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s;
    }

    .line {
        position: absolute;
        left: 0;
        top: 50%;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s;
    }

    .mb-bt::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;

        transition: all 0.3s;
    }

    .mb-bt-open::before {
        top: 50%;
        transform: rotate(45deg);
    }

    .mb-bt-open .line {
        width: 0;
    }

    .mb-bt-open::after {
        top: 50%;
        transform: rotate(-45deg);
    }

    @media all and (max-width: 1000px) {
        .mb-bt {
            display: block;
        }
    }
</style>