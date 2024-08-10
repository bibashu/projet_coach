import {
  Apple,
  Laptop,

  PaletteFill,
  Wordpress,
} from "react-bootstrap-icons";
import { Card } from "../../components/Card/Card";

import { CardProgress } from "../../components/CardProgress/CardProgress";
import html from "../../assets/imgs/html.svg"
import css from "../../assets/imgs/css.svg"
import js from "../../assets/imgs/js.svg"
export default function Home() {
  return (
    <div className="p-4 sm:ml-64">
      <div className=" rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
          <Card
            title="Web Development"
            subtitle="Join over 1 million students"
            icon={<Laptop />}
            
          />
          <Card
            title="WordPress"
            subtitle="Join over 1 million students"
            icon={<Wordpress />}
          />
          <Card
            title="Graphic Design"
            subtitle="Join over 1 million students"
            icon={<PaletteFill />}
          />
          <Card
            title="iOS Dev"
            subtitle="Join over 1 million students"
            icon={<Apple />}
          />
        </div>
      </div>
      <h1 className="text-xl font-bold mb-2">My course</h1>
      <div className="p-4 bg-white  rounded-lg ">
        

<div className="text-sm font-medium text-center text-gray-500 mb-1">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <a href="#" className="inline-block p-2 border-b-2 border-transparent active rounded-t-lg hover:text-orange-500 hover:border-orange-500" aria-current="page">In progress</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-2 border-b-2 border-transparent active rounded-t-lg hover:text-orange-500 hover:border-orange-500 ">Expore</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-2 border-b-2 border-transparent active rounded-t-lg hover:text-orange-500 hover:border-orange-500  ">Incoming</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-2 border-b-2 border-transparent active rounded-t-lg hover:text-orange-500 hover:border-orange-500 ">Finished</a>
        </li>
       
    </ul>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3  justify-content-between">
          <CardProgress title="HTML" subtitle="60% - progress" src={html}  />
          <CardProgress title="CSS" subtitle="50% - progress" src={css}  />
          <CardProgress title="JavaScript" subtitle="60% - progress" src={js}  />
       
          </div>
          </div>
    </div>
  );
}
