import { Repository } from "typeorm";
import { Movie } from "./entities";
import { AppDataSource } from "./data-source";

const moviesRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

export { moviesRepo };
