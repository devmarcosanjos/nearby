import { Text, View } from "react-native";
import { Step } from "@/src/components/step";
import { s } from "./style";
import {
  IconMapPin,
  IconQrcode,
  IconTicket,
  IconTicTac,
} from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelicimentos"
        description="Veja locais perto de você que são parceiros dos Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="VEscaneie o código QR no estabelecimento para ativar o cupom"
      />
      <Step
        icon={IconTicket}
        title="Garanta as vantavens perto de você"
        description="Ative cupons onde estiver em diferentes tipos de estabelecimentos."
      />
    </View>
  );
}
