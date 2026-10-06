import { Router } from "express";
import { createProfile, deleteProfile, getAllProfiles, getProfileById, updateProfile } from "../controllers/profile.controller.js";
import { validate } from "../middlewares/validate.js";
import { newProfileValidation, updateProfileValidation, validateProfileIdParam } from "../middlewares/validations/profile.validations.js";

const profileRoutes = Router();

profileRoutes.post("/profiles", newProfileValidation, validate, createProfile);
profileRoutes.get("/profiles", getAllProfiles);
profileRoutes.get("/profiles/:id", validateProfileIdParam, validate, getProfileById);
profileRoutes.put("/profiles/:id", updateProfileValidation, validate, updateProfile);
profileRoutes.delete("/profiles/:id", validateProfileIdParam, validate, deleteProfile);

export { profileRoutes };// import { Router } from "express";

// const profileRoutes = Router()

// profileRoutes.post("/profiles")
// profileRoutes.get("/profiles")
// profileRoutes.get("/profiles/:id")
// profileRoutes.put("/profiles/:id")
// profileRoutes.delete("/profiles/:id")

// export { profileRoutes }