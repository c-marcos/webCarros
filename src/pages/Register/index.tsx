import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/InputForm";
import { Container, Form } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaRegister, type FormRegister } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../api/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { notifyAlert } from "../../shared/utils/nitifyAlert";
import { useLoading } from "../../shared/hooks/useLoading";
import { useEffect } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const { handleLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormRegister>({
    resolver: zodResolver(schemaRegister),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      signOut(auth);
    }
    handleLogout();
  }, []);

  async function submit(data: FormRegister) {
    handleLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.nome,
        });
        handleLoading(false);
        notifyAlert("Cadastro realizado com sucesso...", "success");
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        handleLoading(false);
        notifyAlert("Não foi possivel realizar o cadstro...", "error");
      });
  }

  return (
    <Container>
      <Link to="/" className="logoTipo">
        <img
          src={logo}
          alt="Logotipo"
          style={{ maxWidth: "380px", width: "100%" }}
        />
      </Link>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          register={register}
          name="nome"
          type="text"
          error={errors.nome?.message}
          placeholder="Digite seu nome completo..."
        />
        <Input
          name="email"
          type="email"
          error={errors.email?.message}
          placeholder="Digite seu email.."
          register={register}
        />
        <Input
          name="password"
          error={errors.password?.message}
          type="password"
          placeholder="Digite a senha..."
          register={register}
        />
        <Button bg="#1A1A1A" isValid={isValid}>
          Cadastra
        </Button>
      </Form>
      <p>
        Já possui uma conta?
        <Link to="/login"> Faça login</Link>
      </p>
    </Container>
  );
};
