"use client";

import { useRef, useState } from "react";

import { Button, Document, Language } from "@/components";

import {
  DIALOG_CARACTERS,
  DIALOG_METHODS,
  DIALOG_CODE_REACT,
  DIALOG_CODE_HTML,
} from "@/constants";

export default function DialogPage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);
  const dialogDemo = useRef<HTMLDialogElement>(null);

  const isHTML = language === Language.HTML;
  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {DIALOG_CARACTERS.map((character) => (
          <Document.ListItem key={character.title}>
            <Document.Dot />
            <span>{character.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Métodos JavaScript</Document.Heading2>

      <Document.BlockquoteContainer>
        {DIALOG_METHODS.map((method) => (
          <Document.Blockquote key={method.title}>
            <Document.Code>{method.title}</Document.Code>
            <Document.Paragraph>{method.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        Para utilizar os métodos nativos do{" "}
        <Document.Code>&lt;dialog&gt;</Document.Code>, você precisa ter uma
        referência ao elemento. A forma de obter essa referência varia
        dependendo do ambiente:
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>HTML - Usando id</Document.Code>
          <Document.Paragraph>
            No HTML puro, basta adicionar um <Document.Code>id</Document.Code>{" "}
            ao elemento. O navegador cria automaticamente uma variável global
            com o mesmo nome, permitindo acessar diretamente:{" "}
            <Document.Code>meuDialog.showModal()</Document.Code>
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>React - Usando useRef</Document.Code>
          <Document.Paragraph>
            No React, usamos o hook <Document.Code>useRef</Document.Code> para
            criar uma referência e a passamos via prop{" "}
            <Document.Code>ref</Document.Code>. Acessamos o elemento através de{" "}
            <Document.Code>dialogRef.current?.showModal()</Document.Code>
          </Document.Paragraph>
        </Document.Blockquote>
      </Document.BlockquoteContainer>

      <div className="flex gap-2 items-center justify-between max-w-2xl">
        <Document.Heading2>Código</Document.Heading2>

        <div className="flex gap-6 items-center">
          <Document.IconLanguage
            language={Language.HTML}
            onClick={() => setLanguage(Language.HTML)}
          />
          <Document.IconLanguage
            language={Language.REACT}
            onClick={() => setLanguage(Language.REACT)}
          />
        </div>
      </div>

      <Document.Pre>
        {isHTML ? DIALOG_CODE_HTML : DIALOG_CODE_REACT}
      </Document.Pre>

      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Clique no botão abaixo para ver o{" "}
        <Document.Code>&lt;dialog&gt;</Document.Code> em ação. Experimente
        fechá-lo com a tecla ESC ou clicando nos botões.
      </Document.Paragraph>

      <Button
        onClick={() => {
          dialogDemo.current?.showModal();
        }}
      >
        Abrir Dialog
      </Button>

      <dialog
        ref={dialogDemo}
        className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-2xl p-0 shadow-2xl max-w-md w-full m-auto"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            🎉 Dialog Nativo do HTML!
          </h3>
          <p className="text-gray-600 mb-6">
            Este modal foi criado apenas com HTML e CSS. Sem bibliotecas, sem
            JavaScript complexo. O backdrop, animação e acessibilidade vêm de
            graça!
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => dialogDemo.current?.close()}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={() => dialogDemo.current?.close("confirmed")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Confirmar
            </button>
          </div>
        </div>
      </dialog>
    </Document.Root>
  );
}
