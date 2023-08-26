import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { MovieCreate, MoviesRead } from "../interfaces";

const create = async (payload: MovieCreate): Promise<Movie> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = await repo.save(payload);

  return movie;
};

const read = async (): Promise<MoviesRead> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movies: MoviesRead = await repo.find();
  return movies;
};

export default { create, read };
