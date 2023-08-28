import { NextFunction, Request, Response } from "express";
import { moviesRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundMovie: Movie | null = await moviesRepo.findOneBy({
    name: req.body.name,
  });

  if (foundMovie) throw new AppError("Movie already exists.", 409);

  return next();
};
