import ChipInputContainer from './components/ChipInputContainer';

function App() {
  return (
    <div className="h-[100vh] w-full bg-gray-100 overflow-hidden px-4 md:px-28 py-14">
       <h1 className='py-4 text-center text-2xl font-bold font-primary underline underline-offset-4 text-purple-900'>Zepto Assignment</h1>
       <p className='mb-14 text-center mx-auto font-primary'>
          Developed on 15th Jan 2024 by <a href='https://www.linkedin.com/in/yash-kr/' target='_blank' rel="noreferrer" className='underline underline-offset-2 text-blue-600'>Yash Kumar</a>
       </p>
       <ChipInputContainer/>
    </div>
  );
}

export default App;
