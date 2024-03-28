import Image from "next/image";
import loadingAnimation from "../../public/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-40">
      <Image
        src={loadingAnimation}
        alt="Carregando..."
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loading;
