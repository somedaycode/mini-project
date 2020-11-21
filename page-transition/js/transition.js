import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.from(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' }).To(
      to,
      0.5,
      { height: '2vh' },
      {
        height: '90vh',
        top: '10%',
        onComplete: function () {
          from.remove();
          done();
        },
      }
    );
  }

  out({ from, done }) {
    done();
  }
}

export default Fade;
