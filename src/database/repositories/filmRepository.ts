import AppError from "../../utils/app.Error";
import model, { FilmInput, FilmOutInput } from "../models/filmModel";

export const getAll = (): Promise<FilmOutInput[]> => {
  return model.findAll();
};

export const getById = async (id: number): Promise<FilmOutInput> => {
  const film = await model.findByPk(id);
  
  if (!film) {
    throw new AppError("NotFoundError", "Registro não encontrado", 404);
  }
  return film;
};
export const create = async (payload: FilmInput): Promise<FilmOutInput> => {
  return await model.create(payload);
};
export const update = async (
  id: number,
  payload: FilmInput
): Promise<FilmOutInput> => {
  const film = await model.findByPk(id);
  if (!film) {
    throw new Error("not found");
  }
  return await film.update(payload);
};
export const deleteById = async (id: number): Promise<void> => {
  const film = await model.findByPk(id);

  if (!film) {
    throw new Error("Registro não encontrado");
  }
  return await film.destroy();
};
