import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import auth from '../../middleware/auth'
import passport from '../../utils/passport'

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(auth)
  .post(
    passport.authenticate('local'),
    (req : any , res) => {
      res.json( req.user )
    }
  )

const login = router.handler()

export default login