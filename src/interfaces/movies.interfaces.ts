import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { Movie } from "../entities";

type MoviesRead = Movie[];
type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieUpdate = DeepPartial<Movie>;

export { MoviesRead, MovieCreate, MovieUpdate };
