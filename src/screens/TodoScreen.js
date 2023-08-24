
import {Text, TouchableOpacity, View} from 'react-native'
import { TextInput } from 'react-native-paper';


const TodoScreen=()=>{
  return (
   <View style={{marginHorizontal: 5, marginTop: 80}}>
        <TextInput style={{paddingLeft:8, fontSize: 16, color:"#808080", margin: 10}}
         placeholder="add Todo" />
        
        

        <TouchableOpacity
					style={{
						backgroundColor: "#000",
						borderRadius: 6,
						paddingVertical: 12,
						marginVertical: 34,
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleAddTodo()}
				>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
						Add
					</Text>
				</TouchableOpacity>
   </View>
  )
}
export default TodoScreen;
