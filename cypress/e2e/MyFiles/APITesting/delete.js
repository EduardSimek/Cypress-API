/// <reference types="cypress" />

describe("DELETE Request", () => {
    const URL = "http://localhost:3000/posts/4";

    it("Delete an existing post via the /posts API", () => {
      cy.request({
        method: "DELETE",
        url: URL
      }).then(response => {
          expect(response.status).to.eql(200)
      })
    });
});