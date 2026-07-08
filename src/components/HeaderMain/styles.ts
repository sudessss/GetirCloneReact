import { StyleSheet, Dimensions} from "react-native"

const { height, width } = Dimensions.get("window") 

const styles = StyleSheet.create({
    headerMain : {
        height: height * 0.064,
        backgroundColor: "#F7D102", 
        flexDirection: "row",       
        alignItems: "center",
    },

    headerOne : {
        height: height * 0.064,
        width: "81%",               
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: '3%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },

    headerOneView: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: 8,
  paddingLeft: 10,
  paddingRight: 10,
  borderLeftColor: "#F3F2FD",
  borderLeftWidth: 3,
},

    image : {
        width: 30,
        height: 30,
    },

    headerTwo : {
        height: height * 0.064,
        width: "19%",               
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;