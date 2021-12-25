import { Router } from "express";
import { CreateCategoryController } from "./database/controllers/CreateCategoryController";
import { CreateVideoController } from "./database/controllers/CreateVideoController";
import { DeleteCategoryController } from "./database/controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./database/controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./database/controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);

export { routes };
