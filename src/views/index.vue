<template>
    <div class="content" id="mouseTailBody">
        <div class="head">
            <div class="headMenuIcon" @click="changeMenu">
                <v-icon name="menu"></v-icon>
            </div>
            <span>vue demo</span>
        </div>

        <div class="menu" id="menuId">
            <menuList :menuData="menuData" :menuExpand="menuExpand"></menuList>
        </div>

        <div class="mainContent" id="mainContentId">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import menuList from "./components/menuList"

    export default {
        name: 'Index',
        data() {
            return {
                /* 菜单展开 */
                menuExpand: true,

                /* 菜单列表 */
                menuData: [
                    {id: 1, name: '列表', icon: 'list', url: '/tableList', childList: []},
                    {id: 2, name: '表单时间线', icon: 'clock', url: '/formTimeList', childList: []},
                    {id: 3, name: '轮播图', icon: 'image', url: '', childList: [{id: 1, name: '轮播图1', url: '/movingImg1'}, {id: 2, name: '轮播图2', url: '/movingImg2'}]}
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
            },
            // 菜单伸缩
            changeMenu() {
                let dx = this
                if (dx.menuExpand) {
                    $("#menuId").animate({width:"57px"})
                    $("#mainContentId").animate({paddingLeft: '57px'})
                } else {
                    $("#menuId").animate({width:"200px"})
                    $("#mainContentId").animate({paddingLeft: '200px'})
                }
                dx.menuExpand = !dx.menuExpand
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
        overflow: hidden;
        color: aliceblue;
    }

    .headMenuIcon {
        display: inline-block;
        width: 30px;
        height: auto;
        margin-left: 14px;
        vertical-align: sub;
        cursor: pointer;
        padding: 3px;
        border: 1px solid #3C3F41;
    }
    .headMenuIcon:hover {
        border-color: #a8b6bf;
        box-shadow: 0 0 3px #a8b6bf;
    }

    .head > span:nth-child(2) {
        display: inline-block;
        height: 100%;
        line-height: 60px;
        margin-left: 15px;
        font-size: 30px;
        white-space: nowrap;
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
