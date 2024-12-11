import { Button } from "@/src/components/button";
import { Steps } from "@/src/components/steps";
import { Welcome } from "@/src/components/welcome";
import { router } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
      <Button
        onPress={() => {
          router.navigate("/home");
        }}
      >
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
