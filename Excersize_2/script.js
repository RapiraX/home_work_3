const schoolGrades = [5,4,3,5,4,3,3,4,5,5,2,5,3,4];

let arithmeticMean = 0;
let gradeSum = 0;

for (let schoolGrade of schoolGrades) {
    gradeSum += Number(schoolGrade);
}

arithmeticMean = Math.round(gradeSum / schoolGrades.length);

console.log(`Средняя оценка ${arithmeticMean}`);



