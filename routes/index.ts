import { Router } from "express";

import container from "../container";
import Symbols from "../container/symbols";
import { HomeController } from "../http/controllers/home";
import { StudentController } from "../http/controllers/student";

const router = Router();
const homeController = container.get<HomeController>(Symbols.HomeController);
const studentController = container.get<StudentController>(
  Symbols.StudentController
);
router.get("/", homeController.hello.bind(homeController));
router.post("/students", studentController.register.bind(studentController));

export default router;
