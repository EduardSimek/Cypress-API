/// <reference types="cypress" /> 

describe("Get Request", () => {
    var result;

    const URL = "http://localhost:3000/posts"
    it ("Validate status code of the /posts API", () => {
        result = cy.request(URL)
        result.its("status").should("equal", 200)
    })

    it("Validate /posts API containt the correct keys and values", () => {
        cy.request({
            method:"GET", 
            url: URL,
            headers: {
                accept: "application/json"
            }

        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[0]).has.property("title", "Example Json Server")

            expect(body[1]).has.property("author", "Joe")

            body.forEach(function(item){
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author: " +item["author"] + " & Title: " +item["title"])
            });


        })
    })
})