---
title: "部落冲突 coc 英雄王座（战旗）详细数据"
navTitle: "英雄王座"
shownTitle: "英雄王座（英雄战旗）"
description: "英雄王座为防守村庄的英雄提供了一个防守岗位，在受到进攻时无法被摧毁。"
module: upgrade-home
imgFolder: home_buildings/048b
wiki: https://clashofclans.fandom.com/wiki/Hero_Banner
canonical: /upgrade/048b-Hero-Banner
---

- *英雄的升级与详细信息请访问：[英雄殿堂](/upgrade/0489-Hero-Hall)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hero_Banner_Empty.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各英雄战旗外观</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="未指派英雄" imgSrc="Hero_Banner_Empty.png" />
        <UnitImg imgTitle="野蛮人之王" imgSrc="Hero_Banner_BK.png" />
        <UnitImg imgTitle="弓箭女皇" imgSrc="Hero_Banner_AQ.png" />
        <UnitImg imgTitle="亡灵王子" imgSrc="Hero_Banner_MP.png" />
        <UnitImg imgTitle="大守护者" imgSrc="Hero_Banner_GW.png" />
        <UnitImg imgTitle="飞盾战神" imgSrc="Hero_Banner_RC.png" />
        <UnitImg imgTitle="飞龙公爵" imgSrc="Hero_Banner_DD.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7 - 8, 9 - 10, 11 - 12, 13 - 19" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2,       3,       4" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 英雄王座（防守战旗）是在村庄阵型中用来标记防守英雄巡逻站位的建筑，每座英雄王座只能指派一名英雄驻守。
2. 英雄王座无需在商店购买，而是随着 [英雄殿堂](/upgrade/0489-Hero-Hall) 的升级自动解锁。阵型中必须放置所有已解锁的英雄王座才能升级大本营。
    - 拥有更多的英雄王座可以让更多英雄参与防守（最多同时指派 4 名英雄防守）。
3. 英雄王座本身**没有生命值，也不会被敌方部队锁定为目标**，因此不会计入防守摧毁率（摧毁百分比）。
    - 但与其他障碍物不同，英雄王座周围 1 格范围内仍会阻挡敌军下兵。
4. 防守形态：
    - 除 [亡灵王子](/upgrade/0204-Minion-Prince) 和 [飞龙公爵](/upgrade/0205-Dragon-Duke) 为空中飞行防守外，其余英雄（包括 [大守护者](/upgrade/0202-Grand-Warden)）在防守时均只能以地面部队形态参与战斗。
5. 英雄王座本身不可升级，指派给战旗的防守英雄属性取决于该英雄在 [英雄殿堂](/upgrade/0489-Hero-Hall) 中的等级与配置。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="无（无法被摧毁）" />
    <UnitProperty pKey="建造费用" pValue="免费（随英雄殿堂解锁）" />
    <UnitProperty pKey="建造时间" pValue="即时完成" />
</UnitProperties>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/28">
        <TimelineRow>游戏新增飞龙公爵，英雄王座新增飞龙公爵专属战旗。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，重做英雄管理系统，原英雄底座被移除，引入英雄殿堂与英雄王座（防守战旗）机制。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
