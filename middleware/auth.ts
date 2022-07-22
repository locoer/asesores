import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import passport from "../utils/passport";
import session from '../utils/session'

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(
    session({
      name: 'asesores',
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    })
  )
  .use(passport.initialize())
  .use(passport.session())

const auth = router.handler()

export default auth