import { Request, Response } from "express";
import moviesServices from "../services";
import { Pagination } from "../interfaces";
import { Movie } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;
  const movie = await moviesServices.create(body);
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
