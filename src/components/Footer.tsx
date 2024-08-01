import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <footer className='w-full bg-gray-100 py-2 md:fixed bottom-0'>
      <div className='flex flex-col gap-3 sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 text-center sm:text-left'>
          <a
            href='#'
            className='font-bold text-gray-600 hover:text-gray-900 transition-colors'
          >
            About Us
          </a>
          <a
            href='#'
            className='font-bold text-gray-600 hover:text-gray-900 transition-colors'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='font-bold text-gray-600 hover:text-gray-900 transition-colors'
          >
            Contact Us
          </a>
        </div>
        <h1 className='text-gray-600 text-center sm:text-left'>
          &copy; Copyright © 2024- Aryan
        </h1>
        <div className='flex justify-center sm:justify-end gap-5 text-gray-600'>
          <a
            href='https://www.linkedin.com/in/aryan-yadav-240140267/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinOutlined
              className='hover:text-gray-900 transition-colors'
              style={{ fontSize: 30 }}
            />
          </a>
          <a
            href='https://yadavaryan.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterOutlined
              className='hover:text-gray-900 transition-colors'
              style={{ fontSize: 30 }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
