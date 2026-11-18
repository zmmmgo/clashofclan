---
title: "部落冲突 coc 烟花炮手塔升级数据"
navTitle: "烟花炮手塔"
shownTitle: "烟花炮手塔"
description: "弓箭手妹妹被抢走上铺后气坏了！烟花炮手在这个将箭塔与投石炮古怪结合的建筑上大呼小叫，疯狂向地面和空中单位发射炮弹。火箭发射出的噼啪火花一路灼烧部队，直到命中最终目标——敌人的脸上！"
module: upgrade-home
imgFolder: home_buildings/031b
wiki: https://clashofclans.fandom.com/wiki/Firecracker_Tower
canonical: /upgrade/031b-Firecracker-Tower
---

- *如想查看合并前的建筑，请访问 [箭塔](/upgrade/0302-Archer-Tower) 和 [投石炮](/upgrade/030e-Scattershot)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Firecracker_Tower2.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Firecracker_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Firecracker_Tower2.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 18, 19" />
    <BuildingNumRow title="建筑数量" num="     0,  2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 烟花炮手塔不能直接建造，必须由 1 个满级（21 级）[箭塔](/upgrade/0302-Archer-Tower) 和 1 个满级（7 级）[投石炮](/upgrade/030e-Scattershot) 合并而成。
    - 合并一旦开始就无法取消。
    - 合并建筑的操作是永久性的，一旦合并就无法拆开。
    - 升本前必须合并完所有可以合并的建筑。
2. 烟花炮手塔发射巨型火箭，不仅对初始目标造成重创，还会以初始目标后方呈 90° 扇形范围扩散爆炸，对范围内的敌方部队造成溅射伤害。
    - 距离初始目标越远的敌方单位，受到的溅射伤害越低。
    - 攻击机制设有两个判定区域：初始目标周围 1 格内的单位受到最大溅射伤害；1 到 5 格范围内的单位受到衰减溅射伤害（衰减至最低伤害）。
3. 与投石炮相比，烟花炮手塔**没有近身盲区**，攻击速度快了将近一倍（约 1.792 秒/次），兼具箭塔的快速射击与投石炮的强力范围伤害，即使近战部队贴脸也能正常防守。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害（扇形溅射）" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="1.792 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次直接伤害 | 扇形溅射伤害 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需<br>大本等级 |
| ---- |   ---   |     ---     |     ---     |  ---  |   ---   |   ----   |         ---          |      ----      |
| 1 | 270 | 365 ~ 483.84 | 190 ~ 365 | 6500 | 31M | 14, 12 |  | 19 |
| 2 | 280 | 385 ~ 501.76 | 200 ~ 385 | 6700 | 32M | 15 |  | 19 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/11/16">
        <TimelineRow>19 本推出，并在 19 本新增防御建筑：烟花炮手塔，共设两个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
