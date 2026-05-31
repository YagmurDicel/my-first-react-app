import {Box, TextField, Typography, Button} from "@mui/material";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const handleLogin = () => {
        alert("Giriş Yapınız.");
    };

return (
<Box sx={{mt: 2}}>
<Typography variant="h4">Login</Typography>
<TextField 
label="Kullanıcı Adı: "
value={username} 
onChange={(e) => setUsername(e.target.value)}>
</TextField>

<TextField 
label="Şifre"
value={password}
onChange={(e) =>setpassword(e.target.value)}>
</TextField>

<Button variant="contained" onClick={handleLogin} sx={{ m: 1 }} >
    Giriş Yap
</Button>

<Button variant="outlined">
    Kayıt Ol
</Button>

</Box>
)}
export default Login;