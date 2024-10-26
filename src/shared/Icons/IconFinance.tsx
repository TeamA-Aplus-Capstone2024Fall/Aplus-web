import { IconStyleProps } from "@shared/components/Icon";

const IconFinance = ({ size, color }: IconStyleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_154_901)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V5.5H9.5C8.57174 5.5 7.6815 5.86875 7.02513 6.52513C6.36875 7.1815 6 8.07174 6 9C6 9.92826 6.36875 10.8185 7.02513 11.4749C7.6815 12.1313 8.57174 12.5 9.5 12.5H11V15.5H7C6.44772 15.5 6 15.9477 6 16.5C6 17.0523 6.44772 17.5 7 17.5H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V17.5H14.5C15.4283 17.5 16.3185 17.1313 16.9749 16.4749C17.6313 15.8185 18 14.9283 18 14C18 13.0717 17.6313 12.1815 16.9749 11.5251C16.3185 10.8687 15.4283 10.5 14.5 10.5H13V7.5H17C17.5523 7.5 18 7.05228 18 6.5C18 5.94772 17.5523 5.5 17 5.5H13V4ZM9.5 7.5H11V10.5H9.5C9.10218 10.5 8.72064 10.342 8.43934 10.0607C8.15804 9.77935 8 9.39782 8 9C8 8.60218 8.15804 8.22065 8.43934 7.93934C8.72064 7.65804 9.10218 7.5 9.5 7.5ZM13 15.5V12.5H14.5C14.8978 12.5 15.2794 12.658 15.5607 12.9393C15.842 13.2206 16 13.6022 16 14C16 14.3978 15.842 14.7794 15.5607 15.0607C15.2794 15.342 14.8978 15.5 14.5 15.5H13Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_154_901">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconFinance;
