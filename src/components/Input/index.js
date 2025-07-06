import { forwardRef } from "react";
import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";

import { styles } from "./Styles";

const Input = forwardRef(({ formProps, inputProps = {}, error = '', mask }, ref) => {
  return (
    <Controller
      {...formProps}
      render={({ field }) => (
        <View style={styles.containerError}>
          <View style={styles.group}>
            <TextInput
              ref={ref}
              value={field.value ?? ''}
              onChangeText={(text) => {
                const masked = mask ? mask(text) : text;
                field.onChange(masked);
                if (inputProps.onChangeText) inputProps.onChangeText(masked);
              }}
              {...inputProps}
              style={[styles.input, inputProps?.style]}
            />
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    />
  );
});

export { Input };
