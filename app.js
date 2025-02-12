const quotes = ['If you fall asleep now, you will dream. If you study now, you will live your dream.',
 'When you think it’s too late, the truth is, it’s still early.',
 'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.',
 'Studying is not about time. It’s about effort.',
 'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
 'Success only comes with self-management and determination.',
 'If you don’t walk today, you’ll have to run tomorrow.',
 'The level of education is in direct correlation with your salary.',
 'When today is over, it will never come back.',
 'Even now, your enemies are eagerly flipping through books.'
]
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
    "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
    "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
    "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
];
const p = document.querySelector('p');
setInterval(() => {
    p.textContent = quotes[Math.floor(Math.random()* quotes.length)];
    p.style.color = colors[Math.floor(Math.random()* colors.length)]
}, 3000);