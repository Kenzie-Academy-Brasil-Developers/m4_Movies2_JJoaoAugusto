import { Movie } from "../entities";
import { AppError } from "../errors";
import { MovieCreate, MovieUpdate, MoviesRead } from "../interfaces";
import { moviesRepo } from "../repositories";

const create = async (payload: MovieCreate): Promise<Movie> => {
  return await moviesRepo.save(payload);
};

const read = async (): Promise<MoviesRead> => {
  return await moviesRepo.find();
};

const update = async (
  foundMovie: Movie,
  payload: MovieUpdate
): Promise<Movie> => {
  return await moviesRepo.save({ ...foundMovie, ...payload });
};

const destroy = async (foundMovie: Movie): Promise<void> => {
  await moviesRepo.remove(foundMovie);
};

export default { create, read, update, destroy };
