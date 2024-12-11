import { s } from "@/src/components/category/styles";
import { colors } from "@/src/styles/colors";
import { categoriesIcons } from "@/src/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
  name: string;
  iconId: string;
  isSelected?: boolean;
};

export function Category({ iconId, isSelected, name, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
