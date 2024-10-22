import { createInterface } from 'node:readline'
import { mapGenerate } from 'map.js'
import * as fs from 'fs';
import * as yaml from 'js-yaml';


// 读取配置文件
const fileContents = fs.readFileSync('config.yml','utf8'); // 读取yaml文件内容
const config = yaml.load(fileContents); // 解析yaml文件为js对象

const number_of_floors: number = config.number_of_floors;
const rooms_per_floor: number = config.rooms_per_floor;

// 生成随机地图
map = mapGenerate(number_of_floors, rooms_per_floor);

// 命令行交互
const rl = createInterface({
  input: process.stdin,
  output: process.stout,
})
rl.on('line',(1) => {
  console.log('Got: ' + !)
  if (1 === 'quit') rl.close()
})

