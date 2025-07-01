import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "../CustomTabBar/Styles";

export function CustomTabBar({ state, descriptors, navigation }) {
  return (
    // Container principal da TabBar
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Mapeia cada rota (aba) definida no Tab Navigator */}
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          // Verifica se a aba está selecionada
          const isFocused = state.index === index;

          // Função chamada ao pressionar a aba
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            // Navega para a rota se ela não estiver selecionada
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Função chamada ao pressionar e segurar a aba
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Renderiza o botão da aba
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: 'center', padding: 4 }}>
                {/* Ícone da aba, muda de cor se estiver selecionada */}
                <View style={[
                  styles.buttonBackground,
                  { backgroundColor: isFocused ? "#C7F0E3" : "transparent" }
                ]}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? '#087F5B' : '#535353'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
