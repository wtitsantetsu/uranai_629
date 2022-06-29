const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=> {
    const num = Math.random();
    if (num < 0.2) {
        result.textContent = 'ラッキー';
    }else if (num < 0.4) {
        result.textContent = 'まあまあ';
    }else if (num < 0.8) {
        result.textContent = 'きをつけて';
    }else{
        result.textContent = 'さいあく';
    }
});

