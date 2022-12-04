const {mockRequest, mockResponse} = require("./../interceptor");
const db = require("./../../../model");
const productController = require("./../../../controller/product.controller");


describe('product controller', () => {
    let req, res;
    beforeEach(() => {
        req = mockRequest();
        res = mockResponse();
    });

    let testPayload = {
        name: "Hrk",
        categoryId: 1,
        price: 18000,
    };
    test("It should test the create method with payload", async () => {
        let spy = jest.spyOn(db.product, "create").mockImplementation(
            (testPayload) =>
            new Promise((resolve, reject) => {
                resolve(testPayload);
            })
        );
            req.body = testPayload;
        await productController.create(req, res);

        expect(spy).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(testPayload);

    });
});