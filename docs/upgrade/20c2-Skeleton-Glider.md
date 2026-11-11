---
title: "部落冲突 coc 都城骷髅飞骑升级数据"
navTitle: "骷髅飞骑"
shownTitle: "骷髅飞骑"
description: "骷髅兵身材矮小，很难越过城墙。好在骨头和滑翔翼足够轻巧，让它能轻松飞过去！"
module: upgrade-capital
imgFolder: capital_tech/2008
wiki: https://clashofclans.fandom.com/wiki/Flying_Fortress/Skeleton_Glider
canonical: /upgrade/20c2-Skeleton-Glider
---

- *如想查看搭载骷髅飞骑的母体兵种，请访问：[飞行堡垒](/upgrade/2008-Flying-Fortress)。*
- *如想查看夜世界或都城中相似的突袭兵种，请访问：[野猪飞骑](/upgrade/100a-Hog-Glider) 或 [都城野猪突袭队](/upgrade/200b-Hog-Raiders)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Glider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Skeleton_Glider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 骷髅飞骑是 [飞行堡垒](/upgrade/2008-Flying-Fortress) 受到伤害时分裂出的派生兵种，无法单独部署。
2. 骷髅飞骑会飞向最近的防御建筑并发动撞击造成伤害，撞击后或被击落时均会释放出 3 个 [骷髅](/upgrade/20c1-Skeleton) 继续战斗。
3. 骷髅飞骑在撞击目标时不会像野猪飞骑那样造成击晕效果。
4. 骷髅飞骑的等级取决于解锁它的 [飞行堡垒工坊](/upgrade/2348-Flying-Fortress-Yard)（或母体飞行堡垒）的等级。

<SmallTitle>骷髅飞骑的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="攻击方式" pValue="攻击一次后爆出骷髅" />
    <UnitProperty pKey="爆出的骷髅数量" pValue="3" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击目标" pValue="仅地面目标" />
    <UnitProperty pKey="防守人口" pValue="0" />
    <UnitProperty pKey="移动速度" pValue="2.25 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="即时" />
    <UnitProperty pKey="攻击距离" pValue="0.25 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 撞击伤害 | 生命值 |
| ---- |  ----   |  ----  |
| 1 | 130 | 200 |
| 2 | 140 | 250 |
| 3 | 150 | 300 |
| 4 | 160 | 350 |
| 5 | 170 | 400 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>骷髅飞骑随着部落都城及飞行堡垒一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
