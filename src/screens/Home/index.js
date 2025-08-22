import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../../components/Header/Header";
import { Saldo } from "../../components/Saldo/Saldo";
import { styles } from "./Style";
import { infoClienteApi } from "../../services/Api";

export function Home({ navigation }) {
  const [name, setName] = useState("");

  const { token, idClient, isLoading } = useContext(AuthContext);

  console.log("Valores do contexto no Home:", { token, idClient, isLoading });

  useEffect(() => {
    const clientInfo = async () => {
      if (!token || !idClient) {
        console.log("Token ou idClient não disponíveis, redirecionando para login");
        navigation.replace("LoginStack");
        return;
      }
      try {
        const response = await infoClienteApi.get(`/${idClient}`,
          {
            headers: {
              "Content-Type": "application/json",
              "id-bank": "9",
              Authorization: `Bearer ${token}`,
              "id-client": idClient,
            },
          });
        console.log(response.data)

        if (response.data && response.data.name) {
          setName(response.data.name);
        } else {
          console.log("Nome do cliente não encontrado na resposta da API");
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
      }
    };
    if (!isLoading) {
      clientInfo();
    }
  }, [token, idClient, isLoading, navigation]);

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (!token || !idClient) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={name} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <Saldo />
          <View style={styles.hr}></View>
          <TouchableOpacity onPress={() => navigation.navigate("SendPix")}>
            <View style={styles.cards}>
              <Image
                source={require("../../../assets/icon/pix.png")}
                style={styles.iconCard}
              />
              <Text style={[styles.h2, { color: "#212529" }]}>Enviar Pix</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ReceivePix")}>
            <View style={[styles.cards, { marginTop: 16 }]}>
              <Image
                source={require("../../../assets/icon/pix.png")}
                style={styles.iconCard}
              />
              <Text style={[styles.h2, { color: "#212529" }]}>Receber Pix</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.cards, { marginTop: 16 }]}>
            <Image
              source={require("../../../assets/icon/chaves.png")}
              style={styles.iconCard}
            />
            <Text style={[styles.h2, { color: "#212529" }]}>
              Minhas chaves Pix
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("HistoryAccount")}>
            <View style={[styles.cards, { marginTop: 16 }]}>
              <Image
                source={require("../../../assets/icon/historico.png")}
                style={styles.iconCard}
              />
              <Text style={[styles.h2, { color: "#212529" }]}>Histórico</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.hr}></View>
          <View style={[styles.bodyTitle, { marginBottom: 4 }]}>
            <Text style={styles.h1}>Favoritos</Text>
          </View>
          <View style={[styles.cards, { marginTop: 16 }]}>
            <Image
              source={require("../../../assets/icon/h.png")}
              style={styles.iconCard}
            />
            <Text style={[styles.h2, { color: "#212529" }]}>Salvar chaves</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
