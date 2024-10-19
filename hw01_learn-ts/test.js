var input = '小明   Alice Ёган  Николай    Élisabeth ';
// 请在此后继续添加代码
// 1. 以Student[]类型的变量储存你的转换结果
// 2. 统计有多少人不及格（score<60）并输出
// 清理input多余的空格
// 将input转化为数组stu_name_array
input = input.trim();
var stu_name_array = input.split(" ");
// 定义一个Student生成函数
var studentGenerate = function (stu_name) {
    var stu = { name: "name", score: 0 };
    stu.name = stu_name;
    stu.score = Math.floor(Math.random() * 100);
    return stu;
};
// 对stu_name_array应用该函数
var student_list = stu_name_array.map(studentGenerate);
// 打印结果
console.log(student_list);
