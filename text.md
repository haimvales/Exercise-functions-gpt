שלבי הפרויקט:
שלב 0: הגדרת הנתונים (Data Setup)
נתחיל עם מערך של אובייקטים המייצגים ספרים. חלק מהנתונים מכילים שגיאות מכוונות כדי לאפשר שימוש בפונקציות הסינון והבדיקה.

const initialLibrary = [
    { id: 101, title: "Harry Potter", author: "J.K. Rowling", year: 1997, quantity: 10 },
    { id: 102, title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, quantity: "5 ספרים" }, // שגיאת נתונים מכוונת
    { id: 103, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979, quantity: 3 },
    { id: 104, title: "1984", author: "George Orwell", year: 1949, quantity: 0 },
    { id: 105, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, quantity: 7 },
    { id: "abc", title: "Invalid Book", author: "Unknown", year: "invalid", quantity: 1 } // שגיאת נתונים מכוונת נוספת
];


שלב 1: ניקוי נתונים ועיבוד ראשוני#
עליך ליצור פונקציה ש:#
תשתמש ב-filter כדי לסנן ספרים שבהם גם ה-id וגם ה-year הם מספרים סופיים (finite numbers) באמצעות isFinite.#
תשתמש ב-map כדי ליצור מערך חדש המכיל רק את שמות הספרים (titles).#
תשתמש ב-toString כדי להמיר את המערך החדש למחרוזת.#
תשתמש ב-join כדי להמיר את המחרוזת בחזרה למחרוזת אחת עם מפריד של פסיק ורווח (", ").#
פונקציות בשימוש: filter, isFinite, map, toString, join#
שלב 2: ניהול מלאי - שינויים והוספות#
עליך ליצור פונקציה ש:#
תשתמש ב-unshift כדי להוסיף ספר חדש בתחילת המערך המקורי (לאחר הניקוי).#
תשתמש ב-shift כדי להסיר את הספר הראשון (שהרגע הוספת או שהיה שם).#
תשתמש ב-for loop רגיל כדי לעבור על המערך המעודכן, ולהגדיל את כמות הספרים (quantity) ב-1 עבור כל ספר.#
תשתמש ב-length כדי לקבוע את תנאי הסיום של הלולאה.#
פונקציות בשימוש: unshift, shift, for, length#
שלב 3: חיפוש ומיון#
עליך ליצור פונקציה ש:#
תשתמש ב-find כדי למצוא את האובייקט של הספר "1984".#
תשתמש ב-findIndex כדי למצוא את האינדקס של הספר "Pride and Prejudice".#
תשתמש ב-some כדי לבדוק האם קיים לפחות ספר אחד שנכתב לפני שנת 1900.#
תשתמש ב-sort כדי למיין את המערך המקורי לפי שנת הוצאה (מהישן לחדש).#
פונקציות בשימוש: find, findIndex, some, sort#
שלב 4: כלים מתקדמים ופחות שכיחים#
עליך ליצור פונקציה ש:#
תשתמש ב-Object.keys עבור האובייקט של הספר "Harry Potter" כדי לקבל מערך של המפתחות (keys).#
תשתמש ב-reverse כדי להפוך את סדר המפתחות.#
תשתמש ב-[...arr.keys()] (או Array.from(arr.keys())) כדי ליצור מערך חדש של אינדקסים עבור המערך המקורי.
תשתמש ב-slice כדי ליצור עותק שטחי (shallow copy) של שלושת הספרים הראשונים במערך הממוין.
תשתמש ב-at() כדי לגשת לספר האחרון במערך הממוין באופן בטוח.#
תשתמש ב-valueOf() כדי להציג את הערך הפרימיטיבי של המערך המקורי (זו פונקציה שמופעלת אוטומטית במקרים רבים, אך ניתן לקרוא לה במפורש).#
תשתמש ב-forEach כדי להדפיס לקונסול את כותרת הספר והמחבר עבור כל ספר במערך הראשי./
פונקציות בשימוש: Object.keys, reverse,# [...arr.keys()] (או תחליף), slice, at, valueOf, forEach
קוד לדוגמה (פתרון חלקי):#
תוכל למלא את הפונקציות הבאות כדי לפתור את האתגר:#



prototype.valueOf
this
valueOf
פרוייקט
מחלקות


// שלב 0: הנתונים
const initialLibrary = [
    { id: 101, title: "Harry Potter", author: "J.K. Rowling", year: 1997, quantity: 10 },
    { id: 102, title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, quantity: "5 ספרים" },
    { id: 103, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979, quantity: 3 },
    { id: 104, title: "1984", author: "George Orwell", year: 1949, quantity: 0 },
    { id: 105, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, quantity: 7 },
    { id: "abc", title: "Invalid Book", author: "Unknown", year: "invalid", quantity: 1 }
];

// שלב 1
function cleanAndProcessTitles(books) {
    const validBooks = books.filter(book => isFinite(book.id) && isFinite(book.year)); // שימוש ב-filter ו-isFinite

    const titlesArray = validBooks.map(book => book.title); // שימוש ב-map

    const titlesStringified = titlesArray.toString(); // שימוש ב-toString

    const finalTitlesString = titlesArray.join(", "); // שימוש ב-join
    
    console.log("שלב 1 תוצאה:", finalTitlesString);
    return validBooks;
}

// שלב 2
function manageInventory(books) {
    console.log(`כמות ספרים לפני הוספה: ${books.length}`); // שימוש ב-length
    
    books.unshift({ id: 106, title: "New Arrival", author: "Mystery", year: 2024, quantity: 5 }); // שימוש ב-unshift

    console.log(`כמות ספרים אחרי הוספה: ${books.length}`);

    books.shift(); // שימוש ב-shift

    console.log(`כמות ספרים אחרי הסרה: ${books.length}`);

    // שימוש ב-for loop
    for (let i = 0; i < books.length; i++) {
        if (isFinite(books[i].quantity)) { // בדיקה נוספת
           books[i].quantity++;
        }
    }
    console.log("שלב 2 תוצאה: המלאי עודכן עבור ספרים תקינים.");
    return books;
}

// ... המשך לשלבים 3 ו-4 ...
