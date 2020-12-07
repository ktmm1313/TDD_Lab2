describe("translate", function () {
  //tests go in here
  //1. Multiple tests for words starting with different vowels.
  //a. These tests are correct and pass.

  it("word starting with a", function () {
    expect(translate("AirPlane")).toEqual("airplaneway");
  });

  // 2. At least one test for words starting with one consonant.
  // a. These tests are correct and pass.
  it("word starting with a consonant", function () {
    expect(translate("YELLOW")).toEqual("ellowyay");
  });

  // 3. At least one test for words starting with two consonants.
  // a. These tests are correct and pass.
  it("word starting with two consonants", function () {
    expect(translate("triAL")).toEqual("ialtray");
  });

  //4. At least one test for words starting with three consonants.
  // a. These tests are correct and pass.
  it("word starting with three consonants", function () {
    expect(translate("RRRobot")).toEqual("obotrrray");
  });

  //5. At least one test checking for lower case conversion.
  // a. These tests are correct and pass.

  it("all lowercase", function () {
  //expect(word.toLowerCase).toBeDefined();
  expect(translate("APPLE")).toEqual("appleway");
});

})
