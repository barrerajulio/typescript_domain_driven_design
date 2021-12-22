import { injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export class HomeController {
  hello(_: Request, res: Response) {
    return res.json({
      hello: "world",
    });
  }
}
