import "./styles.css";
import { initializeIcons, Icon } from "@fluentui/react";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
const SelectsButton = [
  {
    name: "Documentos SIG",
    estado: "SIG",
    id: 0,
  },

  {
    name: "Manual de Operação",
    estado: "MO",
    id: 1,
  },
  {
    name: "Prontuário Elétrico",
    estado: "PE",
    id: 2,
  },
];

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export function FormProcesso() {
  const [isActive, setIsActive] = useState("SIG");

  const [step, SetStep] = useState(0);
  const [nameStep, setNameStep] = useState([
    "Cadastre seu Documento",
    "Envie seu Arquivo",
  ]);
  const [files, setFiles] = useState([]);
  const [setData, setDataActive] = useState([
    {
      documento: "",
      sigla: "",
    },
  ]);
  initializeIcons();

  function handleChangeStep(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    SetStep(step + 1);
  }
  return (
    <div className="reset processoConteudo">
      <form className="modal">
        <div>
          <Icon iconName="Copy" />
          <h2>{nameStep[step]}</h2>
          {step === 0 && (
            <div className="checkbox">
              {SelectsButton.map((button, idx) => (
                <button
                  key={idx}
                  className={isActive === button.estado ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(button.estado);
                  }}
                >
                  {button.name}
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              {/* <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Arraste seu arquivo ou clique em <span class="filepond--label-action">Enviar Arquivo</span>'
              /> */}
            </div>
          )}
          <button
            className="voltar botaoDePasso"
            onClick={(e) => {
              e.preventDefault();
              SetStep(step - 1);
            }}
          >
            Voltar
          </button>
          <button
            className="proximo botaoDePasso"
            onClick={(e) => {
              e.preventDefault();
              SetStep(step + 1);
            }}
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}
