import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";


function HomePage() {
  const { user, setUser } = useAuth();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{

        height: '100vh',
        backgroundColor: '#faf9f8'
      }}
    >
      <Card>
        <CardContent
          sx={{
            padding: '4rem',
            width: '30rem'
          }}
        >
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
          >
            Seja bem vindo, {user?.name}
          </Typography>

          
        </CardContent>
      </Card>
    </Stack>
  )
}

export default HomePage;