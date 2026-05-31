import { useState } from 'react'; 
import { Box, Typography, TextField } from '@mui/material'; 

function CharacterCounter() {
    const [text, setText] = useState("");

    return (
        <Box sx={{ textAlign: "center", marginTop: 5 }}>
            <TextField 
                label="Bir şey yazınız..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            
            <Typography sx={{ mt: 2, color: text.length > 20 ? "red" : "black" }}
            >Karakter Sayısı: {text.length}</Typography>
           {text.length > 20 && (  <Typography color="error" >20 Karakteri Geçtiniz!</Typography>
    )}
        </Box>
    );
} 

export default CharacterCounter;