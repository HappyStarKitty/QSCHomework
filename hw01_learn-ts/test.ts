import seedrandom from 'seedrandom'; // 使用第三方库
let input = '小明   Alice Ёган  Николай    Élisabeth '

type Student = {
  name: string
  score: number
}

// 请在此后继续添加代码
// 1. 以Student[]类型的变量储存你的转换结果
// 2. 统计有多少人不及格（score<60）并输出

// 将input转化为数组stu_name_array
// input = input.trim() // trim只能去除两边空格 
// 分割字符串并使用filter过滤空白字符
let stu_name_array = input.split(" ").filter((stu_name) => stu_name.trim() != "") 

// 定义一个Student生成函数
let studentGenerate = function (stu_name: string){
  let stu: Student = {name: stu_name, score: Math.floor(Math.random()*100)} 
  return stu
}

// 分数随机可重复的Student生成函数，以下来源于GPT
function studentGenerate2(stu_name: string): Student{
  const rng = seedrandom(stu_name); // seedrandom本质上是伪随机数函数
  const stu_score = Math.floor(rng() * 101); // floor向下取整，需要保证能取到上界
  return {name: stu_name, score: stu_score};
}

// 对stu_name_array应用该函数
let student_list: Student[] = stu_name_array.map(studentGenerate2)

// 打印不及格结果
console.log(student_list.filter((student) => student.score < 60)) 
// 打印不及格人数
console.log(student_list.filter((student) => student.score < 60).length) 


