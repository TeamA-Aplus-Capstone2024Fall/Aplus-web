import { IconStyleProps } from "@shared/components/Icon";

const Laundry = ({ size, color }: IconStyleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00003 18.887C3.8167 18.6703 3.73736 18.4247 3.76203 18.15C3.7867 17.8753 3.9077 17.646 4.12503 17.462L5.52503 16.262C5.92503 15.9287 6.3667 15.6743 6.85003 15.499C7.33336 15.3237 7.8417 15.2363 8.37503 15.237C8.8917 15.237 9.3917 15.3247 9.87503 15.5C10.3584 15.6753 10.8 15.9293 11.2 16.262L14.1 18.737C14.3167 18.9203 14.5584 19.0537 14.825 19.137C15.0917 19.2203 15.3667 19.262 15.65 19.262C15.9334 19.262 16.204 19.2203 16.462 19.137C16.72 19.0537 16.9577 18.9203 17.175 18.737L18.575 17.537C18.7917 17.3537 19.0374 17.2703 19.312 17.287C19.5867 17.3037 19.816 17.4203 20 17.637C20.184 17.8537 20.263 18.0997 20.237 18.375C20.211 18.6503 20.0904 18.8793 19.875 19.062L18.475 20.262C18.075 20.5953 17.6334 20.8453 17.15 21.012C16.6667 21.1787 16.1667 21.262 15.65 21.262C15.1167 21.262 14.6044 21.1787 14.113 21.012C13.6217 20.8453 13.184 20.5953 12.8 20.262L9.90003 17.787C9.68336 17.6037 9.44603 17.4703 9.18803 17.387C8.93003 17.3037 8.65903 17.262 8.37503 17.262C8.09103 17.262 7.81603 17.3037 7.55003 17.387C7.28403 17.4703 7.04236 17.6037 6.82503 17.787L5.40003 18.987C5.18336 19.1703 4.9417 19.2537 4.67503 19.237C4.40836 19.2203 4.18336 19.1037 4.00003 18.887ZM6.00003 14.975V11.975L4.97503 12.525C4.7417 12.6583 4.4917 12.6877 4.22503 12.613C3.95836 12.5383 3.75836 12.384 3.62503 12.15L1.62503 8.67501C1.4917 8.44168 1.46236 8.18767 1.53703 7.91301C1.6117 7.63834 1.76603 7.43401 2.00003 7.30001L6.97503 4.42501C7.17503 4.30834 7.38336 4.20834 7.60003 4.12501C7.8167 4.04167 8.0417 4.00001 8.27503 4.00001C8.50836 4.00001 8.70836 4.07101 8.87503 4.21301C9.0417 4.35501 9.1667 4.53401 9.25003 4.75001C9.4667 5.38334 9.8167 5.91667 10.3 6.35001C10.7834 6.78334 11.35 7.00001 12 7.00001C12.65 7.00001 13.2127 6.78334 13.688 6.35001C14.1634 5.91667 14.5174 5.38334 14.75 4.75001C14.8334 4.53334 14.9627 4.35434 15.138 4.21301C15.3134 4.07167 15.5174 4.00067 15.75 4.00001C15.9827 3.99934 16.2037 4.04101 16.413 4.12501C16.6224 4.20901 16.8264 4.30901 17.025 4.42501L22 7.30001C22.2334 7.43334 22.3834 7.63334 22.45 7.90001C22.5167 8.16667 22.4834 8.41668 22.35 8.65001L20.375 12.15C20.2417 12.3833 20.0417 12.5377 19.775 12.613C19.5084 12.6883 19.2584 12.659 19.025 12.525L18 11.975V16.775C18 16.775 16.85 17.8 16.425 18.15C16 18.5 15.3798 18.5222 14.825 18.125C14.2702 17.7278 14.9424 18.209 14.825 18.125L12.175 15.85C11.6417 15.4 11.046 15.0583 10.388 14.825C9.73003 14.5917 9.0507 14.475 8.35003 14.475C7.95003 14.475 7.55437 14.5167 7.16303 14.6C6.7717 14.6833 6.38403 14.8083 6.00003 14.975Z"
        fill={color}
      />
    </svg>
  );
};

export default Laundry;