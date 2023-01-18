import Image from "next/image";
import draft from "../../public/art-layer-draft-0.2.png";

function File() {
  return (
    <div className="object-contain">
      <Image src={draft} alt="me" />
    </div>
  );
}

export default File;
