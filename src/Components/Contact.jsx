"use client"
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import Heading from './Heading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Email sending logic here (using EmailJS or your backend)
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full p-4 lg:p-0'>
      <div className='px-4 md:px-8 lg:mx-40'>
        {/* Header */}
        <Heading head="Get In Touch" desc="Have a question or project in mind? Reach out to me!" />
        

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
          
          {/* Left Side - Email Info */}
          <div className='w-full lg:w-1/3'>
            <div className='space-y-6'>
              <div>
                <p className='text-white/40 text-xs md:text-sm font-semibold mb-3'>EMAIL ADDRESS</p>
                <a href='mailto:abhijaiswal7479@gmail.com' className='text-white hover:text-emerald-400 transition font-semibold text-base md:text-lg'>
                  abhijaiswal7479@gmail.com
                </a>
              </div>
              
              <div className='h-px bg-white/10'></div>

              {/* Response Time & Available For in 2 columns on mobile, stacked on laptop */}
              <div className='grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0'>
                <div>
                  <p className='text-white/40 text-xs md:text-sm font-semibold mb-3'>RESPONSE TIME</p>
                  <p className='text-white font-semibold text-base'>12-24 hours</p>
                  <p className='text-white/60 text-xs md:text-sm mt-1'>Usually faster on weekdays</p>
                </div>

                <div className='lg:border-t lg:border-white/10 lg:pt-6'>
                  <p className='text-white/40 text-xs md:text-sm font-semibold mb-3'>AVAILABLE FOR</p>
                  <ul className='text-white/80 text-xs md:text-sm space-y-1'>
                    <li>✓ Freelance projects</li>
                    <li>✓ Full-time positions</li>
                    <li>✓ Consultations</li>
                    <li>✓ Collaborations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className='w-full lg:w-2/3'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              
              {/* Name & Email Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-white font-semibold mb-2 text-sm'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Your name'
                    className='w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition bg-white/5'
                  />
                </div>

                <div>
                  <label className='block text-white font-semibold mb-2 text-sm'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your-email@example.com'
                    className='w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition bg-white/5'
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className='block text-white font-semibold mb-2 text-sm'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder='Tell me about your project or inquiry...'
                  rows='5'
                  className='w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition bg-white/5 resize-none'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-black hover:bg-black/90 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 mt-6'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <MdArrowOutward className='text-lg' />
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <p className='text-emerald-400 font-semibold text-center text-sm'>✓ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className='text-red-400 font-semibold text-center text-sm'>Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact