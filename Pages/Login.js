import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import Axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onPressSignInBtn = () => {
    // alert("press working");
    Axios.post("http://127.0.0.1:8000/api/auth/login", {
      email,
      password,
    })
      .then((res) => {
        console.log({ res });
      })
      .catch((e) => {
        console.log({ e });
      });
  };

  return (
    <>
      <Text>{JSON.stringify(email, password)}</Text>
      <View style={styles.container}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          name="email"
          onChange={(e) => onChangeInputEmail(e)}
        />
        <Text style={styles.inputTextPassword}>Password</Text>
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          name="password"
          onChange={(e) => onChangeInputPassword(e)}
        />
        <View style={styles.buttonContainer}></View>
        <Pressable
          onPress={onPressSignInBtn}
          title="Sign In"
          style={styles.button}
        >
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    marginBottom: 9,
    fontSize: 20,
  },
  inputTextPassword: {
    paddingTop: 10,
    marginBottom: 9,
    fontSize: 20,
  },
  input: {
    alignSelf: "stretch",
    marginHorizontal: 20,
    borderRadius: 44 / 2,
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 2,
    elevation: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
