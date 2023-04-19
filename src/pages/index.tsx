import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='page-header'>
        {/* <h1>Home Page</h1> */}
      </div>

      <div className={'home-image'}>
        <Image
          src={'https://iili.io/638tAF.jpg'}
          alt="Home page photo not found"
          fill
          priority
          // width="600"
          // height="400"
        />
      </div>

    </>
  )
};
