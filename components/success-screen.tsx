export default function SuccessScreen() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
          <div className="space-y-6">
            <div className="text-6xl animate-bounce">🎉</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              The work is done!
            </h1>
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              {/* Placeholder for image - user can edit this later */}
              {/* <div className="text-center text-gray-400">
              <p className="text-sm">Upload or edit image here</p>
              <p className="text-xs mt-2">Replace this placeholder with your image</p>
            </div> */}
              {/* To add an image, replace the above div with: */}
              <img
                src="https://res.cloudinary.com/doi40g1ct/image/upload/v1770423880/Barney-the-Dinosaur_kev6yp.jpg"
                alt="Romantic moment"
                className="w-full h-64 object-contain object-center"
              />
            </div>
            <p className="text-xl md:text-2xl text-primary/70 font-medium">
              May the 14th be with you 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
