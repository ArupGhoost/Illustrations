
import './App.css';
import Svg1 from './Svg1';
import Svg2 from './Svg2';
import Svg3 from './Svg3';

function App() {
  return (
    <div className="App">
        <div>
          <nav className='flex justify-between items-center pt-5 px-5 md:px-24'>
            <a href='%'><h1 className='text-indigo-500 font-sans text-xl'>Ghost Web</h1></a>
            <div className=''>
              <a href='#' className='pr-2 text-indigo-500 md:pr-5'>About</a>
              <a href="#" className='pl-2 text-indigo-500 md:pl-5'>Sign In</a>
            </div>
          </nav>
          <div className='grid grid-cols-1 pr-3 pl-12 lg:pl-24 md:grid-cols-2 md:pt-6  sm:grid-cols-1'>
            <div className='pt-12 md:pt-24'>
              <p className='text-red-500 text-4xl md:text-5xl lg:text-6xl'>Do You Want to be a Full-Stack Developer</p>
              <div className='pt-5'>
                <a href="#" className='bg-indigo-500 text-white border solid border-indigo-500 px-4 py-2 shadow'>Join Us</a>
              </div>
            </div>
            <div className='mr-12'>
              <Svg1 />
            </div>
          </div>

            <div className='pt-24 m-auto md:pt-28 md:auto sm:pt-24'>
            <div className='text-center'>
               <h2 className='text-3xl  text-indigo-500 md:text-4xl lg:text-5xl'>Some Of Our Courses includes-</h2>
            </div>

            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3 md:pt-10'>
               <div className='pt-8 px-24 md:px-12 lg:px-24 '>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border rounded shadow-2xl'>HTML & CSS</p>
               </div>

               <div className='pt-8 px-24 md:px-12 lg:px-24'>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border rounded shadow-2xl'> JavaScript</p>
               </div>

               <div className='pt-8 px-24 md:px-12 lg:px-24'>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border rounded shadow-2xl'>React</p>
               </div>

               <div className='pt-8 px-24 md:px-12 lg:px-24'>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border rounded shadow-2xl'>NodeJs</p>
               </div>

               <div className='pt-8 px-24 md:px-12 lg:px-24'>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border rounded shadow-2xl'>Express</p>
               </div>

               <div className='pt-8 px-24 md:px-12 lg:px-24'>
               <p className='bg-red-500 text-center text-gray-200 py-1 text-2xl border roundeds shadow-2xl'>MongoDB</p>
               </div>

            </div>
            </div>
               
               <div className='pt-24 pl-8 grid gap-7 grid-cols-1 md:grid-cols-2 md:pl-18 lg:grid-cols-2 lg:pl-24'>
               <div>
                 <Svg2 />
                 </div>
                 <div className='md:pt-12 lg:pt-24'> 
                    <p className='shadow-lg text-red-500 text-2xl font-sans md:text-2xl lg:text-3xl'>Not Only we provide courses 
                    but also Live Projects which will help you
                     to crack yours Interviews..</p>
                 </div>
               </div>
                
                    
               <div className='pt-40 pl-8 grid gap-7 grid-cols-1 md:grid-cols-2 md:pl-18 lg:grid-cols-2 lg:pl-24 '>
               <div className='md:pt-12 lg:pt-24'> 
                    <p className='shadow-lg text-indigo-500 text-2xl font-sans md:text-2xl lg:text-3xl'> 
                   We have the best mentors and teachers with vast experience from 
                   various software companies.. </p>
                 </div>
               <div className='order-first md:order-last'>
                 <Svg3 />
                 </div>
                
               </div> 
            
            <div className='text-center mb-28 pt-24 md:pt-48'>
                 <h3 className='text-4xl  text-red-500 md:text-6xl'>Join Today</h3>
                 <div className='pt-14'>
                   <form >
                     <input id='email' type='text' placeholder='Enter Your Email...' className='w-2/5 p-3 border border-red-500 solid outline-none'  required/>
                     <button className='ml-3 bg-indigo-500 px-5 py-3 text-white' type='submit'>Submit</button>
                   </form>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default App;
