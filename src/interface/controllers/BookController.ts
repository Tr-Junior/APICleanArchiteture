// src/controllers/BookController.ts
import { Request, Response } from 'express';
import { DIContainer } from '../../infrastructure/DIContainer';
import { CreateBookDto } from '../dto/CreateBookDto';
import { validate } from 'class-validator';

export class BookController {
  private getAllBooks = DIContainer.getGetAllBooksUseCase();
  private createBook = DIContainer.getCreateBookUseCase();
  private updateBook = DIContainer.getUpdateBookUseCase();
  private deleteBook = DIContainer.getDeleteBookUseCase();

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute();
    res.json(books);
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateBookDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const book = await this.createBook.execute(dto);
    res.status(201).json(book);
  }

  async update(req: Request, res: Response) {
    // Cria uma instância do DTO com os dados da requisição
    const dto = Object.assign(new CreateBookDto(), req.body);
  
    // Valida os dados do DTO
    const errors = await validate(dto);
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    try {
      // Chama o método de atualização passando o ID e o DTO
      const updatedBook = await this.updateBook.execute({
        id: req.params.id, // Obtém o ID da URL
        ...dto,           // Desestrutura o DTO para obter as outras propriedades
      });
  
      res.status(200).json({
        message: 'Livro atualizado com sucesso',
        book: updatedBook
      }); // Envia uma resposta de sucesso com a mensagem e o livro atualizado
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o livro', error });
    }
  }
  
  

  async delete(req: Request, res: Response) {
    const { id } = req.params;
  
    try {
      await this.deleteBook.execute(id);
      res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar o livro', error });
    }
  }
  
  
}
