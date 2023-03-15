/// <reference types="cypress" />

describe("Post, get, delete Request", () => {

  const URL = "http://localhost:3000/comments/";
  let comment = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)
  let randomPostId = Math.floor(Math.random() * 1000 + 1)
  var comments = new Array()

  it("Create a new comment", () => {

    cy.request({
        method: "POST",
        url: URL,
        body: {
          body: comment,
          postId: randomPostId
        }
  
      }).then(response => {
          expect(response.status).to.eql(201)
      })
  });

  it("Locate and assert the new comment", () => {
    cy.request({
        method:"GET", 
        url: URL,
        headers: {
            accept: "application/json"
        }
    }).then(response => {
        let body = JSON.parse(JSON.stringify(response.body))
        body.forEach(function (item) {
            comments.push(item["body"])
        });
    }).then(() => {
        var latestComment = comments[comments.length - 1]
        expect(latestComment).to.eq(comment)
    })   
  });

  it("Delete the new comment", () => {
    cy.request({
        method: "DELETE",
        url: URL + comments.length
      }).then(response => {
          expect(response.status).to.eql(200)
      })
  });
});
