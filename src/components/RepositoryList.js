import { View, StyleSheet, Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import theme from "../theme";
import StyledText from "./StyledText";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    // para permitir scroll usamos flatList, aunque existen otros mejores. Para una lista es el óptimo
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={repo.id} style={styles.container}>
          <View>
            <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <StyledText fontWeight="bold" fontSize="subheading">
                {repo.ownerName}
              </StyledText>
              <StyledText> Rank: {repo.id} </StyledText>
            </View>

            <View style={styles.stats}>
              <View style={styles.skill}>
                <StyledText color="white" fontWeight={"bold"}>
                  Experience
                </StyledText>
                <StyledText color="white"> {repo.forksCount} </StyledText>
              </View>
              <View style={styles.skill}>
                <StyledText color="white" fontWeight={"bold"}>
                  Stars
                </StyledText>
                <StyledText color="white"> {repo.ratingAverage} </StyledText>
              </View>
              <View style={styles.skill}>
                <StyledText color="white" fontWeight={"bold"}>
                  Skills
                </StyledText>
                <StyledText color="white"> {repo.stargazersCount} </StyledText>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingBottom: 5,
  },
  skill: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginRight: 2,
    marginLeft: 2,
    padding: 3,
    flex: 1,
  },
  image: {
    height: 88,
    width: 88,
    borderRadius: 4,
    marginRight: 10,
  },
});

export default RepositoryList;
