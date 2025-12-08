

export let initialLibrary = [
    { id: 101, title: "Harry Potter", author: "J.K. Rowling", year: 1997, quantity: 10 },
    { id: 102, title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, quantity: "5 ספרים" }, // שגיאת נתונים מכוונת
    { id: 103, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979, quantity: 3 },
    { id: 104, title: "1984", author: "George Orwell", year: 1949, quantity: 0 },
    { id: 105, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, quantity: 7 },
    { id: "abc", title: "Invalid Book", author: "Unknown", year: "invalid", quantity: 1 } // שגיאת נתונים מכוונת נוספת
];

export function filtarr(name){
        initialLibrary = name.filter(elemnt => 
            isFinite(elemnt.id) && isFinite(elemnt.year) 
        
)
}

