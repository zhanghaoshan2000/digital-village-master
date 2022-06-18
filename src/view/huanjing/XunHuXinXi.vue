<template>
    <div class="content">
        <div class="content1">
            <img src="../../assets/image/9ccd1227141b2e6eb8eb8dc9b8758b9.png" />
        </div>
        <div class="content2">
            <tr class="th2">
                <th>巡护时间段</th>
                <th class="th4">上午9：00~下午6：00</th>
            </tr>

            <tr>
                <th>巡护次数</th>
                <th class="th4">21次</th>
            </tr>
            <tr class="th2">
                <th>巡护人员</th>
                <th class="th4">许佳</th>
            </tr>

            <tr>
                <th>巡护覆盖面积</th>
                <th class="th4">50平方公里</th>
            </tr>
            <tr class="th2">
                <th>巡护有效记录</th>
                <th class="th4">有效</th>
            </tr>
            <tr class="th2">
                <th>发现动物</th>
                <th class="th4">无</th>
            </tr>

            <tr>
                <th>植物物候记录</th>
                <th class="th4">正常</th>
            </tr>
            <tr class="th2">
                <th>设备设施记录</th>
                <th class="th4">良好</th>
            </tr>

            <tr>
                <th>距离总计</th>
                <th class="th4">2000米</th>
            </tr>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    width: 96%;
    margin: 0rem auto;
    height: 1.7rem;
    flex-direction: row;
}

.content1 {
    width: 40%;
    height: 1.4rem;

    margin-top: 0.17rem;
}

.content2 {
    width: 58%;
    height: 1.4rem;

    margin-top: 0.17rem;
}

img {
    object-position: center;
    object-fit: cover;
    height: 1.45rem;
    width: 100%;
    border-radius: 5px;
}

tr {
    width: 2.48rem;
    display: flex;
    margin-left: 0.1rem;
}

th {
    width: 1rem;
    background-color: #003c9d;
    border-radius: 5px 0 0 5px;
}

.th2 {
    width: 2.48rem;
    display: flex;
    margin-left: 0.1rem;
    margin-top: 0.01rem;
    margin-bottom: 0.01rem;
}

.th3 {
    width: 1.45rem;
    background-color: #003377;
    border-radius: 0 5px 5px 0;
    margin-left: 0.01rem;
}

.th4 {
    width: 1.45rem;
    background-color: #003377;
    border-radius: 0 5px 5px 0;
    margin-left: 0.01rem;
}
</style>
