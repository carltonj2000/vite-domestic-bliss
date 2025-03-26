import dbFull from "./assets/121779741_large_1639676654.jpg";
import dbPitch4 from "./assets/121781317_large_1639715133.jpg";
import dbPitch5 from "./assets/121779745_large_1639676742.jpg";
import Climb from "./Climb";
import Approach from "./Approach";
import Comments from "./Comments";

function Link({ src, text }: { src: string; text: string }) {
  return (
    <>
      <h3 className="mt-3">{text}</h3>
      <a href={src}>
        <img src={src} alt={text} />
      </a>
    </>
  );
}

function App() {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold py-2 bg-rose-400">
        Domestic Bliss Climb
      </h1>
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-2 mt-2">
        <Climb />
        <Approach />
        <h2 className="text-lg font-semibold">Pictures</h2>
        <Link src={dbFull} text="Full Route" />
        <Link src={dbPitch4} text="Pitch 4" />
        <Link src={dbPitch5} text="Top Of Pitch 5" />
        <Comments />
      </div>
    </div>
  );
}

export default App;
