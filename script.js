const intro = document.body.querySelector('.intro')
const surprise = document.body.querySelector('.surprise')

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


async function show(){
    intro.style.opacity = '0';
    await delay(700)
    intro.style.display = 'none';
    surprise.style.display = 'block';
    await delay(20)
    surprise.style.opacity = '1';
}