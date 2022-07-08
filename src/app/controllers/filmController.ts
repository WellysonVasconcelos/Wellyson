import Film, { FilmInput, FilmOutInput } from "../../database/models/filmModel";
import * as service from "../../services/filmService";

export const getAll = async (): Promise<FilmOutInput[]> => {
  return await service.getAll();
};
export const getById = async (id: number): Promise<FilmInput> => {
    return await service.getById(id);
};
export const create = async (payload: FilmInput): Promise<FilmOutInput> => {
  return await service.create(payload);
};
export const updateById = async (id: number, payload: FilmInput) => {
  return await service.update(id, payload);
};
export const deleteById = async (id: number): Promise<void> => {
  await service.deleteById(id);
};
