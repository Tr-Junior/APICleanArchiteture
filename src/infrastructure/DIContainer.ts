import { MongoBookRepository } from "./repositories/MongoBookRepository";
import { GetAllBooks } from "../use-cases/GetAllBooks";
import { CreateBook } from "../use-cases/CreateBook";
import { UpdateBook } from "../use-cases/UpdateBook";
import { DeleteBook } from "../use-cases/DeleteBook";

class DIContainer {
  private static _bookRepository = new MongoBookRepository();

  static getBookRepository() {
    return this._bookRepository;
  }

  static getGetAllBooksUseCase() {
    return new GetAllBooks(this.getBookRepository());
  }

  static getCreateBookUseCase() {
    return new CreateBook(this.getBookRepository());
  }

  static getUpdateBookUseCase() {
    return new UpdateBook(this.getBookRepository());
  }

  static getDeleteBookUseCase() {
    return new DeleteBook(this.getBookRepository());
  }
}

export { DIContainer };
