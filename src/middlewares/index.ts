import { handleErrors } from "./handleErrors.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyIdExists } from "./verifyIdExists.middlewares";
import { pagination } from "./pagination.middlewares";
import { verifyNameExists } from "./verifyNameExists.middlewares";

export default {
  handleErrors,
  validateBody,
  verifyIdExists,
  pagination,
  verifyNameExists,
};
