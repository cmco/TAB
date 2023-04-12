import { FadeInProps } from ' @component/types';
import { animated, useInView } from '@react-spring/web';

const FadeIn = ({
  id,
  children,
  translateLeft,
  translateRight,
  duration,
  delay = 0,
}: FadeInProps) => {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      transform: translateLeft
        ? 'translateX(-100%)'
        : translateRight
        ? 'translateX(100%)'
        : '',
    },
    to: {
      delay: delay,
      opacity: 1,
      transform: translateLeft
        ? 'translateX(0)'
        : translateRight
        ? 'translateX(0)'
        : '',
    },
    config: { duration: duration ? duration : 500 },
  }));

  return (
    <animated.div ref={ref} id={id ? id : ''} style={springs}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
