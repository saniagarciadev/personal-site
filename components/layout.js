import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-warm-dark text-white font-['Open_Sans']">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
