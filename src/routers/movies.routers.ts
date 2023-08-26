import { Router } from "express";
import { moviesControllers } from "../controllers";

export const moviesRouter: Router = Router();

moviesRouter.get("", moviesControllers.read);
moviesRouter.post("", moviesControllers.create);
moviesRouter.patch("");
moviesRouter.delete("");
