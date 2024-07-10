'use client';


import Ticker from '@/components/ui/ticker/ticker';


const tickerData = [
  "/icon/ticker/dcco.png",
  "/icon/ticker/hanbat.png",
  "/icon/ticker/IBM.png",
  "/icon/ticker/iworks.png",
  "/icon/ticker/pro.png",
  "/icon/ticker/Veritas.png"
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  //const baseProjectNum = 6;
  //const flagshipProject = project.slice(0, baseProjectNum);


  return (
    <>

       <Ticker>
         {tickerData.map((imgSrc, idx) => (
           <li className='ticker__item' key={`ticker__${idx}`}>
             <img src={imgSrc} alt={`ticker-item-${idx}`} />
           </li>
         ))}
       </Ticker>

      </footer>
    </>
  );
};


export default Footer;
