import {Inter, Lusitana} from 'next/font/google';

// Creates Inter with subsets: lating.... Not sure what Inter means and if its specific to anything
export const inter = Inter({ subsets: ['latin']});


//secondary font. why not Inter? why is subsets: latin included here too?
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});