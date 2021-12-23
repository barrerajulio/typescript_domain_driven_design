import { Container } from "inversify";

import { HomeController } from "../http/controllers/home";
import { RegisterStudentService } from "../src/shared/application/register-student-service";
import { StudentController } from "../http/controllers/student";

import Symbols from "./symbols";

const container = new Container();
container.bind(Symbols.HomeController).to(HomeController).inSingletonScope();
container.bind(Symbols.ContainerRef).toConstantValue(container);
container
  .bind(Symbols.RegisterStudentService)
  .to(RegisterStudentService)
  .inSingletonScope();
container
  .bind(Symbols.StudentController)
  .to(StudentController)
  .inSingletonScope();

export default container;
