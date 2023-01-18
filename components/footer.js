import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 bg-black/10 ">
      <Container>
        <div className="py-3 px-10 text-white/50 flex flex-row justify-end">
          <p>2023 Sania García</p>
        </div>
      </Container>
    </footer>
  );
}
