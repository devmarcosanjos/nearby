import { Steps } from "@/src/components/steps";
import { Welcome } from "@/src/components/welcome";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
    </View>
  );
}
