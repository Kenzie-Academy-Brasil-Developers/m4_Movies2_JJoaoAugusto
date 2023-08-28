import { Request, Response, NextFunction } from "express";
import { PaginationParams } from "../interfaces";

export const pagination = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const queryPage: number = Number(req.query.page); //offset
  const queryPerPage: number = Number(req.query.perpage); //limit

  const page: number = queryPage && queryPage > 1 ? queryPage : 1;
  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

  const baseUrl: string = "http://localgost:3000/products";
  const prevPage: string = `${baseUrl}?page=${page - 1}&perpage=${perPage}`;
  const nextPage: string = `${baseUrl}?page=${page + 1}&perpage=${perPage}`;

  const queryOrder: any = req.query.order;
  const querySort: any = req.query.sort;

  const orderOptions: Array<string> = ["asc", "desc"];
  const sortOptions: Array<string> = ["price", "duration"];

  let order: string = "";
  let sort: string = "";

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }

  if (!querySort || !(queryOrder && orderOptions.includes(queryOrder))) {
    order = "asc";
  } else {
    order = querySort;
  }

  const pagination: PaginationParams = {
    nextPage,
    perPage,
    order,
    sort,
    page: perPage * (page - 1),
    prevPage,
  };

  res.locals = { ...res.locals, pagination };

  return next();
};
