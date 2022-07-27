/// <reference types="cypress" />

describe("Login page", () => {
  before(() => {
    cy.log(`Visiting https://localhost.tld of Asesores`)
    cy.visit("/")
  })
  it("Login with Google", () => {
    const username = Cypress.env("GOOGLE_USER")
    const password = Cypress.env("GOOGLE_PW")
    const loginUrl = `${Cypress.env("SITE_NAME")}/api/auth/signin`
    const cookieName = Cypress.env("COOKIE_NAME")
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: false,
      logs: true,
      isPopup: true,
      loginSelector: `form[action="${Cypress.env("SITE_NAME")}/api/auth/signin/google"] button`,
      postLoginSelector: "#user_info",
    }

    return cy
      .task("GoogleSocialLogin", socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies()

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop()
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          })

          Cypress.Cookies.defaults({
            preserve: cookieName,
          })

          // remove the two lines below if you need to stay logged in
          // for your remaining tests
          //cy.contains("erick")

          cy.visit("/api/auth/signout")
          cy.get("form").submit()
        }
      })
  })
})