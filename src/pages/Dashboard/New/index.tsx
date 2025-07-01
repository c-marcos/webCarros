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

export const DashboardNew = () => {
  const [srcImg, setSrcTmg] = useState("");
  const {handleLoading} = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeNewCar>({
    resolver: zodResolver(schemaNewCar),
    mode: "onChange",
  });

  const onSubmit = (data: TypeNewCar) => {
    handleLoading(true);
    console.log(data);
    // aqui você pode enviar para o backend

    handleLoading(false)

    notifyAlert('Dados enviados com sucesso.', "success")
  };

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setSrcTmg(imgURL);
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
