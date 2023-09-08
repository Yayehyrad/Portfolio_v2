"use client"
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
import Link from 'next/link';
import { useRouter , usePathname } from 'next/navigation';
 

const Nav = () => {
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  return <nav 
            className='flex flex-col   fixed h-max items-center xl:justify-center 
             gap-y-4 bottom-0 xl:right-[2%] z-50 top-0 w-full mt-auto xl:w-16 xl:max-w-md xl:h-screen'> 
    <div 
    className='flex w-full justify-between items-center xl:flex-col 
    xl:justify-center gap-y-10 px-4 md:px-40 xl:p-0 h-[80px] bg-white/10 xl:h-max xl:py-8
    text-3xl backdrop-blur-md xl:rounded-full xl:text-xl'>
    {
      navData.map((link , index)=>{
        return <Link href={link.path} key={index} 
                className={`${link.path === pathname && 'text-red-700'} relative flex 
                items-center group hover:text-red-700 transition-all duration-500`}>
          {link.icon}
          </Link>
      })
    }
    </div>
  </nav>;
};

export default Nav;
