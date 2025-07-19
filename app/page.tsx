import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger),SplitText;

export default function Home() {
  return (
    <div className="text-5xl font-bold text-center text-orange-400">
      Hi
    </div>
  );
}
