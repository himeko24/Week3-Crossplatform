import { StyleSheet, View, TextInput } from "react-native";
import Counter from "./component/Counter";
import Profile from "./component/Profile";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [nameInput, setNameInput] = useState("Anonymous")
  const [nameValue, setNameValue] = useState("Anonymous")

  const handleIncrement = () => {
    setCount(count + 1)
  };

  const handleDecrement = () => {
    setCount(count - 1)
  };

  const handleValue = () => {
    setNameValue(nameInput)
    setAge(count)
  }

  return (
    <View style={styles.container}>
      <Profile
        name={nameValue}
        age={age} />
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleValue={handleValue}
      />
      <TextInput style={{ borderBottomWidth: 1.0 }}
        placeholder="Input your name here"
        value={nameInput}
        onChangeText={nameInput => setNameInput(nameInput)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textinput: {
    borderWidth: 1.0,
    paddingTop: 10,
  }
});