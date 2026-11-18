---
title: "部落冲突 coc 守卫神殿详细数据"
navTitle: "守卫神殿"
shownTitle: "守卫神殿"
description: "守卫们对建筑工人对大本营的翻新改造不太满意，所以他们把整块陨石搬到了别处！前往守卫神殿升级守卫，并选择由谁来保卫你的村庄。你可以把它看作是类似于英雄王座的建筑，但更酷炫——看在皮卡的份上，快瞧瞧那块发光的太空陨石！"
module: upgrade-home
imgFolder: home_buildings/048c
wiki: https://clashofclans.fandom.com/wiki/Guardian_Shrine
canonical: /upgrade/048c-Guardian-Shrine
---

- *如想查看各守卫的数据与特性，请访问：[粉碎者](/upgrade/0841-Smasher)、[远袭者](/upgrade/0840-Longshot)、[滚木手](/upgrade/0842-Logger)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Guardian_Shrine.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 18, 19" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 守卫神殿在 19 级大本营解锁，建造免费且即时完成。升 20 本前必须在阵型中放置该建筑。
2. 在 18 本推出守卫机制时，守卫原本驻扎在大本营顶部。19 本更新后，守卫独立出来，拥有专属的防守岗位——守卫神殿。
    - 前往守卫神殿可以升级守卫，并从已解锁的守卫中选择一位指派参与村庄防守。
3. 与 [英雄王座](/upgrade/048b-Hero-Banner) 不同，守卫神殿是一座**真正的建筑物，拥有生命值**，会被敌方部队锁定为目标，并计入防守摧毁百分比。
4. 防守策略提示：
    - [粉碎者](/upgrade/0841-Smasher) 的狂暴机制与大本营绑定（当大本营被摧毁时狂暴），而不是与守卫神殿绑定。
    - 因此，将守卫神殿与大本营分开摆放，在敌方摧毁大本营后，粉碎者会获得永久狂暴状态，且此时粉碎者不会处于大本营的集中交火中心，能显著提高生存与输出时间。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="2 000" />
    <UnitProperty pKey="建造费用" pValue="免费" />
    <UnitProperty pKey="建造时间" pValue="即时完成" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/11/16">
        <TimelineRow>19 本推出，新增军事建筑：守卫神殿，守卫防守岗位正式从大本营独立。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
