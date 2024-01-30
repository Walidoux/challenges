import { Lock, Box, MessageCircle, Icon } from "react-feather";

export interface AttributesIcons {
  [key: string]: Icon | undefined;
}

export const attributesIcons: AttributesIcons = {
  password: Lock,
  comment: MessageCircle,
  test: Box,
};
