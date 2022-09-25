import {
  Box,
  Card,
  CardHeader,
  Container,
  CardContent,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
  AlertColor,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { validations } from "../../utils";
import appApi from "./api/appApi";

type FormData = {
  Name: string;
  Email: string;
  PhoneNumber: string;
  Message: string;
};

interface toast {
    open: boolean;
    severity:AlertColor;
    message:string;
}
export const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [SendEmail, setSendEmail] = useState(false);
  const [openToast, setOpenToast] = useState<toast>({
    open:false,
    severity:'error',
    message:''
  });

  const onSubmitData = async (data: FormData) => {
    setSendEmail(true);
    const { status } = await appApi.post("/contact", { data });
    if (status !== 200) {
        setOpenToast({
            open:true,
            message:'Mensaje no Enviado',
            severity:'error'
        })
    }
    setOpenToast({
        open:true,
        message:'Mensaje Enviado',
        severity:'success'
    })
    setSendEmail(false);
    reset();
  };
  return (
    <Box component={Container} sx={{ my: 1 }}>
      <Box>
        <Card variant="elevation">
          <CardHeader title="Contactos" sx={{ textAlign: "center" }} />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmitData)} noValidate>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nombre Completo"
                    variant="filled"
                    fullWidth
                    {...register("Name", {
                      required: "Campo requerido",
                    })}
                    error={!!errors.Name}
                    helperText={errors.Name?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    variant="filled"
                    fullWidth
                    {...register("Email", {
                      required: "Campo requerido",
                      validate: validations.isEmail,
                    })}
                    error={!!errors.Email}
                    helperText={errors.Email?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Número de Contacto"
                    variant="filled"
                    type="text"
                    inputMode="numeric"
                    fullWidth
                    {...register("PhoneNumber", {
                      required: "Campo requerido",
                    })}
                    error={!!errors.PhoneNumber}
                    helperText={errors.PhoneNumber?.message}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Mensaje"
                    variant="filled"
                    fullWidth
                    multiline
                    {...register("Message", {
                      required: "Campo requerido",
                    })}
                    error={!!errors.Message}
                    helperText={errors.Message?.message}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
                <CircularProgress
                  color="secondary"
                  sx={{ display: SendEmail ? "block" : "none" }}
                />
                <Button
                  color="secondary"
                  size="large"
                  type="submit"
                  variant="outlined"
                  sx={{ display: SendEmail ? "none" : "block" }}
                >
                  Enviar Correo
                </Button>
                <Snackbar open={openToast.open} autoHideDuration={3000} onClose={() => setOpenToast({...openToast, open:false}) }>
                  <Alert severity={`${openToast.severity}`} sx={{ width: "100%" }}>
                    {openToast.message}
                  </Alert>
                </Snackbar>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
