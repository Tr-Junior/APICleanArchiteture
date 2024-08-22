import { BookRepository } from "../domain/interfaces/BookRepository";

export class DeleteBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
