import { Request, Response } from "express";
import { Movie } from "../entities";
import moviesServices from "../services";
import { MoviesRead, Pagination } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;
  const movie: Movie = await moviesServices.create(body);
  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const movies: Pagination = await moviesServices.read(pagination);
  return res.status(200).json(movies);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;
  const { body } = req;
  const movie: Movie = await moviesServices.update(foundMovie, body);
  return res.status(200).json(movie);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;
  await moviesServices.destroy(foundMovie);
  return res.status(204).json();
};

export default { create, read, update, destroy };
