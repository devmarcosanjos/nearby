import { Text, View } from "react-native";
import { Step } from "@/src/components/step";
import { s } from "./style";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      <Step
        title="Encontre estabelicimentos"
        description="Veja locais perto de você que são parceiros dos Nearby"
      />
      <Step
        title="Ative o cupom com QR Code"
        description="VEscaneie o código QR no estabelecimento para ativar o cupom"
      />
      <Step
        title="Garanta as vantavens perto de você"
        description="Ative cupons onde estiver em diferentes tipos de estabelecimentos."
      />
    </View>
  );
}
