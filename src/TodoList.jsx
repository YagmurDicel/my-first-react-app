import { Container, Typography, TextField, Button, Stack, Box, List, ListItem, ListItemText } from '@mui/material'; // 1. EKSİK BİLEŞENLER EKLENDİ
import { useState } from "react"; // 2. USESTATE IMPORTU EKLENDİ

function TodoList() {

    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    //Yeni Görev Ekleme Fonksiyonu
    const addTask = () => {
        if(input.trim() !== ""){
            setTask([...task, input]);
            setInput(""); // Ekledikten sonra inputu temizlemesi için eklendi
        }
    };

    return(
        <Box sx={{textAlign: "center", mt: 10 }}>

        {/*Kullanıcı Inputu */}
        <TextField 
        value= {input} 
        label="Yeni Görev" 
        onChange={(e) =>setInput(e.target.value)}> 
        </TextField>

        {/*Ekle Butonu */}
        <Button 
        variant="contained" 
        sx={{ m:1 }} 
        onClick={addTask}>
        Ekle
        </Button>

        {/*Görevlerin Listesi */}
        <List>
            {task.map((item, index) => { 
                return ( 
                    <ListItem key={index}>
                        <ListItemText primary={item}>
                        </ListItemText>
                    </ListItem>
                );
            })}
        </List>
        </Box>
    );

}
export default TodoList;