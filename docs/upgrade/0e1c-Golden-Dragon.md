---
title: "部落冲突 coc 黄金巨龙（临时兵种）升级数据"
navTitle: "黄金巨龙"
shownTitle: "黄金巨龙（临时兵种）"
description: "光彩夺目、威风凛凛、实力超群！黄金巨龙已强势加入你的常规部队！有它在，谁还需要战术？"
module: upgrade-temp
imgFolder: temp_troops/0e1c
wiki: https://clashofclans.fandom.com/wiki/Golden_Dragon
canonical: /upgrade/0e1c-Golden-Dragon
---

- *如想查看常驻常规兵种飞龙，请访问：[飞龙](/upgrade/0008-Dragon)。*
- *如想查看常规超级兵种超级飞龙，请访问：[超级飞龙](/upgrade/0108-Super-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Golden_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Golden_Giant_Dragon.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 黄金巨龙最早作为单人模式（哥布林关卡）“巨龙巢穴”中的终极 Boss 登场，玩家首次将其击败可获得“屠龙勇士”成就；2026 年 5 月在限时活动中首次作为多人联机对战的附加临时兵种登场。
2. 临时兵种无法在实验室中升级，其属性在活动期间固定，且无法向部落成员捐赠。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="100" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻速" pValue="1.25 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|  --- |  ----   |   ----   |  ----  |       ---      |
|   1  |  1400   |   1750   | 32000  |      1 - 18    |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/05/02">
        <TimelineRow>黄金巨龙在限时活动中首次可用于多人联机对战，每个玩家可在进攻中额外获得 20 条黄金巨龙。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2026/04/27">
        <TimelineRow>黄金巨龙的人口占用由 50 调整为 100。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2018/10/23">
        <TimelineRow>黄金巨龙作为单人模式第 75 关“巨龙巢穴”的守关 Boss 加入游戏。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
