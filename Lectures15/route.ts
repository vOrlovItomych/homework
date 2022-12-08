
route.get('/something', somethingController.getSomething);

route.post(
    '/something',
    validationMiddleware,
    somethingController.createSomething,
);

route.put(
    '/something/:id',
    validationMiddleware,
    somethingController.putSomething,
);

route.patch(
    '/something/:id',
    validationMiddleware,
    somethingController.patchSomething,
);

route.delete(
    '/something/:id',
    somethingController.deleteSomething,
);
