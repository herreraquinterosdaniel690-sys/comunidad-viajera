import { Router } from "express";
import { createPlace, getPlacesByCountry } from "./place.controller.js";
import { uploadPlaceImage } from "../../middlewares/file-uploader.js";
import { processFileUpload } from "../../middlewares/process-file-upload.js";
import { createPlaceValidator } from "../../middlewares/place-validator.js";
import { validateJWT } from "../../middlewares/jwt-verify.js";
import { publicLimiter, authtenticatedLimiter } from "../../middlewares/request-limit.js";

const router = Router();

router.post(
  "/",
  validateJWT,
  authtenticatedLimiter,
  uploadPlaceImage.single("imagen"),
  processFileUpload,
  createPlaceValidator,
  createPlace
);

router.get("/:countryId", publicLimiter, getPlacesByCountry);


export default router;
