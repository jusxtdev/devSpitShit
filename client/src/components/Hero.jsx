function Hero() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16 md:w-1/2 lg:w-1/1.3 px-6">
        {/* Title */}
        <div id="title" className="animate-fade-in-up">
          <p className="font-iosveka text-5xl md:text-7xl text-center text-[#171717]">
            devSayShit
          </p>
          <div className="mt-3 mx-auto w-10 h-px bg-[#171717]" />
        </div>

        {/* About text */}
        <div id="about" className="animate-fade-in-up delay-200">
          <p className="font-inter text-center text-[#525252] leading-relaxed max-w-xl text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            ipsum ipsa suscipit aliquam, sequi modi qui enim fuga repudiandae
            iure molestias, voluptas corrupti aspernatur praesentium! Distinctio
            veritatis totam fugit dolores deserunt eveniet esse rem, at dolore
            aspernatur, voluptatibus iste illo dolorum pariatur earum, et
            exercitationem. Repellat atque minima facilis nostrum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
