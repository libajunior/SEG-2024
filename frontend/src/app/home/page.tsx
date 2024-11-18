import { Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";


function HomePage() {
  const navigate = useNavigate();
  const { user, setUser, setFactorId, factorId } = useAuth();
  const [qrCode, setQrCode] = useState<string>('')
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [hasVerified, setHasVerified] = useState<boolean>(false);
  const [verifiedCode, setVerifiedCode] = useState<string>('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadFactor();
  }, []);

  const loadFactor = async () => {

  }

  const handleConfigure = async () => {

  }

  const handleVerify = async () => {

  }

  const handleRemove = async () => {
    // AuthService.mfa.remove(factorId)
    //   .then(result => {
    //     if (result) setHasVerified(false);
    //   })
    //   .catch(error => {
    //     toast.error(String(error))
    //   });
  }

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
        <CardHeader
          avatar={
            <Avatar alt={user?.name}></Avatar>
          }
          action={
            <Tooltip title="Fazer logout">
              <IconButton
                onClick={handleSignOut}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          }
          title={user?.name}
          subheader={user?.email}
        />
        <CardContent
          sx={{
            padding: '4rem',
            width: '30rem'
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              marginBottom: '1rem'
            }}
          >
            Autenticação Dois Passos
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Tipo</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    App Autenticador
                  </TableCell>
                  <TableCell align="center">
                    {hasVerified ? (
                      <Chip color="primary" label="Verificado" />
                    ) : (
                      <Chip label="Não Verificado" />
                    )}

                  </TableCell>
                  <TableCell align="center">
                    {hasVerified ? (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleRemove}
                      >
                        Remover
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleConfigure}
                      >
                        Configurar
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog open={openDialog}>
        <DialogTitle>Ler QRCode</DialogTitle>
        <DialogContent>
          <img src={qrCode} />
          <Stack
            direction="column"
            justifyContent="center"
            gap={1}
          >
            <TextField
              size="small"
              variant="outlined"
              onChange={event => setVerifiedCode(event.target.value)}
            />
          <LoadingButton
            variant="contained"
            loading={loading}
            size="small"
              onClick={handleVerify}
          >
            Verificar
          </LoadingButton>
          </Stack>
        </DialogContent>
      </Dialog>

    </Stack>
  )
}

export default HomePage;