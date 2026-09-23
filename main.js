// منع القائمة اليمنى (Right Click)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // alert("حقوق الملكية محفوظة لمحمد مبروك"); // اختياري لو عايز تطلع رسالة
});

// منع اختصارات لوحة المفاتيح الخاصة بالمطورين
document.onkeydown = function(e) {
    // منع F12
    if (event.keyCode == 123) {
        return false;
    }
    // منع Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
};

// حركة صايعة: لو فتح الـ Console بطريقة ما، يطبع له تحذير
console.log("%cتوقف!", "color: red; font-size: 40px; font-weight: bold;");
console.log("%cهذا الكود محمي برمجياً. محاولة سرقة الكود تعرضك للمسائلة.", "color: white; font-size: 20px;");