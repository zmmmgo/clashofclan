---
title: "部落冲突 coc 都城部落营房数据"
navTitle: "部落营房"
shownTitle: "部落营房"
description: "你在家乡村庄之外的家。为了美景而来，为了精彩的突袭而留下。"
module: upgrade-capital
imgFolder: capital_buildings/2500
wiki: https://clashofclans.fandom.com/wiki/Clan_House
canonical: /upgrade/2500-Clan-House
---

- *如想查看部落营房的各种自定义外观组件，请访问：[都城部落营房组件一览](/p/6637)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Clan_House.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="未入住营房" imgSrc="Vacant_House_1A.png" />
        <UnitImg imgTitle="原版外观" imgSrc="Clan_House_Old.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 10" />
    <BuildingNumRow title="建筑数量" num="    50" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 都城山顶共有 50 座部落营房，对应部落最多 50 名成员。
2. 部落营房无需建造费用，加入部落后自动分配一座营房；若部落人数未满 50 人，空余的营房会显示为“未入住营房”。
3. 玩家可以通过更换屋顶、外墙、地面和装饰物来自定义自己部落营房的外观。离队后重新加入新部落时，之前保存的营房外观配置会自动继承。
4. 部落营房无法升级，也不算作解锁后续都城大本营的前置建筑计数，但在突袭进攻中需要被摧毁才能达到 100% 摧毁率。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="800" />
    <UnitProperty pKey="建造费用" pValue="无" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="20" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/12/12">
        <TimelineRow>部落营房开放自定义外观功能，原外观被新版营房外观替换。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>部落营房随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
