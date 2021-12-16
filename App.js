import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#48D1CC",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#AFEEEE",
};

const tasks = [
  {
    task: "알고리즘 풀기",
    icon: "book",
    theme: "#FFA500",
    stamp: "스터디",
  },
  {
    task: "아침 러닝 30분",
    icon: "weight-lifter",
    theme: "#CD5C5C",
    stamp: "운동",
  },
  {
    task: "유산소 30분",
    icon: "weight-lifter",
    theme: "#CD5C5C",
    stamp: "운동",
  },
  {
    task: "과일 주문하기",
    icon: "fruit-grapes",
    theme: "#8B008B",
    stamp: "식단",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: "#808080" }}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: "#808080" }}
        />
      </View>
    </View>
  );
};

export default function App(props) {
  return (
    <View
      style={{
        flex: 1,
        background: colors.themeColor,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View Style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign name="user" size={30} style={{ color: colors.white }} />
          </View>
        </View>
        <View>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"안녕하세요 User 님"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertivcal: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>할일</Text>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView style={{ backgroundColor: colors.background }}>
        {tasks.map((task) => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}
