import { Router } from "express";
import { moviesControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

export const moviesRouter: Router = Router();

moviesRouter.get("", middlewares.pagination, moviesControllers.read);
moviesRouter.post(
  "",
  middlewares.verifyNameExists,
  middlewares.validateBody(movieCreateSchema),
  moviesControllers.create
);
moviesRouter.patch(
  "/:id",
  middlewares.verifyIdExists,
  middlewares.verifyNameExists,
  middlewares.validateBody(movieUpdateSchema),
  moviesControllers.update
);
moviesRouter.delete(
  "/:id",
  middlewares.verifyIdExists,
  moviesControllers.destroy
);
