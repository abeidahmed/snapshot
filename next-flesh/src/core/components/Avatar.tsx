interface AvatarProps {
  alt: string;
  src?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ alt, src, size = 9 }) => {
  const avatarSize = `w-${size} h-${size}`;
  const avatarClasses = `${avatarSize} rounded-full flex-shrink-0`;

  if (src) {
    return <img className={avatarClasses} src={src} alt={alt} />;
  }

  return (
    <img
      className={avatarClasses}
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt={alt}
    />
  );
};

export default Avatar;
