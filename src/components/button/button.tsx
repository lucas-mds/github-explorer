import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export type ButtonProps = {
  isLoading?: boolean;
  children?: MuiButtonProps["children"];
  loadingIconTestID?: string;
} & MuiButtonProps;

const Button = ({
  isLoading,
  loadingIconTestID,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      onClick={(e) => {
        if (isLoading) return;
        props?.onClick?.(e);
      }}
      {...props}
    >
      {isLoading ? (
        <MoreHorizIcon
          data-testid={loadingIconTestID}
          className="animate-pulse"
        />
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
