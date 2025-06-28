import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";

export function Button({ children ,title, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonSteps} {...rest}>
      <Text style={styles.titleBtnSteps}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
}
