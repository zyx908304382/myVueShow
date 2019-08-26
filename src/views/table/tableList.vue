<template>
    <div class="tableContent">
        <div class="tableBody">
            <div class="tableBodySearch">
                <div class="tableBodySearchLine">
                    <span>姓名：</span>
                    <input type="text" v-model="nameSearch">
                </div>

                <div>
                    <button @click="searchList">查询</button>
                </div>
            </div>
            <div class="tableBodyHead">
                <div>序号<div class="sortClass" :class="sortId" @click="sortList('id')"></div></div>
                <div>名称</div>
                <div>描述</div>
                <div>创建时间<div class="sortClass" :class="sortCreateTime" @click="sortList('createTime')"></div></div>
            </div>
            <ul class="tableBodyUl">
                <li v-for="table in tableList" :key="table.id">
                    <div>{{table.id}}</div>
                    <div>{{table.name}}</div>
                    <div>{{table.des}}</div>
                    <div>{{table.tm}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tableList',
        data() {
            return {
                nameSearch: '',

                tableListOld: [
                    {id: 1, name: '张三', des: '年纪大了', tm: '2019-01-01 08:24:56'},
                    {id: 2, name: '李四', des: '皮肤黑了', tm: '2019-01-03 12:43:32'},
                    {id: 3, name: '王五', des: '身体瘦了', tm: '2019-01-15 15:26:31'},
                    {id: 4, name: '测试1', des: '测试1测试1测试1测试1测试1', tm: '2019-01-17 15:26:31'},
                    {id: 5, name: '测试2', des: '测试2测试2测试2测试2测试2', tm: '2019-01-12 15:26:31'},
                    {id: 6, name: '测试3', des: '测试3测试3测试3测试3测试3', tm: '2019-01-17 15:26:31'},
                    {id: 7, name: '测试4', des: '测试4测试4测试4测试4测试4', tm: '2019-01-30 15:26:31'},
                    {id: 8, name: '测试5', des: '测试5测试5测试5测试5测试5', tm: '2019-01-25 15:26:31'},
                    {id: 9, name: '测试6', des: '测试6测试6测试6测试6测试6', tm: '2019-01-29 15:26:31'},
                    {id: 10, name: '测试7', des: '测试7测试7测试7测试7测试7测试7', tm: '2019-01-22 15:26:31'}
                ],

                tableList: [],

                sortId: 'sortDefault', // sortASC, sortDESC
                sortCreateTime: 'sortDefault'
            }
        },
        created() {
            let dx = this
            dx.tableList = dx.tableListOld
        },
        methods: {
            sortList(flag) {
                let dx = this
                if (flag === 'id') {
                    if (dx.sortId === 'sortDefault') {
                        dx.sortId = 'sortASC'
                        dx.tableList.sort((a, b) => {
                            return a.id > b.id
                        })
                    } else if (dx.sortId === 'sortASC') {
                        dx.sortId = 'sortDESC'
                        dx.tableList.sort((a, b) => {
                            return a.id < b.id
                        })
                    } else if (dx.sortId === 'sortDESC') {
                        dx.sortId = 'sortASC'
                        dx.tableList.sort((a, b) => {
                            return a.id > b.id
                        })
                    }
                    dx.sortCreateTime = 'sortDefault'
                } else if (flag === 'createTime') {
                    if (dx.sortCreateTime === 'sortDefault') {
                        dx.sortCreateTime = 'sortASC'
                        dx.tableList.sort((a, b) => {
                            return new Date(a.tm) > new Date(b.tm)
                        })
                    } else if (dx.sortCreateTime === 'sortASC') {
                        dx.sortCreateTime = 'sortDESC'
                        dx.tableList.sort((a, b) => {
                            return new Date(a.tm) < new Date(b.tm)
                        })
                    } else if (dx.sortCreateTime === 'sortDESC') {
                        dx.sortCreateTime = 'sortASC'
                        dx.tableList.sort((a, b) => {
                            return new Date(a.tm) > new Date(b.tm)
                        })
                    }
                    dx.sortId = 'sortDefault'
                }
            },
            searchList() {
                let dx = this
                dx.tableList = dx.tableListOld.filter((item) => {
                    return item.name.indexOf(dx.nameSearch) !== -1
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tableContent {
        padding: 20px;
    }

    .tableBody {
        min-width: 360px;
    }

    .tableBodySearch {
        padding: 10px 0;
    }
    .tableBodySearch > div {
        display: inline-block;
    }

    .tableBodySearchLine > input {
        width: 200px;
        height: 30px;
        border: 1px solid #cecece;
        border-radius: 8px;
        outline: none;
        -webkit-appearance: none;
        padding: 2px 10px;
    }
    .tableBodySearch > div:nth-last-child(1) {
        float: right;
        padding-top: 3px;
    }
    .tableBodySearch > div:nth-last-child(1) button {
        width: 50px;
        height: 30px;
        border: none;
        border-radius: 8px;
        background-color: #10c7ff;
        color: #ffffff;
        cursor: pointer;
        outline: none;
        -webkit-appearance: none;
    }

    .tableBodyHead {
        min-height: 35px;
        line-height: 35px;
        background-color: #dfe2e9;
    }

    .tableBodyHead > div {
        display: inline-block;
        text-align: center;
        color: #868585;
    }
    .tableBodyHead > div:nth-child(1) {
        width: 20%;
    }
    .tableBodyHead > div:nth-child(2) {
        width: 20%;
    }
    .tableBodyHead > div:nth-child(3) {
        width: 40%;
    }
    .tableBodyHead > div:nth-child(4) {
        width: 20%;
    }

    .sortClass {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
    }
    .sortDefault {
        border-top: 6px solid #c4cbcd;
        border-bottom: 6px solid #c4cbcd;
    }
    .sortASC {
        border-bottom: 8px solid #3C3F41;
    }
    .sortDESC {
        border-top: 8px solid #3C3F41;
    }

    .tableBodyUl {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tableBodyUl li {
        min-height: 35px;
        text-align: center;
        border-bottom: 1px solid #dfdfdf;
        color: #4b4a4a;
    }

    .tableBodyUl li:nth-child(2n) {
        background-color: #eeeeee;
    }

    .tableBodyUl li:hover {
        background-color: #ebeef5;
    }

    .tableBodyUl li div {
        display: inline-block;
        vertical-align: middle;
    }
    .tableBodyUl li div:nth-child(1) {
        width: 20%;
    }
    .tableBodyUl li div:nth-child(2) {
        width: 20%;
    }
    .tableBodyUl li div:nth-child(3) {
        width: 40%;
    }
    .tableBodyUl li div:nth-child(4) {
        width: 20%;
    }
</style>
