import { BookRepository } from "../domain/interfaces/BookRepository";
import { Book } from "../domain/entities/Book";

export class GetAllBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }
}
