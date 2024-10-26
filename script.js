let countriesScores = {
    // نفس الكود السابق
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
        document.getElementById('score').innerText = countriesScores[selectedCountry]; // تحديث النقاط المعروضة
        alert(`لقد حصلت على نقطة! إجمالي النقاط: ${countriesScores[selectedCountry]}`);
    }
}

function displayLeaderboard() {
    const leaderboardDiv = document.getElementById('leaderboard');
    for (const country in countriesScores) {
        leaderboardDiv.innerHTML += `<p>${country}: ${countriesScores[country]}</p>`;
    }
}

window.onload = function() {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "leaderboard.html") {
        displayLeaderboard(); // عرض لوحة المتصدرين عند تحميل الصفحة
    } else if (currentPage === "game.html") {
        const selectedCountry = localStorage.getItem('selectedCountry');
        if (!selectedCountry) {
            alert('يرجى اختيار دولة أولاً');
            window.location.href = 'index.html'; // الرجوع إذا لم يتم اختيار دولة
        }
        document.getElementById('score').innerText = countriesScores[selectedCountry]; // عرض النقاط
    }
};
