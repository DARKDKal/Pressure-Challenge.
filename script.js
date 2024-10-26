let countriesScores = {
    "الأردن": 0,
    "مصر": 0,
    "السعودية": 0,
    "فلسطين": 0,
    "الإمارات": 0,
    "العراق": 0,
    "الكويت": 0,
    "عمان": 0,
    "قطر": 0,
    "البحرين": 0,
    "تونس": 0,
    "المغرب": 0,
    "الجزائر": 0,
    "ليبيا": 0,
    "السودان": 0,
    "اليمن": 0,
    "الصومال": 0,
    "جيبوتي": 0,
    "موريتانيا": 0,
    "مالي": 0,
    // يمكنك إضافة المزيد من الدول هنا
};

function startGame() {
    const selectedCountry = document.getElementById('countryDropdown').value;
    if (selectedCountry) {
        localStorage.setItem('selectedCountry', selectedCountry);
        window.location.href = 'game.html'; // الانتقال إلى صفحة اللعبة
    } else {
        alert('يرجى اختيار دولة أولاً');
    }
}

function showLeaderboard() {
    window.location.href = 'leaderboard.html'; // الانتقال إلى صفحة لوحة المتصدرين
}

function goBack() {
    window.location.href = 'index.html'; // الرجوع إلى صفحة اختيار الدول
}

function goToLeaderboard() {
    window.location.href = 'leaderboard.html'; // الرجوع إلى لوحة المتصدرين
}

function addPoint() {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (selectedCountry) {
        countriesScores[selectedCountry] += 1; // زيادة النقاط
        document.getElementBy