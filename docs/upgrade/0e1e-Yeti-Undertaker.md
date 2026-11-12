---
title: "部落冲突 coc 送葬雪怪（临时兵种）升级数据"
navTitle: "送葬雪怪"
shownTitle: "送葬雪怪（临时兵种）"
description: "敲响丧钟的战士。送葬雪怪将铁拳砸向防御建筑，并对城墙造成额外伤害。在战斗中，他会通过吸收阵亡友军的灵魂变得更加强大。击败他将是一个致命的错误，因为他会两次从墓碑中爬起重返凡间，并且每次复活都会带上一群黑暗骷髅助手。"
module: upgrade-temp
imgFolder: temp_troops/0e1e
wiki: https://clashofclans.fandom.com/wiki/Yeti_Undertaker
canonical: /upgrade/0e1e-Yeti-Undertaker
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">送葬雪怪</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">黑暗骷髅</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 送葬雪怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Yeti_Undertaker_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Yeti_Undertaker1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 送葬雪怪是 2026 年 9 月 WWE 联动赛季推出的临时兵种，形象融合了 WWE 传奇摔跤手“送葬者”与雪怪。
2. 送葬雪怪优先攻击防御建筑，对城墙造成 5 倍伤害。
3. 当友军累计损失达到 120、240、360 人口时，送葬雪怪会吸收灵魂并狂暴变大，最多获得 3 层生命值与伤害增益（分别提升 15%/20%、30%/40%、50%/60%）。
4. 送葬雪怪阵亡时会陷入倒地状态并召唤 4 只黑暗骷髅。前 2 次阵亡后，他会在短暂延迟后满血复活爬起，最多可召唤 3 波黑暗骷髅。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害加成" pValue="对城墙 5 倍伤害" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="80" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻速" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="召唤单位" pValue="4 只黑暗骷髅/次" />
    <UnitProperty pKey="特殊技能" pValue="亡魂附体 & 墓园复苏" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |黑暗骷髅等级|对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |    ---    |       ---      |
|   1  |   150   |   150    |   500  |     1     |        1       |
|   2  |   175   |   175    |   600  |     2     |        2       |
|   3  |   200   |   200    |   750  |     3     |        3       |
|   4  |   240   |   240    |   950  |     4     |        4       |
|   5  |   270   |   270    |  1200  |     5     |        5       |
|   6  |   300   |   300    |  1500  |     6     |        6       |
|   7  |   330   |   330    |  1800  |     7     |        7       |
|   8  |   360   |   360    |  2000  |     8     |        8       |
|   9  |   395   |   395    |  2200  |     9     |        9       |
|  10  |   435   |   435    |  3000  |    10     |       10       |
|  11  |   460   |   460    |  3450  |    11     |       11       |
|  12  |   500   |   500    |  3750  |    12     |       12       |
|  13  |   550   |   550    |  4000  |    13     |       13       |
|  14  |   620   |   620    |  4500  |    14     |       14       |
|  15  |   690   |   690    |  5000  |    15     |       15       |
|  16  |   760   |   760    |  5600  |    16     |       16       |
|  17  |   820   |   820    |  6400  |    17     |       17       |
|  18  |   880   |   880    |  7300  |    18     |       18       |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 黑暗骷髅 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeletons_of_Darkness_info.png" imgAlt="黑暗骷髅"
    description="白昼的粉碎者，建筑的摧毁者。只要送葬雪怪复活，这些骷髅仆从就会跟随着他重返凡间。" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeletons_of_Darkness1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻速" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |       ---      |
|   1  |    35   |    70    |   440  |        1       |
|   2  |    40   |    80    |   530  |        2       |
|   3  |    60   |   120    |   650  |        3       |
|   4  |    70   |   140    |   800  |        4       |
|   5  |    80   |   160    |  1000  |        5       |
|   6  |    90   |   180    |  1250  |        6       |
|   7  |   100   |   200    |  1600  |        7       |
|   8  |   110   |   220    |  2150  |        8       |
|   9  |   120   |   240    |  2500  |        9       |
|  10  |   130   |   260    |  2900  |       10       |
|  11  |   140   |   280    |  3100  |       11       |
|  12  |   150   |   300    |  3500  |       12       |
|  13  |   165   |   330    |  3800  |       13       |
|  14  |   185   |   370    |  4250  |       14       |
|  15  |   205   |   410    |  4650  |       15       |
|  16  |   225   |   450    |  5050  |       16       |
|  17  |   245   |   490    |  5500  |       17       |
|  18  |   265   |   530    |  6250  |       18       |

</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/09/01">
        <TimelineRow>送葬雪怪作为 WWE 联动赛季限定兵种加入游戏。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
