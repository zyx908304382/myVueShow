<template>
    <div class="tableContent">
        <div class="tableBody">
            <div class="tableBodyHead">
                <div>序号</div>
                <div>名称</div>
                <div>描述</div>
                <div>创建时间</div>
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
                tableList: [
                    {id: 1, name: '张三', des: '年纪大了', tm: '2019-01-01 08:24:56'},
                    {id: 2, name: '李四', des: '皮肤黑了', tm: '2019-01-03 12:43:32'},
                    {id: 3, name: '王五', des: '身体瘦了', tm: '2019-01-15 15:26:31'},
                    {id: 4, name: '测试1', des: '测试1测试1测试1测试1测试1', tm: '2019-01-15 15:26:31'},
                    {id: 5, name: '测试2', des: '测试2测试2测试2测试2测试2', tm: '2019-01-15 15:26:31'},
                    {id: 6, name: '测试3', des: '测试3测试3测试3测试3测试3', tm: '2019-01-15 15:26:31'},
                    {id: 7, name: '测试4', des: '测试4测试4测试4测试4测试4', tm: '2019-01-15 15:26:31'},
                    {id: 8, name: '测试5', des: '测试5测试5测试5测试5测试5', tm: '2019-01-15 15:26:31'},
                    {id: 9, name: '测试6', des: '测试6测试6测试6测试6测试6', tm: '2019-01-15 15:26:31'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tableContent {
        padding: 20px;
    }

    .tableBodyHead {
        height: 35px;
        line-height: 35px;
    }

    .tableBodyHead div {
        display: inline-block;
        text-align: center;
        color: #868585;
        white-space: nowrap;
    }
    .tableBodyHead div:nth-child(1) {
        width: 20%;
    }
    .tableBodyHead div:nth-child(2) {
        width: 20%;
    }
    .tableBodyHead div:nth-child(3) {
        width: 40%;
    }
    .tableBodyHead div:nth-child(4) {
        width: 20%;
    }

    .tableBodyUl {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tableBodyUl li {
        height: 35px;
        line-height: 35px;
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
        white-space: nowrap;
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
