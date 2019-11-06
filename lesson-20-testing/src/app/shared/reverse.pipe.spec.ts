/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

const pipe = new ReversePipe();

describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    expect(pipe.transform('test')).toBe('tset');
  });
});
