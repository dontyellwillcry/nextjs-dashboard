import AcmeLogo from '@/app/ui/acme-logo';
import styles from './ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';



import Link from 'next/link';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape}></div>  {/*This is the module css form of styling. Notice it being imported up above. */}
          <div
            // This is the tailwind className format. Instead of the css. They both achive the same styling
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />
          {/* importing lusitana from the fonts.ts and applying them to the className */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* Here, you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, 
            these should be an aspect ratio identical to the source image.
            You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens. 
            This sets the CSS class for the image. In Next.js, you can use CSS classes to style your components. 
            In this case, it's using CSS classes to control the visibility of the image based on the screen size. 
            The class "hidden" is applied by default, but if the screen width is at least the size defined by the "md" breakpoint (usually medium-sized screens), 
            the "block" class is applied. This is likely done for responsive design, showing the image only on medium-sized screens and larger. */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          {/* Similar to the first image, this sets the CSS class for the mobile image. However, 
          in this case, it's using the "block" class by default, but the "hidden" class is applied if the screen width is at least the "md" breakpoint. 
          This will hide the image on medium-sized screens and larger, making it visible only on smaller screens, 
          which is typically the behavior you'd want for a mobile-specific image. */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
    </main>
  );
}
