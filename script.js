const countries = {
    "الأردن": 0,
    "فلسطين": 0,
    "السعودية": 0,
    "مصر": 0,
    "المغرب": 0,
    "العراق": 0,
    "الجزائر": 0,
    "تونس": 0,
    "ليبيا": 0,
    "لبنان": 0,
    "سوريا": 0,
    "السودان": 0,
    "اليمن": 0,
    "عمان": 0,
    "الكويت": 0,
    "البحرين": 0,
    "قطر": 0
};

function updateLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // تفريغ محتوى لوحة المتصدرين
    for (const [country, score] of Object.entries(countries)) {
        const entry = document.createElement('div');
        entry.textContent = `${country}: ${score}`;
        leaderboard.appendChild(entry);
    }
}

// قم بإضافة أي كود آخر تحتاجه.
