// T1
type compareFn = (a: number, b: number) => number

// T2
let compareFn1: compareFn = (a: number, b: number) => a - b;
let compareFn2: compareFn = (a: number) => a;

// T3
type AnswerType = boolean | 'true' | 'false' | '1' | '0' | {enable: boolean, interval?: number};
const answers: AnswerType[] = [true, false, 'true', 'false', '1', '0', {enable: true}, {enable: false}, {enable: true, interval: 3600}];

export function parseAutoReload(autoReload: AnswerType): false | number {
  let result: false | number = 1000;

  // 检测string类型和boolean类型
  if ( autoReload === false || autoReload === "0" || autoReload === "false"  ){
    result = false;
  }

  // 检测number类型
  else if ( typeof autoReload === "number" ){
    result = autoReload;
  }

  // 检测object类型
  else if ( typeof autoReload === "object" ){
    if ( autoReload.enable === false ){
      result = false;
    }

    /*
    else if ( Object.keys(autoReload).length === 2 ){
      result = autoReload.interval; // VScode报错可以正常运行
    }
    */

    /*
    // 判断是否有interval字段
    else if ( "interval" in autoReload ){
      result = autoReload.interval;
    }
    */

    // 判断interval字段是否赋过值
    else if ( typeof autoReload.interval === "number"){
      result = autoReload.interval;
    }
  }

  return result;
}

let answerReturn = answers.map(parseAutoReload);

console.log(answerReturn);
