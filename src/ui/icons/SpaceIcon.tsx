const SpaceIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-4 "
      {...props}
    >
      <rect width="51" height="51" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51 12.2978L30.9505 3.05341C26.7696 1.12567 21.935 1.2247 17.8365 3.32203L0 12.4496V39.9379L19.6908 48.4118C23.5257 50.0621 27.8748 50.0395 31.6924 48.3495L51 39.802V36.5121L23.6321 24.4389L15.7553 28.7195V13.2806L6.21918 18.3292V33.4026L2.48691 35.4148V22.0242V14.6406L18.1013 6.87251C22.0507 4.90773 26.6646 4.7809 30.7159 6.52573L47.9788 13.9606V31.7504C47.9788 32.3425 48.3248 32.8801 48.8637 33.1253C49.8639 33.5805 51 32.8493 51 31.7504V12.2978ZM7.0484 33.0002V18.9147L12.0237 20.5245V30.5855L7.0484 33.0002Z"
        className="fill-gray-400 dark:fill-white"
      />
    </svg>
  );
};

export default SpaceIcon;
