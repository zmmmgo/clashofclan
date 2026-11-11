---
title: "部落冲突 coc 都城攻城炮车升级数据"
navTitle: "攻城炮车"
shownTitle: "攻城炮车"
description: "一个带轮子的加农炮？没人能料到这招！火力强大，但是不太结实！"
module: upgrade-capital
imgFolder: capital_tech/2009
wiki: https://clashofclans.fandom.com/wiki/Raid_Cart
canonical: /upgrade/20c3-Siege-Cart
---

- *如想查看包含攻城炮车的都城兵种小队，请访问：[突袭炮车](/upgrade/2009-Raid-Cart)。*
- *如想查看驻扎攻城炮车的都城防御建筑，请访问：[突袭炮车岗哨](/upgrade/2211-Raid-Cart-Post)。*
- *如想查看夜世界的加农炮战车，请访问：[夜世界加农炮战车](/upgrade/1006-Cannon-Cart)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon_Cart1.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Cannon_Cart1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 攻城炮车是 [突袭炮车](/upgrade/2009-Raid-Cart) 的核心组成部分，进攻时与 4 名 [野蛮人](/upgrade/20c0-Barbarian) 一同部署，无法单独作为配兵出战。
2. 攻城炮车同时也是 [突袭炮车岗哨](/upgrade/2211-Raid-Cart-Post) 的防守部队（防守时没有野蛮人护送），其防御属性与进攻属性完全相同。
3. 攻城炮车的特殊技能为“奋战到底”：当车体被摧毁后，炮管仍可在原地继续开火，并获得额外的临时生命值。
4. 攻城炮车被摧毁进入奋战到底状态后，无法受到 [疗伤法术](/upgrade/2100-Healing-Spell) 的治疗效果。
5. 攻城炮车的等级取决于解锁它的 [突袭炮车训练营](/upgrade/2349-Raid-Cart-Barracks) 或对应岗哨建筑的等级。

<SmallTitle>攻城炮车的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击目标" pValue="仅地面目标" />
    <UnitProperty pKey="防守人口" pValue="25" />
    <UnitProperty pKey="移动速度" pValue="1.125 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 1.8 秒" />
    <UnitProperty pKey="攻击距离" pValue="4.5 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 奋战到底额外生命值 | 生命值 |
| ---- |  ----   |  ----   |        ----       |  ---- |
| 1 | 240 | 600 | 1200 | 2800 |
| 2 | 280 | 700 | 1400 | 3100 |
| 3 | 320 | 800 | 1600 | 3400 |
| 4 | 360 | 900 | 1800 | 3700 |
| 5 | 400 | 1000 | 2000 | 4000 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>攻击新目标的速度加快了 0.2 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/30">
        <TimelineRow>将攻城炮车的第一次攻击减慢 0.7 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>更新后，疗伤法术对被摧毁进入奋战到底状态的攻城炮车无效。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>攻城炮车随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
