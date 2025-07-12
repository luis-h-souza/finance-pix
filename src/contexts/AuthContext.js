import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [idClient, setIdClient] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAuth = async () => {
      try {
        console.log("Iniciando recuperação de token e id_client");
        // Atraso de 1 segundo para depuração
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Iniciando recuperação de token e id_client");

        const token = await AsyncStorage.getItem("token");
        const idClient = await AsyncStorage.getItem("id_client");
        console.log("Token recuperado:", token, "ID Client:", idClient);

        // Atualiza os estados mesmo se apenas um valor for encontrado
        if (token) {
          setToken(token);
        }
        if (idClient) {
          setIdClient(idClient);
        }
        if (!token || !idClient) {
          console.log("Token ou idClient não encontrados no AsyncStorage", { token, idClient });
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do AsyncStorage:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ token, idClient, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
