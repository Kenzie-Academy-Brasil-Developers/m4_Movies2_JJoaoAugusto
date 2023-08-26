import { z } from "zod";
import { movieCreateSchema, movieSchema, movieUpdateSchema } from "../schemas";

type Movie = z.infer<typeof movieSchema>;
type MoviesRead = Movie[];
type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieUpdate = z.infer<typeof movieUpdateSchema>;

export { Movie, MoviesRead, MovieCreate, MovieUpdate };
