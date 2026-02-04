
import { books} from '../data'
import Discounted from "@/components/Discounted";
import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Highlights from "@/components/Highlights";
import Landing from "@/components/Landing";





export default function Home() {
 
    
   


  return (
    <div >
     <Landing />
     <Highlights />
     <Featured books={books} />
    <Discounted books={books} />
    <Explore/>
    </div>
  );
}
