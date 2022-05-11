describe('webOS TV', () => {
  describe('TV Connection', () => {
    it('should be true', async () => {
      expect.assertions(1);
      await expect(Promise.resolve(true)).resolves.toBe(true);
    });
  });
});
