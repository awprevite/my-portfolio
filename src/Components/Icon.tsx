type IconProps = {
  icon: {
    title: string;
    hex: string;
    path: string;
  };
  color: string;
}

function Icon ({ icon, color }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="w-10 h-10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;