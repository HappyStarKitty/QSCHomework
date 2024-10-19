// 题目管理系统
import { PrismaClient } from '@prisma/client'
import { createInterface } from 'node:readline'

const prisma = new PrismaClient()

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

// 命令行交互
rl.on('line', (l) => {
  let words = l.split(";")
  switch(words[0]){
    case 'insert single question' :
      insertSingle(words);
      break;
    case 'insert multiple question' :
      insertMultiple(words);
      break;
    case 'delete question' :
      deleteProblem(words);
      break;
    case 'find question' :
      findProblem(words);
      break;
    case 'answer question' :
      answerProblem(words);
      break;
    case 'quit' :
      rl.close();
      break;
    default :
      console.log("wrong command");
  }
})

async function main(){
  console.log("Please enter your command:")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// insert
async function insertSingle(words: string[]){
  const number_of_options = Number(words[2]);
  const number_of_right_options = 1;
  const options: string[] = words.slice(3, 3 + number_of_options);

  await prisma.problems.create({
    data: {
      question_stem: words[1],
      number_of_options: Number(words[2]),
      options: options,
      number_of_right_options: number_of_right_options,
      right_options: words[3 + number_of_options],
  },
})

  console.log("Inserted successfully")
}

async function insertMultiple(words: string[]){
  const number_of_options = Number(words[2]);
  const number_of_right_options = Number(words[3 + number_of_options])
  const options: string[] = words.slice(3, 3 + number_of_options);

  await prisma.problems.create({
    data: {
      question_stem: words[1],
      number_of_options: number_of_options,
      options: options,
      number_of_right_options: number_of_right_options,
      right_options: words[4 + number_of_options],
    }
  })

  console.log("Inserted successfully")
}

// TODO: 
/*
function insertJson{words: string[]}{

}
*/

// delete
async function deleteProblem(words: string[]){
  await prisma.problems.delete({
    where: {
      id: Number(words[1]),
    }
  })

  console.log("Delete successfully")
}

// find
async function findProblem(words: string[]){
  const problem = await prisma.problems.findUnique({
    where: {
      id: Number(words[1]),
    }
  })
  if(problem){
    console.log(`question: ${problem.question_stem}`)
    console.log(`options: ${problem?.options}`)
  }
  else{
    console.log(`Do not find the question.`)
  }
}

// answer
async function answerProblem(words: string[]){
  const problem = await prisma.problems.findUnique({
    where: {
      id: Number(words[1]),
    },
    select: {
      number_of_right_options: true,
      right_options: true,
    },
  },
);

  if(problem){
    if ( words[2] === problem.right_options ){
      console.log("Right Answer")
    }
    else {
      console.log("Wrong Answer")
    }
  }
  else{
    console.log('Dont find the question.')
  }
}
  

// change
function changeProblem(words: string[]){

}