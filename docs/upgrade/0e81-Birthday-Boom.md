---
title: "部落冲突 coc 生日大爆炸升级数据"
navTitle: "生日大爆炸"
shownTitle: "生日大爆炸"
description: "为生日庆典献上一份爆炸性惊喜。这份精美礼物可以对附近的敌军建筑和部队造成伤害和眩晕效果。"
module: upgrade-temp
imgFolder: temp_others/0e81
wiki: https://clashofclans.fandom.com/wiki/Birthday_Boom
canonical: /upgrade/0e81-Birthday-Boom
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Birthday_Boom.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 该法术最早于 2017 年 8 月（5 周年庆）推出，后在 2026 年 8 月 14 周年庆限时狂欢活动中回归，大本营达到 10 级及以上的玩家可在进攻中额外获得 15 个生日大爆炸法术。
2. 使用该法术时，落地后炸弹爆炸，对目标区域内的敌军建筑和部队造成范围伤害并附带 2 秒眩晕效果。防守方点击留下的礼物可以获得 5000 圣水。
3. 生日大爆炸法术对大本营造成的伤害减少 30%（即造成 70% 伤害，500 基础伤害中对大本造成 350 伤害）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="伤害半径" pValue="2.5 格" />
    <UnitProperty pKey="击晕时长" pValue="2 秒" />
    <UnitProperty pKey="占据的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  总伤害  |对大本伤害|对应的大本等级|
| ---- |   ---   |   ---   |      ----   |
|   1  |   500   |   350   |    10 - 18  |

</UnitTable>

\* 2017 年首次推出时，该法术的伤害根据大本等级（5 ~ 10 本）缩放，公式为 92 + 28n（n 为大本等级），伤害在 232 ~ 372 之间。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/08/03">
        <TimelineRow>该法术在 14 周年庆限时狂欢活动中回归，10 本及以上玩家可在进攻中额外获得 15 个生日大爆炸法术，有效期至 2026/08/05。</TimelineRow>
        <TimelineRow>本次回归中法术伤害调整为 500（对大本营伤害为 350）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/08/25">
        <TimelineRow>该法术在 5 周年庆法师代替建筑工活动中首次推出，有效期至 2017/09/07。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>