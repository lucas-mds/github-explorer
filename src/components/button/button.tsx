import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type ButtonProps = {
  isLoading?: boolean;
} & MuiButtonProps;

const Button = ({ isLoading, ...props }: ButtonProps) => {
  return (
    <MuiButton
      onClick={(e) => {
        if (isLoading) return;
        props?.onClick?.(e);
      }}
      {...props}
    >
      {isLoading ? <MoreHorizIcon className="animate-pulse" /> : props.children}
    </MuiButton>
  );
};

export default Button;
