describe('getBottles', function() {
  it("will get the next bottle number", function() {
    expect(getBottles(1)).to.equal("1 bottles of absinthe on the wall 1 bottles of absinth, take a slug and pass it down 0 bottles of absinthe  no more bottles of absinthe on the wall, go to the grave you cannot drink more absinthe" );
  });
});
