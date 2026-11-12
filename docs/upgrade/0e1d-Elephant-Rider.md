---
title: "部落冲突 coc 象骑兵（临时兵种）升级数据"
navTitle: "象骑兵"
shownTitle: "象骑兵（临时兵种）"
description: "他在 Supercell Make 创意大赛中脱颖而出，现在他要来踏平敌方阵型了！挡在象骑兵和最近防御建筑之间的城墙会被狠狠踩扁！战败的冲击会使大象与骑手分离——小个子骑手挥舞着流星锤攻击一切目标，而庞大的巨象则继续破墙冲锋，直奔更多防御建筑！"
module: upgrade-temp
imgFolder: temp_troops/0e1d
wiki: https://clashofclans.fandom.com/wiki/Elephant_Rider
canonical: /upgrade/0e1d-Elephant-Rider
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">象骑兵</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">巨象</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">骑手</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 象骑兵 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elephant_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Elephant_Rider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 象骑兵源自 Supercell Make 玩家创意大赛获胜作品，于 2026 年 8 月周年庆期间作为临时兵种登场。
2. 象骑兵优先攻击防御建筑，对城墙造成 20 倍伤害。
3. 当象骑兵被击败时，会分裂为巨象与骑手两个独立单位：巨象继续冲向防御建筑并破墙，骑手则对周围任意地面目标挥动链锤造成范围伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害加成" pValue="对城墙 20 倍伤害" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="24" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻速" pValue="1.4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="特殊技能" pValue="巨物分裂" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |       ---      |
|   1  |    40   |    56    |   750  |        1       |
|   2  |    50   |    70    |   900  |        2       |
|   3  |    60   |    84    |  1050  |        3       |
|   4  |    75   |   105    |  1300  |        4       |
|   5  |    85   |   119    |  1550  |        5       |
|   6  |   105   |   147    |  1950  |        6       |
|   7  |   125   |   175    |  2300  |        7       |
|   8  |   150   |   210    |  2800  |        8       |
|   9  |   175   |   245    |  3300  |        9       |
|  10  |   210   |   294    |  3950  |       10       |
|  11  |   235   |   329    |  4450  |       11       |
|  12  |   270   |   378    |  5100  |       12       |
|  13  |   305   |   427    |  5700  |       13       |
|  14  |   345   |   483    |  6500  |       14       |
|  15  |   385   |   539    |  7300  |       15       |
|  16  |   440   |   616    |  8250  |       16       |
|  17  |   495   |   693    |  9300  |       17       |
|  18  |   560   |   784    | 10500  |       18       |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 巨象 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elephant_info.png" imgAlt="巨象"
    description="当骑手摔落后，这头勇猛的巨象仍会继续冲撞城墙并锁定防御建筑，给敌方村庄留下难以磨灭的印记。" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Elephant1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害加成" pValue="对城墙 20 倍伤害" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻速" pValue="1.4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |       ---      |
|   1  |    10   |    14    |   450  |        1       |
|   2  |    13   |    18.2  |   600  |        2       |
|   3  |    18   |    25.2  |   700  |        3       |
|   4  |    22   |    30.8  |   850  |        4       |
|   5  |    28   |    39.2  |  1000  |        5       |
|   6  |    35   |    49    |  1300  |        6       |
|   7  |    42   |    58.8  |  1550  |        7       |
|   8  |    48   |    67.2  |  1850  |        8       |
|   9  |    55   |    77    |  2200  |        9       |
|  10  |    65   |    91    |  2700  |       10       |
|  11  |    75   |   105    |  3050  |       11       |
|  12  |    85   |   119    |  3500  |       12       |
|  13  |   100   |   140    |  3900  |       13       |
|  14  |   110   |   154    |  4450  |       14       |
|  15  |   125   |   175    |  5000  |       15       |
|  16  |   140   |   196    |  5650  |       16       |
|  17  |   160   |   224    |  6400  |       17       |
|  18  |   180   |   252    |  7200  |       18       |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 骑手 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rider_info.png" imgAlt="骑手"
    description="当骑手从大象身上跌落时，他会挥舞带刺流星锤展开疯狂复仇，对所有目标造成近身范围打击。" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Rider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻速" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |       ---      |
|   1  |    22   |    26.4  |   220  |        1       |
|   2  |    28   |    33.6  |   280  |        2       |
|   3  |    33   |    39.6  |   340  |        3       |
|   4  |    42   |    50.4  |   420  |        4       |
|   5  |    50   |    60    |   500  |        5       |
|   6  |    65   |    78    |   630  |        6       |
|   7  |    78   |    93.6  |   760  |        7       |
|   8  |    92   |   110.4  |   920  |        8       |
|   9  |   108   |   129.6  |  1100  |        9       |
|  10  |   130   |   156    |  1350  |       10       |
|  11  |   145   |   174    |  1500  |       11       |
|  12  |   170   |   204    |  1700  |       12       |
|  13  |   190   |   228    |  1900  |       13       |
|  14  |   215   |   258    |  2150  |       14       |
|  15  |   245   |   294    |  2450  |       15       |
|  16  |   275   |   330    |  2750  |       16       |
|  17  |   310   |   372    |  3100  |       17       |
|  18  |   350   |   420    |  3500  |       18       |

</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/01">
        <TimelineRow>象骑兵作为 Supercell Make 社区设计优胜兵种，在 14 周年庆典期间作为临时兵种登场。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
