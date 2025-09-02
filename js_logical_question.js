// Que 1:  find the missing number from the series
const series = [23, 24, 26, 28];

let duplicateSeries = series[0];
let seriesOutput = [];

for (i = 0; i < series.length; i++) {
  let item = series[i];
  if (item != duplicateSeries) {
    seriesOutput.push(duplicateSeries);
    i--;
  }
  duplicateSeries++;
}

console.log(seriesOutput);


// Que 2:  find the missing number from the sequence
const sequence = [3, 6, 9, 15, 18, 24, 30];

let diff = 0;
const sequenceOutput = [];

for (i = 0; i < sequence.length - 1; i++) {
  
  let nextIndex = i + 1;
  if(i===0){
    diff = sequence[nextIndex] - sequence[i];
  }  

  const diffIn = sequence[nextIndex] - sequence[i];

  if (diff != diffIn) {
    const nextNum = sequence[i] + diff;
    sequenceOutput.push(nextNum);
  }
}

console.log(sequenceOutput);