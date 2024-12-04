// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/@LombardProgress'} className='hover:text-[#13d468] transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/61566355602181'} className='hover:text-[#13d468] transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/lombard.progress'} className='hover:text-[#13d468] transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.tiktok.com/@lombard.progress'} className='hover:text-[#13d468] transition-all duration-300'>
        <RiTiktokLine />
      </Link>
    </div>
  );
};

export default Socials;
