import { BookRepository } from "../domain/interfaces/BookRepository";
import { Book } from "../domain/entities/Book";

export class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(book: Book): Promise<Book> {
    return await this.bookRepository.create(book);
  }
}
