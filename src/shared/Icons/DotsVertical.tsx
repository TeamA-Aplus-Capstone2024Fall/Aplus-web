import { IconStyleProps } from "@shared/components/Icon";

const DotsVertical = ({ size, color }: IconStyleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6C14 4.8954 13.1046 4 12 4C10.8954 4 10 4.8954 10 6C10 7.1046 10.8954 8 12 8C13.1046 8 14 7.1046 14 6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16Z"
        fill={color}
      />
    </svg>
  );
};

export default DotsVertical;
