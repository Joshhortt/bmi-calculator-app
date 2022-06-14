
import {useState} from 'react';

export default function Home() {

  const [weight, setWeight] = useState('80');
	const [height, setHeight] = useState('1.80');
	const [bmi, setBmi] = useState(null);

	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				BMI <span className="text-danger">Calculator</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Calculate your BMI using weight and height
			</h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full md:mx-0 md:my-4"
						placeholder="Enter your weight (in kgs)..."
            value={weight}
						onChange={e => setWeight(e.target.value)}
          />
					<input
						className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full md:mx-0"
						placeholder="Enter your height (in meters)..."
            value={height}
						onChange={e => setHeight(e.target.value)}
          />
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-lightGrey transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
						Calculate
					</button>
				</form>
			</div>
		</div>
	);
}