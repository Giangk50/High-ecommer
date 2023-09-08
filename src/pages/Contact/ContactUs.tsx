import { Link } from 'react-router-dom'
import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'

function ContactUs() {
  return (
    <>
      <div
        className='relative flex min-h-screen items-center bg-slate-300'
        style={{
          backgroundImage:
            'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb-about_1950x.jpg?v=1632970793)'
        }}
      >
        <div className='absolute left-14'>
          <h2 className='text-6xl font-semibold text-white'>We're High team</h2>
          <p className='my-7 font-medium text-white'>Follow your passsion, and success will follow you</p>
          <button className='font-bold hover:text-hover'>Shop Now</button>
        </div>
      </div>
      <div className=' mt-5'>
        <Link to={path.home} className='text-main-text'>
          Home
        </Link>
        <span> / </span>
        <span>Contact</span>
      </div>
      <LabelBenefits />
    </>
  )
}

export default ContactUs
