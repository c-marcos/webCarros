import { Form, NewStyle, Main, UploadImg, ContainerFildes } from "./style";
import { PanelHeader } from "../../../shared/components/PanelHeader";
import { Footer } from "../../../shared/components/Footer";
import { Input } from "../../../shared/components/InputForm";
import { useForm } from "react-hook-form";
import { fieldsNewCar, schemaNewCar, type TypeNewCar } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUpload } from "react-icons/fi";
import { Button } from "../../../shared/components/Button";
import { TextArea } from "../../../shared/components/TextArea";
import { useState } from "react";
import { useLoading } from "../../../shared/hooks/useLoading";
import { notifyAlert } from "../../../shared/utils/nitifyAlert";
import { useUser } from "../../../shared/hooks/useUser";
// 👇 Use a variável de ambiente
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const DashboardNew = () => {
  const [srcImg, setSrcTmg] = useState("");
  const { handleLoading } = useLoading();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeNewCar>({
    resolver: zodResolver(schemaNewCar),
    mode: "onChange",
  });

  const onSubmit = async (data: TypeNewCar) => {};

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Novo nome do arquivo
    const newFileName = `${user.uid}-${file.name}`;

    // Criar um novo arquivo com o nome desejado
    const renamedFile = new File([file], newFileName, {
      type: file.type,
    });

    const formData = new FormData();
    formData.append("image", renamedFile); // usar o arquivo renomeado

    handleLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.url) {
        setSrcTmg(data.url); // para mostrar preview
        notifyAlert("Imagem enviada com sucesso!", "success");
      } else {
        notifyAlert("Erro ao enviar imagem", "error");
      }
    } catch (error) {
      console.error(error);
      notifyAlert("Erro na requisição", "error");
    } finally {
      handleLoading(false);
    }
  }

  return (
    <NewStyle>
      <PanelHeader />
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="upload">
            <UploadImg>
              <input
                type="file"
                accept="image/*"
                {...register("imagem")}
                onChange={(e) => {
                  handleFile(e); // atualiza preview
                  // RHF já captura o valor, não precisa de setValue aqui
                }}
              />
              <FiUpload size={30} />
            </UploadImg>
            {srcImg !== "" && (
              <div className="img">
                <img src={srcImg} alt="Imagem do carro escolhido." />
              </div>
            )}
          </div>

          <ContainerFildes>
            {fieldsNewCar.map((filde) => (
              <Input
                label={filde.label}
                key={filde.nome}
                error={
                  errors[filde.nome as keyof TypeNewCar]?.message as
                    | string
                    | undefined
                }
                name={filde.nome as keyof TypeNewCar}
                type={filde.tipo}
                register={register}
              />
            ))}
            <TextArea
              label="Descrição"
              error={errors.descricao?.message}
              name="descricao"
              register={register}
            />
            <Button className="cadastrar" isValid={isValid}>
              Cadastrar
            </Button>
          </ContainerFildes>
        </Form>
      </Main>
      <Footer />
    </NewStyle>
  );
};
