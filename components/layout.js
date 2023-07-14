import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="h-screen fixed flex flex-col justify-between bg-warm-dark text-white font-['Open_Sans'] overflow-auto">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
