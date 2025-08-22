import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { transacaoApi } from "../../services/Api";
import { Header } from "../../components/Header/Header";
import { styles } from "./Styles";

export function HistoryAccount({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transacoes, setTransacoes] = useState([]);
  const { token, idClient, isLoading } = useContext(AuthContext);

  useEffect(() => {
    const historyInfo = async () => {
      if (!token || !idClient) {
        console.log("Token ou idClient não disponíveis, redirecionando para login");
        navigation.replace("LoginStack");
        return;
      }
      setLoading(true);
      try {
        const response = await transacaoApi.get(`/${idClient}`, {
          headers: {
            "Content-Type": "application/json",
            "id-bank": "9",
            Authorization: `Bearer ${token}`,
            "id-client": idClient,
          },
        });
        setTransacoes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };
    if (!isLoading) {
      historyInfo();
    }
  }, [token, idClient, isLoading, navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={[styles.cardText, styles.title]}>Transação #{item.id_transacao}</Text>
      <Text style={[styles.cardText, styles.pagador]}>Pagador: {item.pagador_name}</Text>
      <Text style={[styles.cardText, styles.recebedor]}>Recebedor: {item.recebedor_name}</Text>
      <Text style={styles.cardText}>Valor: R${parseFloat(item.valor).toFixed(2)}</Text>
      <Text style={styles.cardText}>Data: {new Date(item.data_hora).toLocaleString()}</Text>
      <Text style={styles.cardText}>Banco Pagador: {item.banco_pagador}</Text>
      <Text style={styles.cardText}>Banco Recebedor: {item.banco_recebedor}</Text>
      <Text style={styles.cardText}>
        Status: {item.status === 1 ? "Concluído" : "Pendente"}
      </Text>
    </View>
  );


  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>Erro: {error}</Text>;

  return (
    <View>
      <Header title={'EXTRATO'} />

      <View style={styles.bodyTitle}>
        <Text style={styles.title}>Histórico de transações</Text>
        <View style={[styles.hr, { marginTop: 16, marginBottom: 16 }]} />
      </View>

      <FlatList
        data={transacoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_transacao.toString()}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma transação encontrada.</Text>}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
}
