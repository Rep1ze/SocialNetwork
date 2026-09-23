class Book{
    constructor(id,title,author,year,isAvailable){
        this.id = id,
        this.title = title,
        this.author = author,
        this.year = year,
        this.isAvailable = isAvailable
    }
    getInfo(){
        
        return(this.title + this.author + this.year)
    }
}
const anotherBook = new Book(2, "Мастер и Маргарита ", "Михаил Булгаков ", 1967);
console.log(anotherBook.getInfo())
class Library{
    constructor(books){
        this.books = new Array()
        
    }
    AddBooks(books){
        this.books.push(books)
    } // ((id) => id === books.id)
    FindBooks(id){
        const findbooks = this.books.find(book => book.id === id)
        if(findbooks == undefined){
            return false
        }else{
            return findbooks
        }
    }
    DeleteBooks(id){
        const findIndex = this.books.findIndex(a => a.id === id)
        if(findIndex === -1){
            return false 
        }
        this.books.splice(findIndex,1)
    }
    AllBooks(books){
        return this.books
    }
    AllAvailableBooks(books){
        return this.books.filter(book => book.isAvailable === true)
    }
    
}

function findbooks(){
    if(Book.id === id){
        return(Book)
    }
}

