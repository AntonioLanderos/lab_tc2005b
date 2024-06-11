const db = require('../utils/database.js');


exports.Book = class {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_bookid, my_title) {
        this.title = my_title;
        this.bookid = my_bookid;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    async save(bookid, title) {
        try {
            const connection = await db();
            const result = await connection.execute(
            `INSERT INTO books (bookid, title) 
            VALUES (?, ?)`,[bookid, title]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
    //Este método servirá para buscar un usuario por username
    //Es estático ya que a diferencia de save(), el primero se guarda al crear un usuario siempre, pero en este segundo podmeos buscar un usuario sin crear un nuevo objeto usuario.
    async fetchAll() {
        try {
            const connection = await db();
            const result = await connection.execute('SELECT title FROM books');
            await connection.release();
            return result; 
        } catch (error) {
            throw error; 
        }
    }    

    async update(bookid, title) {
        try {
            const connection = await db();
            const result = await connection.execute('UPDATE riesgo SET title = ? WHERE bookid = ?', [title, bookid]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }

    async get_book(bookid) {
        try {
            const connection = await db();
            const result = await connection.execute('Select bookid, title from books WHERE bookid = ?', [bookid]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
}
