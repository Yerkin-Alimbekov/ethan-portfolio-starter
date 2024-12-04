// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <Link
        href={'https://wa.me/+77014191890'}
        className='relative w-[60px] h-[60px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/whatsapp.svg'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[41px] max-h-[48px]'
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
