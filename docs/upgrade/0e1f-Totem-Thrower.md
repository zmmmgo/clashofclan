---
title: "部落冲突 coc 图腾投手（临时兵种）升级数据"
navTitle: "图腾投手"
shownTitle: "图腾投手（临时兵种）"
description: "肚子里装满了酸性圣水浓汤，这位来自高地的投掷手用巨石为自己打造了一位形影不离的好伙伴。用这位充满爱意、热情丢出厚重伙伴的投掷手踏平村庄吧！每投掷几次巨石，他就会投出一个新的微型图腾，眩晕周围的防御建筑并吸收伤害。"
module: upgrade-temp
imgFolder: temp_troops/0e1f
wiki: https://clashofclans.fandom.com/wiki/Totem_Thrower
canonical: /upgrade/0e1f-Totem-Thrower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Totem_Thrower_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Totem_Thrower1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 图腾投手是 2026 年 10 月万圣节活动（传送门恐慌）期间推出的临时兵种。
2. 图腾投手的首次攻击会直接投掷出一个“微型图腾”，随后切换为投掷巨石；之后每投掷 3 次巨石，下一次攻击就会再次投掷一个微型图腾。
3. 微型图腾落地时会短暂眩晕周围 5 格范围内的防御建筑并吸引敌方火力；微型图腾拥有极高的生命值，但每秒会自动衰减 500 点生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="28" />
    <UnitProperty pKey="移动速度" pValue="2.75 格/秒" />
    <UnitProperty pKey="攻速" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="6 格" />
    <UnitProperty pKey="特殊机制" pValue="微型图腾（眩晕 & 嘲讽）" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |微型图腾等级|对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |    ---    |       ---      |
|   1  |   215   |   537.5  |  2000  |     1     |        1       |
|   2  |   216   |   540    |  2100  |     1     |        2       |
|   3  |   217   |   542.5  |  2200  |     1     |        3       |
|   4  |   218   |   545    |  2300  |     1     |        4       |
|   5  |   219   |   547.5  |  2400  |     1     |        5       |
|   6  |   250   |   625    |  2600  |     1     |        6       |
|   7  |   251   |   627.5  |  2700  |     1     |        7       |
|   8  |   252   |   630    |  2800  |     1     |        8       |
|   9  |   253   |   632.5  |  2900  |     1     |        9       |
|  10  |   295   |   737.5  |  3200  |     2     |       10       |
|  11  |   296   |   740    |  3300  |     2     |       11       |
|  12  |   297   |   742.5  |  3400  |     2     |       12       |
|  13  |   298   |   745    |  3500  |     2     |       13       |
|  14  |   330   |   825    |  3900  |     2     |       14       |
|  15  |   355   |   887.5  |  4200  |     3     |       15       |
|  16  |   395   |   987.5  |  4600  |     3     |       16       |
|  17  |   430   |  1075    |  5100  |     4     |       17       |
|  18  |   450   |  1125    |  5600  |     4     |       18       |

</UnitTable>

<SmallTitle>微型图腾属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="影响半径" pValue="5 格" />
    <UnitProperty pKey="生命值衰减速度" pValue="500/秒" />
</UnitProperties>

<UnitTable>

| 图腾等级 | 生命值 | 眩晕持续时间 |
|   ---   |  ---   |     ---     |
|    1    |  3840  |    0.2 秒    |
|    2    |  6720  |    0.3 秒    |
|    3    |  9600  |    0.4 秒    |
|    4    | 12400  |    0.5 秒    |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/10/01">
        <TimelineRow>图腾投手作为 2026 年 10 月万圣节限定兵种登场。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
