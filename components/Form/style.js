import { StyleSheet } from "react-native";
import color from "./../../contains/color";

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "80%",
    backgroundColor: color.white,
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 42,
    height: 42,
    backgroundColor: color.primary,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: color.white,
    fontWeight: "bold",
  },
});

export default styles;
