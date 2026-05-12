import { Router } from "express";
import { getCountries, createCountry } from "./country.controller.js";
import { createCountryValidator } from "../../middlewares/country-validator.js";
import { validateJWT } from "../../middlewares/jwt-verify.js";
import { publicLimiter, authtenticatedLimiter } from "../../middlewares/request-limit.js";

const router = Router();

router.get("/", publicLimiter, getCountries);
router.post("/", validateJWT, authtenticatedLimiter, createCountryValidator, createCountry);

export default router;
