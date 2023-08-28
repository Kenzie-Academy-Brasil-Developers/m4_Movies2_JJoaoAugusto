import { Movie } from "../entities";
import { AppError } from "../errors";
import {
  MovieCreate,
  MovieUpdate,
  MoviesRead,
  Pagination,
  PaginationParams,
} from "../interfaces";
import { moviesRepo } from "../repositories";

const create = async (payload: MovieCreate): Promise<Movie> => {
  return await moviesRepo.save(payload);
};

const read = async ({
  page,
  perPage,
  nextPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<MoviesRead | number> =
    await moviesRepo.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
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
