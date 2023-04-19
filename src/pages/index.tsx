import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='page-header'>
      </div>

      <div className={'home-image'}>
        <Image
          src={'https://iili.io/638tAF.jpg'}
          alt="Home page photo not found"
          fill
          priority
        />
      </div>
    </>
  )
};
