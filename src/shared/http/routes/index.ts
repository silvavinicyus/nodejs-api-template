/* Your Routes */

import { Request, Response, Router } from 'express';

const router = Router();

router.use("/routes", (request: Request, response: Response) => {
  return response.json({"message": "Here goes your routes"});
})

export default router;