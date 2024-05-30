import { Book } from "./Book";
import "./index.css";

const bookUrls = [
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585371/Other/it_othe9w.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716584375/Other/csps_dgkayq.png",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585302/Other/rt_rbjyen.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585253/Other/awf_ne3sdj.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585142/Other/adsfasf_tcezpz.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585223/Other/ddia_h1iafb.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585070/Other/eaf_qvryaq.jpg",
  "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585915/Other/eafe_rkkvei.jpg",
];

function App() {
  return (
    <main className="flex flex-col items-center justify-center py-10  z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#858484_1px)] bg-[size:20px_20px]">
      <ul className="grid grid-cols-3 gap-10">
        {bookUrls.map((url) => (
          <li key={url}>
            <Book href={url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
