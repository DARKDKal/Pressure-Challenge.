// تعريف الدول العربية بالنقاط الافتراضية
let countriesScores = {
    "الأردن": 0,
    "فلسطين": 0,
    "الإمارات": 0,
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
    "قطر": 0,
    "موريتانيا": 0,
    "جيبوتي": 0,
    "الصومال": 0,
    "جزر القمر": 0
};

// دالة لإضافة نقطة للدولة المختارة
function addPoint() {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (selectedCountry) {
        countriesScores[selectedCountry] += 1;
        localStorage.setItem('countriesScores', JSON.stringify(countriesScores));
        document.getElementById('score').innerText = countriesScores[selectedCountry];
    }
}

// دالة لعرض لوحة المتصدرين
function displayLeaderboard() {
    const leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.innerHTML = ""; // تفريغ المحتوى الحالي

    for (const country in countriesScores) {
        leaderboardDiv.innerHTML += `<p>${country}: ${countriesScores[country]}</p>`;
    }
}

// تحميل النقاط المحفوظة وعرضها عند بدء `leaderboard.html`
window.onload = function() {
    const savedScores = JSON.parse(localStorage.getItem('countriesScores'));
    if (savedScores) {
        countriesScores = savedScores; // تحديث الدول بالنقاط المحفوظة
    }
    displayLeaderboard();
};
