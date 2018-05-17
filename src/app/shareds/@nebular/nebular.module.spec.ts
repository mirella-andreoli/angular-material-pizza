import { NebularModule } from './nebular.module';

describe('NebularModule', () => {
  let nebularModule: NebularModule;

  beforeEach(() => {
    nebularModule = new NebularModule();
  });

  it('should create an instance', () => {
    expect(nebularModule).toBeTruthy();
  });
});
