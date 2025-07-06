import { View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';
import { styles } from "../Input/Styles";

export function PickerInput({ formProps, pickerProps = {}, error = '', children }) {
  return (
    <Controller
      {...formProps}
      render={({ field }) => (
        <View style={styles.containerError}>
          <View style={styles.input}>
            <Picker
              selectedValue={field.value}
              onValueChange={field.onChange}
              style={{
                color: '#212529',
                width: '100%',
                height: 56,
                backgroundColor: 'transparent',
              }}
              {...pickerProps}
            >
              {children}
            </Picker>
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    />
  );
}
