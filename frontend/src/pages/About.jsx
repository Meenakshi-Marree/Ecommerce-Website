import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
          <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo aspernatur quas exercitationem? Sunt, reiciendis vero rerum nulla officiis esse illo culpa ad sapiente at, ipsum deleniti quod recusandae. Quisquam, nisi!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur iure, laudantium blanditiis voluptas perferendis architecto provident deleniti aspernatur enim facilis explicabo amet quis, laboriosam, quae beatae consequatur aliquid ea. Eum.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum cupiditate velit. Porro maiores, asperiores architecto natus odit suscipit perspiciatis, distinctio molestiae nemo saepe assumenda ipsam culpa. Autem, cupiditate dolores.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, autem?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, neque!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Expectional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nulla.</p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
