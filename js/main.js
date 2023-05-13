function getRandomInt (a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLenght(str, len) {
  return str.length <= len;
}

let info = [];

for(let i = 0; i < 25; i++){
  photoInfo.push({
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: 'ФОТО',
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  });
}

console.log(info[24]);
