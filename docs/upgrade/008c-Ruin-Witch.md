---
title: "部落冲突 coc 废墟女巫升级数据"
navTitle: "废墟女巫"
shownTitle: "废墟女巫"
description: "废墟女巫在一场罕见的炼金事故中失去了法力，建筑大师打造了一项巧妙的发明，让她能够继续召唤随从。‘残骸清扫者5000’可以吸取已倒塌建筑的残骸，并吐出准备好投入战斗的废墟骑士。在部署一定数量的部队后，该装置会自动销毁，同时废墟女巫也会一同阵亡！"
module: upgrade-home
imgFolder: home_tech/008c
wiki: https://clashofclans.fandom.com/wiki/Ruin_Witch
canonical: /upgrade/008c-Ruin-Witch
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">废墟女巫</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">废墟骑士</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 废墟女巫 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ruin_Witch_info.png" imgAlt="废墟女巫"
    description="废墟女巫在一场罕见的炼金事故中失去了法力，建筑大师打造了一项巧妙的发明，让她能够继续召唤随从。<br><br>‘残骸清扫者5000’可以吸取已倒塌建筑的残骸，并吐出准备好投入战斗的废墟骑士。在部署一定数量的部队后，该装置会自动销毁，同时废墟女巫也会一同阵亡！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Ruin_Witch1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Ruin_Witch2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Ruin_Witch3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Ruin_Witch4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 废墟女巫在部署时不会主动攻击任何建筑或部队，只会静止待命；当战场上有建筑被摧毁出现残骸时，她会立刻移动前往残骸处。
2. 废墟女巫无法选定被封闭城墙完全阻隔的已摧毁建筑残骸，隐形法术覆盖或被蔓生植物遮挡的残骸也无法被选定。
3. 当废墟女巫到达倒塌的建筑处时，会启动吸尘装置收集残骸（耗时约 4 秒），随后残骸消失；接着她会打开前方的吸尘器盖子，将残骸压缩重塑（耗时约 2 秒），并在最后召唤出一只 [废墟骑士](#cp-unit-item-1)。
4. 无论收集的是何种建筑的残骸，召唤出的废墟骑士属性只取决于废墟女巫的等级。
5. 一旦残骸收集完成，即便废墟女巫随后被防守建筑击败或被 [回溯法术](/upgrade/018b-Recall-Spell) 收回，废墟骑士依然会成功生成。
6. 每只废墟女巫最多累计召唤 10 只废墟骑士。完成第 10 次召唤后，吸尘装置会发生自毁，废墟女巫随即阵亡。
7. 在部落城堡作为防守部队时，废墟女巫不会去收集进攻方摧毁的残骸，而是会使用吸尘器对地面单一目标进行微弱攻击（秒伤仅 25 ~ 28 点），因此非常不适合用于城堡防守。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面辅助单位" />
    <UnitProperty pKey="攻击偏好" pValue="建筑残骸" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害 (仅防守时)" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标 (仅防守时)" />
    <UnitProperty pKey="占据人口" pValue="26" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.0 秒/次 (仅防守时)" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="最多召唤骑士数量" pValue="10" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="13" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="13,13,585,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 召唤骑士等级 | 最多召唤骑士数量 | 生命值 | 防守每秒伤害<sup>*</sup> | 防守每次伤害 | 升级花费 | 升级时间 | 所需<br>实验室等级 | 所需<br>大本等级 |
| --- |     ---     |       ---      |  ---- |          ---           |     ---     |  ----   |   ----   |       ----      |      ----     |
| 1 | 1 | 10 | 2300 | 25 | 50 | \ | \ | N/A | 16 |
| 2 | 2 | 10 | 2550 | 26 | 52 | 220k | 11 | 14 | 16 |
| 3 | 3 | 10 | 2800 | 27 | 54 | 300k | 12 | 15 | 17 |
| 4 | 4 | 10 | 3050 | 28 | 56 | 380k | 15,12 | 16 | 18 |

</UnitTable>

\* 废墟女巫仅在作为防守部队时才会使用吸尘器进行攻击，且伤害极低。
</SwitchTabGroup>

<!-- ↓↓↓ 废墟骑士 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ruin_Knight_info.png" imgAlt="废墟骑士"
    description="在操作‘残骸清扫者5000’之前，请先阅读说明书。这些被回收重塑的战士对环境保护大有裨益，但会让他们周围的一切化作废墟。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Ruin_Knight1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 废墟骑士是由废墟女巫清理被摧毁建筑的残骸后召唤出的地面近战单位。
2. 废墟骑士对城墙拥有 3 倍伤害加成，可以迅速突破阵型外围的城墙掩护后排部队。
3. 废墟骑士占用 18 人口（用于计算弹簧陷阱等触发机制）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="对城墙伤害倍数" pValue="3 倍" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="18" />
    <UnitProperty pKey="移动速度" pValue="1.75 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
</UnitProperties>

<SmallTitle>属性详情</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 对城墙伤害 | 生命值 |
| --- |   ---   |   ---   |    ---    |  ---  |
|  1  |   240   |   240   |    720    | 2900  |
|  2  |   270   |   270   |    810    | 3200  |
|  3  |   300   |   300   |    900    | 3500  |
|  4  |   330   |   330   |    990    | 3800  |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/10/20">
        <TimelineRow>降低了所有等级废墟骑士的生命值和伤害值（1 级生命值由 3100 降至 2900，伤害由 255 降至 240；4 级生命值由 4000 降至 3800，伤害由 345 降至 330）。</TimelineRow>
        <TimelineRow>废墟骑士的移动速度由 2 格/秒 (16) 降低至 1.75 格/秒 (14)。</TimelineRow>
        <TimelineRow>废墟骑士的判定人口由 20 降低至 18。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/08/31">
        <TimelineRow>移除了废墟骑士随着时间自动掉血的机制。</TimelineRow>
        <TimelineRow>废墟女巫在所有等级下召唤废墟骑士的最大数量由 8 只提升至 10 只。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/06/16">
        <TimelineRow>推出新暗黑重油部队“废墟女巫”，共有 4 个等级。</TimelineRow>
    </TimelineItem>
</Timeline>
