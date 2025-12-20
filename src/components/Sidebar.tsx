import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

import { navLinks, socialLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [active, setActive] = useState<string>('');

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='md:hidden fixed top-4 right-4 z-50 border-2 hover:border-primary
             bg-card p-3 rounded-full hover:text-primary cursor-pointer shadow-lg'
            size='icon'
          >
            <MenuIcon size={30} />
          </Button>
        </SheetTrigger>

        <SheetContent side='right' className='w-84 bg-card border-border py-6 pl-10'>
            <SheetTitle className='text-lg  font-bold '>Menu</SheetTitle>
            
            <nav className='flex flex-col gap-4'>
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                         <a href={link.link}
                            key={link.label}
                            onClick={()=>setActive(link.link)}
                            className={cn('text-muted-foreground flex items-center gap-3 hover:text-primary transition-colors duration-300 text-base ', active ===link.link && 'text-primary font-semibold')}
                         >
                            <Icon className="size-4" /> {link.label}
                         </a>
                    )
                })}
            </nav>



            <div className='mt-30'>
              <p className='pb-2 '>Socials</p>

              <div className='flex gap-3 text-muted-foreground'>
                {socialLinks.map((social,i) =>{
                  const Icon = social.icon;
                  return (
                    <a 
                      key={i} 
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className='hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary transition-colors duration-300'
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>

            </div>

        </SheetContent>
      </Sheet>
    </>

  );
};

export default Sidebar;
