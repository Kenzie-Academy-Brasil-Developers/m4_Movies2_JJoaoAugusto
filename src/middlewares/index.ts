import { handleErrors } from "./handleErrors.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyIdExists } from "./verifyIdExists.middlewares";

export default { handleErrors, validateBody, verifyIdExists };
