import films from "./filmRoute";
import express, {Router} from 'express';

const routes = express.Router();

routes.use("/films", films);

export default routes;