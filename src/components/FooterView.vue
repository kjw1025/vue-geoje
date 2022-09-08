<template>
    <!-- 하단 영역-->
    <footer class="footer">
        <div class="inner">

            <ul class="footer-menu clearfix">
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">이메일무단수집거부</a></li>
            </ul>

            <p>
                <ul class="footer-addr">
                    <li>
                        <strong>거제청년센터</strong>
                        <span>이용시간</span>
                        <em>평일 9시-18시 (토요일/일요일/공휴일 휴무)</em>
                    </li>
                    <li>
                        <span>주소</span>
                        <address>주소경남 거제시 계룡로11길 21 1층 거제청년센터 이룸 (지번주소: 경남 거제시 고현동 552)</address>
                    </li>
                </ul>
            </p>

            <button class="gotop">
            </button>

        </div>

        <hr class="f-hr">

        <div class="inner">
            <span class="copy"> Copyright © <strong>거제청년센터이룸</strong>. All right reserved.</span>
        </div>

    </footer>
</template>

<script>
    export default {

    }
</script>

<style>
    /* 하단 영역 */
    .footer {
        position: relative;
        display: block;

        background-color: #323232;
        padding: 30px 0;
    }

    .f-hr {
        position: relative;
        display: block;
        width: 100%;
        height: 1px;
        border: 0;
        background-color: #3c3c3c;
        margin: 30px 0;
    }

    .footer .inner {}

    .footer-menu {
        position: relative;
        display: block;
        margin-bottom: 25px;
    }

    .footer-menu li {
        position: relative;
        display: block;
        float: left;
        margin-right: 15px;
    }

    .footer-menu li a {
        position: relative;
        display: block;
        color: #888;
        font-size: 13px;
        line-height: 28px;

        border: 1px solid #595959;
        border-radius: 3px;
        padding: 0 12px;

        background-color: rgba(255, 255, 255, 0.0);
        transition: all 0.5s;
    }

    .footer-menu li a:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .gotop {
        position: absolute;
        right: 0;
        top: 20px;
        display: block;
        width: 60px;
        height: 60px;
        border: 0;
        cursor: pointer;
        background: #f74141 url('@/assets/images/img_arrow04.svg') no-repeat center;
        background-size: 10%;

        border-radius: 3px;
        transform: rotate(90deg);
    }


    .footer-addr {
        position: relative;
        display: block;
    }

    .footer-addr li {
        position: relative;
        display: block;
        margin-bottom: 10px;
    }

    .footer-addr li strong {
        position: relative;
        display: inline-block;
        color: #888;
        font-size: 14px;
        font-weight: 500;
        padding-right: 15px;
    }

    .footer-addr li span {
        position: relative;
        display: inline-block;
        font-size: 14px;
        color: #555;
        padding-right: 10px;
    }

    .footer-addr li em,
    .footer-addr li address {
        position: relative;
        display: inline-block;
        font-size: 15px;
        color: #888;
        font-style: normal;
    }

    .copy {
        position: relative;
        display: block;
        font-size: 14px;
        color: #888;
    }

    .copy strong {
        position: relative;
        display: inline-block;
        font-weight: 500;
    }

    /* footer 반응형 */
    @media all and (max-width: 1400px) {
        .footer .inner {
            width: 97%;
        }
    }

    @media all and (max-width: 650px) {

        .footer .inner {
            width: 97%;
        }

        .footer-addr li strong {
            font-size: 13px;
        }

        .footer-addr li span {
            font-size: 13px;
        }

        .footer-addr li em,
        .footer-addr li address {
            font-size: 13px;
        }

    }
</style>