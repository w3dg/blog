import { dmsans } from "./fonts";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={`flex items-center ${dmsans.className}`}>
      <img src={picture} className="w-8 h-8 mr-4 rounded-full" alt={name} />
      <div className="text-lg italic">{name}</div>
    </div>
  );
};

export default Avatar;
