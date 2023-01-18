import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-warm-dark">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
