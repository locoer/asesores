import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import auth from '../../middleware/auth'
import passport from '../../utils/passport'

const router = createRouter<NextApiRequest, NextApiResponse>();
//.use(auth)
/*passport.authenticate('local', {
  successRedirect: '/tablero',
  failureRedirect: '/usr/login'
}),*/
router
  .post(
    (req, res) => {
      res.json({ user: req.body })
    }
  )

const login = router.handler()

export default login