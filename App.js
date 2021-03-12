import React, { useState } from "react";
import {StyleSheet,View,Text,SafeAreaView,StatusBar,Button} from "react-native";

import Form from "./src/components/Form";
import colors from "./src/utils/colors";

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  const [seriePares, setSeriePares]  = useState("2");
  const [lastPar, setLastPar] = useState(4);

  //let serieFN = ""
  const [serieFN, setSerieFN] = useState("0");
  //let numFN1 = 0;
  const [numFN1, setNumFN1] = useState(0);
  //let numFN2 = 1;
  const [numFN2, setNumFN2] = useState(1);

  //let serieFact = "";
  const [serieFact, setSerieFact] = useState("1");
  //let resFact = 1;
  const [resFact, setResFact] = useState(1);
  //let lastNumFact = 1;
  const [lastNumFact, setLastNumFact] = useState(2);


  const [serie, setSerie] = useState("");

  return (
    <>

      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>EXAMEN_SPETSNAZ</Text>
        <Form serie={serie}></Form>
      </SafeAreaView>
        
      
      <SafeAreaView style={styles.safeResultArea}>
      <View>
          <Button
            color="#FE05BA"
            title={"Serie numeros pares"}
            style={styles.button}
            onPress={() => {
                setLastPar(lastPar + 2);
                setSeriePares(seriePares + ", " + lastPar);
                console.log("Serie Pares:" + seriePares);
                setSerie(seriePares);
            }}
          ></Button>
      </View>
          <Separator />
      <View>
          <Button
            color="#FE05BA"
            title="Serie Fibonacci"
            style={styles.button}
            onPress={() => {
                setNumFN2(numFN1 + numFN2);
                setNumFN1(numFN2); 
                setSerieFN(serieFN + ", " + numFN2);

              console.log("Serie Fibonacci: " + serieFN);
              setSerie(serieFN);
            }}
          ></Button>
        </View>
           <Separator />
        <View>
          <Button
            color="#FE05BA"
            title="Serie factorial"
            style={styles.button}
            onPress={() => {
                setResFact(resFact * lastNumFact);
                setSerieFact(serieFact + ", " + resFact);
                setLastNumFact(lastNumFact + 1);
              console.log("Serie Factorial: " + serieFact);
              setSerie(serieFact);
            }}
          ></Button>
      </View>
    </SafeAreaView>
  
    </>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    backgroundColor:"#FE05BA",
    height: 200,
    
    alignItems: "center",
    marginBottom: 110,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 15,
  },
  button: {
    color: colors.RESULTADOS_COLOR,
    width: 200,
    marginLeft: 150,
    marginRight:150,
    marginTop:50,
    marginBottom:50,
    alignItems: "center",
    borderRadius: 30,
    padding: 50
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  safeResultArea: {
    backgroundColor: colors.RESULTADOS_COLOR,
    alignItems: "center",
    alignSelf: "center",
    marginTop:100,
    marginBottom:100,
    paddingBottom: 30,
    paddingTop: 30,
    width: "70%",
    borderRadius:30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  }
);