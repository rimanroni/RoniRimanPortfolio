import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Banner from "./Banner";
import Container from "./Container";

const Headers = () => {

    const navItems = [
        {title:'Home', link:'home', delay:0},
        {title:'About', link:'about', delay:.1},
        {title:'Skills', link:'skills', delay:.2},
      
    ]
    return (
        <div id='header' className='py-4 px-8   bg-textColor   ' >
             <div  className='   mx-auto items-center flex justify-between'>
                 <div className="object-cover hidden lg:block">
                   <img src="/images/logo.png" alt="" className="w-[80px]" />
                 </div>
                 <div>
                    <ul className="tracking-wide text-base font-bold ml-8 lg:ml-0 flex items-center text-white ">
                       {
                        navItems.map((item)=>(
                            <motion.p key={item.link}
                              initial={{x:-10, opacity:0}}
                              animate={{x:1,opacity:100}}
                              transition={{duration:.1, delay:item.delay}}
                            >
                                <Link
                                to={item?.link}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="relative py-1 duration-500 rounded cursor-pointer mr-2 px-3 hover:bg-red-500 ">{item.title} 
                                    
                                    </Link>
                            </motion.p>
                        ))
                       }
                        <motion.button 
                        initial={{x:-10, opacity:0}}
                        animate={{x:1,opacity:100}}
                        transition={{duration:.2, delay:.3}}
                        className="bg-btnColor opacity-90 hover:opacity-100 rounded ml-4 lg:ml-0  text-white px-2 py-1"><Link
                        to={'resume'}
                                smooth={true}
                                offset={-80}
                                duration={500}
                        >
                        Hire Me
                        </Link></motion.button>    
                        
                    </ul>
                 </div>
             </div>

             <Container id={'home'}>
                <Banner/>
             </Container>
        </div>
    );
};

export default Headers;