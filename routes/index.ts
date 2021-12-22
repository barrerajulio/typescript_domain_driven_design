import { Router } from "express";

import container from "../container";
import Symbols from "../container/symbols";
import { HomeController } from "../http/controllers/home";

const router = Router();
const homeController = container.get<HomeController>(Symbols.HomeController);
router.get("/", homeController.hello.bind(homeController));

export default router;
