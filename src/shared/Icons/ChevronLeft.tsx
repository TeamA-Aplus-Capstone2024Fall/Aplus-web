import { IconStyleProps } from "@shared/components/Icon";

const ChevronLeft = ({ size, color }: IconStyleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.707 16.586L11.121 12L15.707 7.414L14.293 6L8.29297 12L14.293 18L15.707 16.586Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;
