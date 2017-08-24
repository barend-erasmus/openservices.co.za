// Imports
import * as express from 'express';

export class HomeRouter {

    public static async index(req: express.Request, res: express.Response) {
        res.render('home/index', {
            title: 'Home',
        });
    }
}
