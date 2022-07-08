import { Model } from "sequelize/types";
import Film, { FilmInput, FilmOutInput } from "../database/models/filmModel";
import * as repository from "../database/repositories/filmRepository";

export const getAll = async (): Promise<FilmOutInput[]> => {
  return await repository.getAll();
};
export const getById = async (id: number): Promise<FilmOutInput> => {
    return await repository.getById(id);
}
export const create = async (payload: FilmInput): Promise<FilmOutInput> => {
  return await repository.create(payload);
};
export const update = async (id: number, payload: FilmInput): Promise<FilmOutInput> => {
  return await repository.update(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await repository.deleteById(id);
};
