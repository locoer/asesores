import * as GoogleSocialLogin from "cypress-social-logins"

module.exports = (on, config) => {
  on("task", {
    GoogleSocialLogin: GoogleSocialLogin.plugins,
  })
}