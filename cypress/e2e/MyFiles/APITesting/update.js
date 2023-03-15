/// <reference types="cypress" />

describe("UPDATE Request", () => {
    const URL = "http://localhost:3000/posts/2";

    it("Update an existing post via the /posts API", () => {
      cy.request({
        method: "PUT",
        url: URL,
        body: {
          title: "Where can i buy apples",
          author: "Tom Jones"
        }
  
      }).then(response => {
          expect(response.status).to.eql(200)
      })
    });
});