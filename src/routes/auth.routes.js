import { Router } from "express";
import { registerUser, login, logoutUser,forgotPasswordRequest,refreshAccessToken,resetForgotPassword,changeCurrentPassword,resendEmailVerificaiton} from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { get } from "mongoose";
const router = Router();
// unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router.route("/reset-forgot-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword);
//secure routes
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/current-user").post(verifyJWT,getCurrentUser);
router.route("/change-current-password").post(verifyJWT,userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);
router.route("/resend-verification-email").post(verifyJWT,resendVerificationEmail);
export default router;
