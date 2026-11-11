---
title: "部落冲突 coc 爆震器装备升级数据"
navTitle: "爆震器"
shownTitle: "爆震器"
description: "释放冲击波，对周围的敌人和建筑造成伤害并附带击晕/瘫痪效果。"
module: upgrade-home
imgFolder: home_heroes/07e2
wiki: https://clashofclans.fandom.com/wiki/Stun_Blaster
canonical: /upgrade/07e2-Stun-Blaster
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Stun_Blaster_info.png" :imgAlt="$frontmatter.navTitle" description="释放冲击波，对周围的敌人和建筑造成伤害并附带击晕/瘫痪效果。" />

<SmallTitle>说明</SmallTitle>

1. 爆震器是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的一件普通装备。在铁匠铺 9 级时解锁，需要 16 本。
2. 使用时，爆震器创造冲击波，对周边防御部队和建筑造成伤害和击晕效果。
3. 爆震器装备还可以增加飞龙公爵的每秒伤害和生命值，以及开启技能时恢复的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="9" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
    <UnitProperty pKey="伤害和眩晕半径" pValue="8 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 技能总伤害 | 眩晕时间 |英雄每秒<br>伤害提升|开启技能后<br>生命值恢复|英雄<br>生命值提升|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
|  --- |    ---    |   ---   |        ---        |          ---          |         ---    |   ---  | ---   |        ---      |      ---      |
|   1  |    150    |   4.5 秒 |         40        |          150          |        450     |     \  |   \   |         \       |       16      |
|   2  |    150    |   4.5 秒 |         43        |          250          |        650     |   120  |   -   |         9       |       16      |
|   3  |    200    |   5.0 秒 |         46        |          350          |        850     |   240  |   20  |         9       |       16      |
|   4  |    200    |   5.0 秒 |         49        |          450          |       1000     |   400  |   -   |         9       |       16      |
|   5  |    200    |   5.0 秒 |         52        |          550          |       1150     |   600  |   -   |         9       |       16      |
|   6  |    250    |   5.5 秒 |         55        |          650          |       1300     |   940  |  100  |         9       |       16      |
|   7  |    250    |   5.5 秒 |         58        |          750          |       1450     |  1120  |   -   |         9       |       16      |
|   8  |    250    |   5.5 秒 |         61        |          850          |       1600     |  1440  |   -   |         9       |       16      |
|   9  |    300    |   6.0 秒 |         64        |          950          |       1750     |  1800  |  200  |         9       |       16      |
|  10  |    300    |   6.0 秒 |         67        |         1050          |       1900     |  1900  |   -   |         9       |       16      |
|  11  |    300    |   6.0 秒 |         70        |         1100          |       2000     |  2000  |   -   |         9       |       16      |
|  12  |    350    |   6.5 秒 |         73        |         1150          |       2100     |  2100  |  400  |         9       |       16      |
|  13  |    350    |   6.5 秒 |         76        |         1180          |       2200     |  2200  |   -   |         9       |       16      |
|  14  |    350    |   6.5 秒 |         79        |         1210          |       2275     |  2300  |   -   |         9       |       16      |
|  15  |    375    |   7.0 秒 |         82        |         1240          |       2325     |  2400  |  600  |         9       |       16      |
|  16  |    375    |   7.0 秒 |         85        |         1270          |       2375     |  2500  |   -   |         9       |       16      |
|  17  |    375    |   7.0 秒 |         88        |         1290          |       2400     |  2600  |   -   |         9       |       16      |
|  18  |    400    |   7.5 秒 |         90        |         1300          |       2400     |  2700  |  600  |         9       |       16      |

</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>新装备：爆震器。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>