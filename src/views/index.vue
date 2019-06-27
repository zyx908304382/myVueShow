<template>
    <div class="content" id="mouseTailBody">
        <div class="head">
            <span>vue demo</span>
        </div>

        <div class="menu">
            <menuList :menuData="menuData"></menuList>
        </div>

        <div class="mainContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import menuList from "./components/menuList"

    export default {
        name: 'Index',
        data() {
            return {
                /* 菜单列表 */
                menuData: [
                    {id: 1, name: '列表', url: '/tableList', childList: []},
                    {id: 2, name: '表单时间线', url: '/formTimeList', childList: []},
                    {id: 3, name: '父', url: '', childList: [{id: 1, name: '子1', url: '/tableList'}, {id: 2, name: '子2', url: '/formTimeList'}]},
                    {id: 4, name: '父2', url: '', childList: [{id: 1, name: '子11', url: '/tableList'}, {id: 2, name: '子22', url: '/formTimeList'}]},
                ],

                /* 鼠标拖动特效参数 */
                mouseTailNum: 0
            }
        },
        mounted() {
            let dx = this
            document.getElementById("mouseTailBody").onmousemove = function (e) {
                let span = document.createElement("span")
                span.id = "mouseTail_" + dx.mouseTailNum
                span.textContent = "☠"
                span.style.color = dx.colorGBA()
                span.style.position = 'absolute'
                span.style.left = e.pageX + "px"
                span.style.top = e.pageY + "px"
                span.style.zIndex = '9999'
                span.style.pointerEvents = 'none'
                dx.mouseTailNum = dx.mouseTailNum + 1
                document.getElementById("mouseTailBody").appendChild(span)
                setTimeout(function () {
                    document.getElementById("mouseTailBody").removeChild(document.getElementById(span.id))
                }, 200)
            }
        },
        methods: {
            // 颜色gba生成
            colorGBA() {
                let dx = this
                let rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16)
                if (rand.length === 6) {
                    return "#" + rand;
                } else {
                    return dx.colorGBA()
                }
            }
        },
        components: {
            menuList
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        position: relative;
        height: 100%;
        pointer-events: auto;
    }

    .head {
        position: fixed;
        background-color: #3C3F41;
        border-bottom: 1px solid #4c4c4c;
        width: 100%;
        height: 60px;
        z-index: 100;
    }

    .head > span:nth-child(1) {
        display: inline-block;
        height: 100%;
        line-height: 60px;
        margin-left: 25px;
        font-size: 30px;
        color: #FFFFFF;
    }

    .menu {
        position: fixed;
        top: 0;
        width: 200px;
        height: 100%;
        background-color: #3C3F41;
        z-index: 50;
        padding-top: 61px;
    }

    .mainContent {
        position: relative;
        height: 100%;
        padding: 61px 0 0 200px;
    }


</style>
