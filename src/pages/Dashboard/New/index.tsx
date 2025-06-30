import { Form, NewStyle, Main, UploadImg, ContainerFildes } from "./style";
import { PanelHeader } from "../../../shared/components/PanelHeader";
import { Footer } from "../../../shared/components/Footer";
import { Input } from "../../../shared/components/InputForm";
import { useForm } from "react-hook-form";
import { fieldsNewCar, schemaNewCar, type TypeNewCar } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUpload } from "react-icons/fi";

export const DashboardNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TypeNewCar>({
    resolver: zodResolver(schemaNewCar),
    mode: "onChange",
  });

  return (
    <NewStyle>
      <PanelHeader />
      <Main>
        <Form>
          <div className="upload">
            <UploadImg>
              <Input
                error={errors.imagem?.message}
                name="imagem"
                type="file"
                register={register}
              />
              <FiUpload size={30} />
            </UploadImg>
          </div>

          <ContainerFildes>
            { fieldsNewCar.map((filde)=>(
              <Input
                error={errors.[filde.nome]?.message}
                name={filde.nome}
                type={filde.tipo}
                register={register}
              />
            ))
            }
          </ContainerFildes>

        </Form>
      </Main>
      <Footer />
    </NewStyle>
  );
};
