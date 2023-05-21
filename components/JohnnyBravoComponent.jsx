const JohnnyBravoComponent = () => {
	return (
		<section id="Tokenomics">
			<div className="flex flex-col justify-center items-center h-screen relative" style={{ background: `url('/johnnybravobackgroundtop_2.png') no-repeat center center`, backgroundSize: "cover" }}>
				<div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "50%", height: "220px", backgroundColor: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", border: "4px solid black", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
					<img src="/johnnybravoshowsquare_4.png" alt="Image 1" style={{ height: "70%", width: "auto" }} />
					<div className="flex flex-col justify-center" style={{ width: "70%", textAlign: "center" }}>
						<img src="/tokenomics.png" alt="Image 3" style={{ height: "100%",width: "100%", maxWidth: "100%" }} className="mt-2"/>
					</div>
					<img src="/JB-removebg-preview.png" alt="Image 3" style={{ height: "70%", width: "auto" }} />
				</div>
				<p style={{ position: "absolute", zIndex: "9999" }}>
					CA: 0x460736a29b08A6E8113B30c35d621cb6042765EA
				</p>
				<img src="/cloud.png" alt="Nuage" className="absolute top-0 h-20" style={{ left: "10%" }} />
				<img src="/cloud.png" alt="Nuage" className="absolute top-10 h-16" style={{ right: "20%" }} />
				<img src="/cloud.png" alt="Nuage" className="absolute top-20 h-12" style={{ left: "30%" }} />
				<img src="/cloud.png" alt="Nuage" className="absolute top-10 h-14" style={{ left: "50%" }} />
				<img src="/johnnybravoshowpano.png" alt="Johnny Bravo Show" className="absolute top-20 right-0 h-80 w-auto" style={{ zIndex: "9999" }} />
				<img src="/unnamed.png" alt="Bravo Logo" className="absolute top-1/4 left-1/4 transform -translate-y-1/2" style={{ height: "120px", width: "auto", zIndex: "9999" }} />
			</div>
		</section>
	);
};

export default JohnnyBravoComponent;
