import type AOS from "aos";
import { type AosAnimationType } from "~/types/types";

type Props = {
  animation: AosAnimationType;
  children: React.ReactNode;
};
const AnimationWrapper: React.FC<Props> = ({ animation, children }) => {
  return <div data-aos={animation}>{children}</div>;
};
export default AnimationWrapper;
