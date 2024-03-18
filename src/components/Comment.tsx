import Image from "next/image";

interface Comment {
  userId: number;
  animeId: number;
  message: string;
  timestamp: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  urlProfilePicture: string;
}

const Comment = ({ user, comment }: { user: User; comment: Comment }) => {
  return (
    <div className="flex gap-x-4 2xl:gap-x-8 items-center">
      <Image
        src={user.urlProfilePicture}
        alt={"Foto de Perfil"}
        width={100}
        height={100}
        className="w-14 2xl:w-1/12 max-w-20 rounded-full"
      />
      <div>
        <p className="text-sm md:text-base 2xl:text-lg font-medium md:mb-2">
          {user.username}
        </p>
        <p className="text-sm 2xl:text-base text-[#BFBFBF]">
          {comment.message}
        </p>
      </div>
    </div>
  );
};

export default Comment;
