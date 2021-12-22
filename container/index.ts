import { Container } from "inversify";
import { HomeController } from "../http/controllers/home";

import Symbols from "./symbols";

const container = new Container();
container.bind(Symbols.HomeController).to(HomeController).inSingletonScope();

export default container;
