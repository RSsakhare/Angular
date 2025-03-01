import { WelcomePipe } from './welcome.pipe';

describe('WelcomePipe', () => {
  it('create an instance', () => {
    const pipe = new WelcomePipe();
    expect(pipe).toBeTruthy();
  });
  it("except to equal Hello foo",()=>{
    const Pipe = new WelcomePipe();
    expect(Pipe.transform("Narayan")).toEqual("Welcome ${value} to workshop on Angular");
  })
});
