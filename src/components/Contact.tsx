import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import SectionHeader from './SectionHeader';
import { ToastContainer } from './ui/toast';

import { fadeUp } from '@/lib/animation';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  company: z.string().optional(),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS credentials are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
      
        console.log('EmailJS not configured. Form data:', values);
        setToast({
          message: 'Email service not configured. Please contact directly via email.',
          type: 'error',
        });
        setIsSubmitting(false);
        setTimeout(() => setToast(null), 5000);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          company: values.company || 'Not provided',
          phone: values.phone || 'Not provided',
          message: values.message,
          to_name: 'Abhishek', // Your name
        },
        publicKey
      );
      
      setToast({
        message: 'Message sent successfully! I will get back to you soon.',
        type: 'success',
      });
      
      
      form.reset();
    } catch (error) {
      console.log('EmailJS Error:', error);
      setToast({
        message: 'Failed to send message. Please try again or contact me directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
        <SectionHeader
            title={`Let's make something awesome together`}
            subtitle='contact'
        />

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className='w-full mx-auto space-y-4 mt-10'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input type='text' placeholder='your name'
                                    {...field}
                                    className='border-0'
                                    /> 
                                    
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='company'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input
                                    type='text' placeholder='your company name'
                                    {...field}
                                    className='border-0'
                                    /> 
                                    
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input type='email' placeholder='your@example.com'
                                    {...field}
                                    className='border-0'
                                    /> 
                                    
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input type='tel' placeholder='+123456789'
                                    {...field}
                                    className='border-0'
                                    /> 
                                    
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

            
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                  <Textarea placeholder=' Write your message...'
                                    {...field}
                                    className='border-0 h-36'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type='submit' size='lg' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
            </form>
        </Form>

        <ToastContainer toast={toast} onClose={() => setToast(null)} />
    </motion.section>
  )
}

export default Contact