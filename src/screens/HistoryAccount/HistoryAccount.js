import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { transacaoApi } from "../../services/Api";

import { Header } from "../../components/Header/Header"

import { styles } from "../Home/Style"
import { set } from "react-hook-form";

export function HistoryAccount({ title }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transacoes, setTransacoes] = useState([]);

  const [valor, setValor] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [pagadorName, setPagadorName] = useState('');
  const [recebedorName, setRecebedorName] = useState('');
  const [bancoPagador, setBancoPagador] = useState('');
  const [bancoRecebedor, setBancoRecebedor] = useState('');

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
        const response = await transacaoApi.get(`/${idClient}`,
          {
            headers: {
              "Content-Type": "application/json",
              "id-bank": "9",
              Authorization: `Bearer ${token}`,
              "id-client": idClient,
            },
          });
        console.log(response.data)
        // setValor(response.data.valor);
        // setDataHora(response.data.dataHora);
        // setPagadorName(response.data.pagadorName);
        // setRecebedorName(response.data.recebedorName);
        // setBancoPagador(response.data.bancoPagador);
        // setBancoRecebedor(response.data.bancoRecebedor);
        setTransacoes(response.data);
        console.log(transacoes);
        setLoading(false);

      } catch (error) {
        console.error("Erro ao carregar dados:", error.message);
        setLoading(false);
      }
    };
    if (!isLoading) {
      historyInfo();
    }

  }, [token, idClient, isLoading]);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>Transação #{item.id_transacao}</Text>
      <Text>Pagador: {item.pagador_name}</Text>
      <Text>Recebedor: {item.recebedor_name}</Text>
      <Text>Valor: R${parseFloat(item.valor).toFixed(2)}</Text>
      <Text>Data: {new Date(item.data_hora).toLocaleString()}</Text>
      <Text>Banco Pagador: {item.banco_pagador}</Text>
      <Text>Banco Recebedor: {item.banco_recebedor}</Text>
      <Text>Status: {item.status === 1 ? 'Concluído' : 'Pendente'}</Text>
    </View>
  );

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>Erro: {error}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Extrato'} />

    {/* arrumar o container / cards */}
      <View style={[styles.container, { marginTop: 44, height: 80 }]}>
        <FlatList
          data={transacoes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_transacao.toString()}
          ListEmptyComponent={<Text>Nenhuma transação encontrada.</Text>}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >

        <View style={styles.container}>

          <View style={styles.bodyTitle}>
            <Text style={styles.h1}>
              Histórico de transações
            </Text>

            <View style={[styles.hr, { marginTop: 16, marginBottom: 16 }]}></View>

            {/* <View style={[styles.cards, { marginTop: 44, height: 80 }]}>
              <FlatList
                data={transacoes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_transacao.toString()}
                ListEmptyComponent={<Text>Nenhuma transação encontrada.</Text>}
              />
            </View> */}

          </View>
        </View>
      </ScrollView>
    </View>
  )
}
