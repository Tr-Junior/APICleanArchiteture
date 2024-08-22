
import { BookRepository } from '../domain/interfaces/BookRepository';
import { Book } from '../domain/entities/Book';

export class UpdateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(book: Book): Promise<Book | null> {
    // Atualiza o livro e retorna o documento atualizado
    return this.bookRepository.update(book);
  }
}

