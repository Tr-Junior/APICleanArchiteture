// src/infrastructure/repositories/MongoBookRepository.ts
import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";
import { BookModel, IBookDocument } from "../models/BookModel";

export class MongoBookRepository implements BookRepository {
  async findAll(): Promise<Book[]> {
    const books = await BookModel.find().exec();
    return books.map(this.convertToBook);
  }

  async findById(id: string): Promise<Book | null> {
    const book = await BookModel.findById(id).exec();
    return book ? this.convertToBook(book) : null;
  }

  async create(book: Book): Promise<Book> {
    const newBook = new BookModel({
      title: book.title,
      author: book.author,
      publishedDate: book.publishedDate
    });
    await newBook.save();
    return this.convertToBook(newBook);
  }

  async update(book: Book): Promise<Book | null> {
    const updatedBook = await BookModel.findByIdAndUpdate(
      book.id,
      {
        title: book.title,
        author: book.author,
        publishedDate: book.publishedDate,
      },
      { new: true } // Retorna o documento atualizado
    ).exec();

    return updatedBook ? (updatedBook.toObject() as Book) : null;
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id).exec();
  }
  

  private convertToBook(doc: IBookDocument): Book {
    const { _id, ...book } = doc.toObject();
    return { id: _id.toString(), ...book };
  }
}
