import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategory/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handler);

categoriesRoutes.get("/", listCategoriesController.handler);

categoriesRoutes.post(
    "/import", 
    upload.single("file"), 
    importCategoryController.handler
)

export { categoriesRoutes };