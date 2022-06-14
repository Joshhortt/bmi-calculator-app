export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				BMI <span className="text-danger">Calculator</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
				Calculate your BMI using weight and height
			</h3>
		</div>
	);
}