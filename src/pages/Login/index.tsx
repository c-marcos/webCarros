import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/InputForm";
import { Container, Form } from "./style";
import logo from "../../assets/imgs/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaLogin, type FormLogin } from "./schema";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useLoading } from "../../shared/hooks/useLoading";
import { notifyAlert } from "../../shared/utils/nitifyAlert";
import { useEffect } from "react";
import { useUser } from "../../shared/hooks/useUser";

export const Login = () => {
  const { handleLoading } = useLoading();
  const navigate = useNavigate();
  const { handleUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormLogin>({
    resolver: zodResolver(schemaLogin),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      signOut(auth);
    }
    handleLogout();
  }, []);

  async function submit(data: FormLogin) {
    handleLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        handleUser(user.user);
        notifyAlert("Sucesso...", "success", 2000);
        handleLoading(false);
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        notifyAlert("Usuario ou senha invalido...", "error", 2000);
        handleLoading(false);
      });
  }

  return (
    <Container>
      <Link to="/" className="logoTipo">
        <img src={logo} alt="Logotipo" />
      </Link>
      <Form onSubmit={handleSubmit(submit)}>
          <Input
            error={errors.email?.message}
            name="email"
            type="email"
            register={register}
            placeholder="Digite o email..."
          />
        <Input
          error={errors.password?.message}
          name="password"
          type="password"
          placeholder="Digite sua senha..."
          register={register}
        />
        <Button bg="#1A1A1A" isValid={isValid}>
          Acessar
        </Button>
      </Form>
      <p>
        Ainda não possui uma conta?
        <Link to="/register"> Cadastre-se</Link>
      </p>
    </Container>
  );
};
