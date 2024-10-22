// 玩家
export interface Player {
  name: string; // 昵称
  job: "Fighter" | "Mage" | "Dragoon"; // 职业 // 暂不考虑职业的附属效果
  blood: number; // 血量
  attack: number; // 攻击力
  defense: number; // 防御力
  weapon: Weapon | null; // 武器
  armor: Armor | null; // 防具
}

//TODO：武器interface
export interface Weapon {
  name: string; // 武器名称
  stats: "physics" | "fire" | "ice"; // 伤害类型
  effect(); // 攻击效果

}

//TODO：设定一系列武器

//TODO： 防具interface
export interface Armor {
  name: string; // 防具名称

  effect(); // 防御效果
}

//TODO：设定一系列防具

// 怪物
export interface Monster {
  name: string; // 名称
  race: "Orc" | "Elf" | "Dragon"; // 种族 // 暂不考虑种族的附属效果
  blood: number; // 血量
  attack: number; // 攻击力
  defense: number; // 防御力
}
