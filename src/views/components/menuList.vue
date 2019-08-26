<template>
    <ul class="menuList_ul">
        <div v-if="menuExpand">
            <div v-for="menuFather in menuDataControl" :key="menuFather.id">
                <router-link v-if="menuFather.childList.length === 0" :ref="'menuSonDis_' + menuFather.id" class="menuList_li" tag="li" :to="menuFather.url" @click.native="chooseMenu($event)">{{menuFather.name}}</router-link>
                <div v-else :ref="'menuSonDis_' + menuFather.id">
                    <li class="menuList_li" @click="changeSecondMenu(menuFather.id)">{{menuFather.name}}
                        <span v-if="menuFather.expand">△</span>
                        <span v-else>▽</span>
                    </li>
                    <ul class="menuList_ul" :style="{display: menuFather.expand ? 'block' : 'none'}">
                        <router-link v-for="menuSon in menuFather.childList" :key="menuSon.id" class="menuList_li menuList_son_li" tag="li" :to="menuSon.url" @click.native.stop="chooseMenu($event)">{{menuSon.name}}</router-link>
                    </ul>
                </div>
            </div>
        </div>

        <div v-else>
            <div v-for="menuFather in menuDataControl" :key="menuFather.id">
                <router-link v-if="menuFather.childList.length === 0" :ref="'menuSonDis_' + menuFather.id" class="menuList_li2" tag="li" :to="menuFather.url" @click.native="chooseMenu($event)"><v-icon :name="menuFather.icon"></v-icon></router-link>
                <div style="position: relative;" v-else :ref="'menuSonDis_' + menuFather.id">
                    <li class="menuList_li2" @click="changeSecondMenu(menuFather.id)">
                        <v-icon :name="menuFather.icon"></v-icon>
                    </li>

                    <div class="childrenMenuArrow" :style="{display: menuFather.expand ? 'block' : 'none'}"></div>
                    <div class="childrenMenu" :style="{display: menuFather.expand ? 'block' : 'none'}">
                        <ul class="menuList_ul">
                            <router-link v-for="menuSon in menuFather.childList" :key="menuSon.id" class="menuList_li menuList_son_li2" tag="li" :to="menuSon.url" @click.native.stop="chooseMenu($event)">{{menuSon.name}}</router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </ul>
</template>

<script>
    // 菜单组件
    export default {
        name: 'menuList',
        data() {
          return {
              menuDataControl: [] // {id: 1, name: '列表', url: '/tableList', expand: false, childList: []}
          }
        },
        created() {
            let dx = this
            dx.menuData.forEach((item) => {
                let menuTemp = item
                menuTemp.expand = false
                dx.menuDataControl.push(menuTemp)
            })
        },
        methods: {
            // 选中菜单
            chooseMenu(e) {
                let dx = this
                dx.menuData.forEach((item) => {
                    if (item.childList.length > 0) {
                        dx.$refs['menuSonDis_' + item.id][0].childNodes[1].childNodes.forEach((item2) => {
                            item2.style.backgroundColor = ''
                        })
                    } else {
                        dx.$refs['menuSonDis_' + item.id][0].$el.style.backgroundColor = ''
                    }
                })
                e.target.style.backgroundColor = '#2b3341'
            },
            // 缩放父菜单
            changeSecondMenu(id) {
                let dx = this
                dx.menuDataControl.forEach((item) => {
                    if (item.id === id) {
                        item.expand = !item.expand
                    } else {
                        item.expand = false
                    }
                })
                dx.menuDataControl = JSON.parse(JSON.stringify(dx.menuDataControl))
            }
        },
        props: {
            menuData: Array,
            menuExpand: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .menuList_ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .menuList_li {
        height: 50px;
        line-height: 50px;
        color: #ffffff;
        font-size: 15px;
        padding: 0 0 0 20px;
        cursor: pointer;
    }
    .menuList_li:hover {
        background-color: #2b3341;
    }

    .menuList_li > span {
        float: right;
        margin: 0 10px 0 0;
    }

    .menuList_son_li {
        padding-left: 40px;
    }


    .menuList_li2 {
        height: 60px;
        line-height: 75px;
        padding: 0;
        cursor: pointer;
        text-align: center;
    }
    .menuList_li2:hover {
        background-color: #2b3341;
    }
    .menuList_li2 svg {
        width: 30px;
        color: #ffffff;
    }


    .childrenMenuArrow {
        position: absolute;
        top: 25px;
        left: 57px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 10px solid #3C3F41;
    }
    .childrenMenu {
        position: absolute;
        top: -17px;
        left: 67px;
        background-color: #3C3F41;
        border-radius: 10px;
    }
    .menuList_son_li2 {
        padding: 0;
        text-align: center;
        width: 80px;
    }
</style>
