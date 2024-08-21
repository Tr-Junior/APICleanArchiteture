import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
    res.status(200).send({
        title: "API Clean",
        version: "0.1.0"
    });
});

export default router;
