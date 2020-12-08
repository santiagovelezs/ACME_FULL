import { Router } from 'express'
const router = Router()

import * as authController from '../controllers/auth.controller'

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    )
    next()
  })
  
  router.post("/signup",  authController.signUp)  
  router.post("/signin", authController.signIn)  
  router.post("/verifyToken", authController.verifyToken)  

  export default router;
  