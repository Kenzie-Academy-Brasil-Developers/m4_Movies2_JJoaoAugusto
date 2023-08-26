import { Request, Response } from "express";
import { Movie } from "../entities";
import moviesServices from "../services";
import { MoviesRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await moviesServices.create(req.body);
  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const movies: MoviesRead = await moviesServices.read();
  return res.status(200).json(movies);
};

export default { create, read };
