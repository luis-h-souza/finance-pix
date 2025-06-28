import { forwardRef } from "react";
import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";

import { styles } from "./Styles";

const Input = forwardRef(({ icon, formProps, inputProps, error = '', style }, ref) => {
  return (
    <Controller
      render={({ field }) => (
        <View style={styles.containerError}>
          <View style={styles.group}>

            <TextInput
              ref={ref}
              value={field.value}
              onChangeText={field.onChange}
              style={[styles.input, style]}
              {...inputProps}
            />
          </View>

          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
      {...formProps}
    />
  );
});

export { Input };
