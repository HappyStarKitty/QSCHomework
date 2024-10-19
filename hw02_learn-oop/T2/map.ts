// 房间
/*
房间类型有怪物房间（monster）、事件房间（event）、商店房间（shop）、宝箱房间（chest）、休息房间（rest）
每层最后一个房间通向下一层
公主在最上层最后一个房间，默认为事件房间
*/
class Room {
  name: string; // 房间类型
  next: Room[] | null; // 出口列表 // 字段必要性存疑
  floor: number; // 房间所在尖塔层数 // 字段必要性存疑
  course: number; // 房间在当前层进度 // 字段必要性存疑

  constructor(name: string, next: Room[] | null, floor: number, course: number ){
    this.name = name;
    this.next = next;
    this.floor = floor;
    this.course = course;
  }
}

/*
地图生成规则：
一个房间至多有三个出口，即left、straight、right
触发怪物事件玩家立刻死亡，游戏结束
否则继续前行，直至找到公主
游戏确保存在至少一条通关路线
*/

// 生成地图种子，地图为有向图 // 死去的离散数学在攻击我，完全不会
// floor随机生成函数
function floorGenerate(rooms_per_floor){

}
// map随机生成函数
export function mapGenerate(number_of_floors: number, rooms_per_floor){

}



