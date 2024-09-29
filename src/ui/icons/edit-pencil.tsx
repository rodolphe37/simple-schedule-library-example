import clsx from "clsx";

export const EditPencil = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={clsx(
      "icon dark:text-white hover:text-blue-600 hover:cursor-pointer active:text-blue-400",
      className
    )}
    viewBox="0 0 1024 1024"
    x="0px"
    y="0px"
    {...props}
  >
    <title>Edit</title>
    <path d="M777.763 884.227c19.23 0 34.8 16.34 34.8 36.518 0 20.148-15.568 36.49-34.8 36.49H162.427c-19.206 0-34.776-16.342-34.776-36.49 0-20.178 15.575-36.518 34.776-36.518h615.336zM160.8 834.962l83.59-234.282 136.232 142.984L160.8 834.962z m247.757-118.228l-137.39-144.157 373.487-388.832L782.04 327.9 408.558 716.734z m399.113-418.788L670.286 153.79l68.721-72.077c22.77-23.864 59.637-23.864 82.407 0l54.95 57.654c22.77 23.893 22.77 62.639 0 86.532l-68.693 72.047z"></path>
  </svg>
);
