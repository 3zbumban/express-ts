import { describe } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../src/app"

describe("[t] basic app test", () => {
    describe("GET /v1", () => {
        it("should return a json response", (done) => {
            request(app)
                .get("/v1")
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    else {
                        console.log(res.body);
                        expect(res.body).to.have.property("message").to.equal("🦀");
                        done()
                    }
                });
        })
    })
})