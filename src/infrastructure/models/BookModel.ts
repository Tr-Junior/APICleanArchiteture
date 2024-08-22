// src/infrastructure/models/BookModel.ts
import mongoose, { Schema, Document } from 'mongoose';

// Interface combinando Document do Mongoose e o tipo Book
export interface IBookDocument extends Document {
  title: string;
  author: string;
  publishedDate: Date;
}

// Definindo o esquema do livro
const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true }
});

export const BookModel = mongoose.model<IBookDocument>('Book', BookSchema);
