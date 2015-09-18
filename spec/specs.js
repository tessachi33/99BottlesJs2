describe('getBottles', function() {
  it("will get the next bottle number", function() {
    expect(getBottles(99)).to.equal(98);
  });
});
