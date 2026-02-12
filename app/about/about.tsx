export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Border Collies</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Border Collies are highly intelligent and energetic herding dogs originating from the border region between Scotland and England. They are widely regarded as one of the smartest dog breeds in the world.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Characteristics</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Medium-sized with athletic build</li>
                        <li>Incredibly intelligent and trainable</li>
                        <li>Exceptional herding and working instincts</li>
                        <li>High energy levels requiring regular exercise</li>
                        <li>Loyal and devoted to their families</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Care Requirements</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Border Collies thrive with plenty of physical exercise, mental stimulation, and training. They excel in dog sports like agility, flyball, and obedience competitions. Without adequate engagement, they may develop behavioral issues.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perfect For</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Border Collies are ideal for active families, farmers, and handlers who can provide them with meaningful work and companionship. They are not recommended for sedentary lifestyles.
                    </p>
                </section>
            </div>
        </div>
    );
}