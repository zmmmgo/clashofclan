---
title: "部落冲突 coc 都城骷髅升级数据"
navTitle: "骷髅"
shownTitle: "骷髅"
description: "这些不死生物独自行动时并不具备什么威胁，但它们从不单打独斗，而是成群结队，并肩作战！"
module: upgrade-capital
imgFolder: capital_tech/20c1
wiki: https://clashofclans.fandom.com/wiki/Skeleton/Clan_Capital
canonical: /upgrade/20c1-Skeleton
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 都城骷髅是 [骷髅飞桶](/upgrade/2007-Skeleton-Barrel)、[骷髅召唤法术](/upgrade/2105-Graveyard-Spell) 和 [飞行堡垒](/upgrade/2008-Flying-Fortress) 的派生兵种，不能单独部署。
2. 都城骷髅的属性不会随母体单位升级而提升，母体升级时只会增加召唤骷髅的数量。
3. 与家乡和夜世界的骷髅不同，都城的骷髅可以触发陷阱（但需要至少 2 个骷髅才会触发）。

<SmallTitle>骷髅的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击目标" pValue="仅地面目标" />
    <UnitProperty pKey="防守人口" pValue="0" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="每秒伤害" pValue="25" />
    <UnitProperty pKey="每次伤害" pValue="25" />
    <UnitProperty pKey="生命值" pValue="30" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>将触发陷阱所需的骷髅数量从 1 个增加到 2 个。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>都城骷髅随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>