import {
  AlertCircleIcon,
  ArrowLeft01Icon,
  Cancel01Icon,
  Moon02Icon,
  ViewIcon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react-native";

import { colors } from "@/theme/tokens";

export type IconName = "back" | "eye" | "eye-off" | "alert" | "close" | "moon";

const ICONS: Record<IconName, IconSvgElement> = {
  back: ArrowLeft01Icon,
  eye: ViewIcon,
  "eye-off": ViewOffSlashIcon,
  alert: AlertCircleIcon,
  close: Cancel01Icon,
  moon: Moon02Icon,
};

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function Icon({
  name,
  size = 24,
  color = colors.chalk,
  strokeWidth = 2,
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={ICONS[name]}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
}
