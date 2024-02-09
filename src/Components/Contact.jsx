import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='pt-56 pb-72 w-full  bg-[#101820] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/344759b7-da4c-4964-86cd-5b653e5dc8b6" method="POST">
        <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FEE715] text-gray-300'>Contact</p>
                <p className='text-[#8892b0] py-4'>Submit the form below or react me out at khokharmushahidhussain@gmail.com</p>
            </div>
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#fff]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#fff]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#fff]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div className='flex justify-center'>
        <button
          class="hover:shadow-form rounded-md items-center bg-[#6A64F1] py-3 px-12 text-base font-semibold text-white outline-none"
        >
          Let's Connect
        </button>
      </div>
    </form>
    </div>
  )
}

export default Contact;